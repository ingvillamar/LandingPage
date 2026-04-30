/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClientSupabase } from "@/Config/SupabaseClient";
import { createClientOpenAI } from "@/Config/OpenAIclient";

// Clientes
export const Supabase = createClientSupabase();
export const Openai = createClientOpenAI // 🔥 FIX

// 🧠 detectar inputs vagos
function isFollowUp(question: string) {
  const q = question.toLowerCase().trim();
  const vague = ["si", "sí", "ok", "dale", "porfa", "claro"];
  return vague.includes(q);
}

// 🔍 búsqueda vectorial
export async function searchDocs(userQuestion: string, matchCount: number) {
  const queryEmb = await Openai.embeddings.create({
    model: "text-embedding-3-small",
    input: userQuestion
  });

  const { data, error } = await Supabase.rpc("match_documents", {
    query_embedding: queryEmb.data[0].embedding,
    match_count: matchCount
  });

  if (error) throw error;

  // 🔥 opcional: filtrar resultados pobres
  return data?.slice(0, 3) || [];
}

// 🤖 agente principal
export async function askAgent(
  userQuestion: string,
  results: any[],
  chatHistory: any[]
) {

  // 🟡 1. input vago
  if (isFollowUp(userQuestion)) {
    return "Claro 🙂 ¿Sobre qué proyecto te gustaría más información?";
  }

  // 🔴 2. sin contexto
  if (!results || results.length === 0) {
    return "Lo siento, no encontré información relacionada con tu consulta.";
  }

  // 🧩 3. contexto estructurado
  const context = results.map(r => `
[DOCUMENTO]
Tipo: ${r.metadata.type}
Tags: ${r.metadata.tags.join(", ")}
Contenido: ${r.content}
`).join("\n\n");

  // 🧠 4. mensajes con memoria
  const messages = [
    {
      role: "system",
      content: `
Eres un asistente de atención al cliente de la empresa Architek AI.

REGLAS:
- Usa el CONTEXTO como fuente principal.
- Puedes usar el HISTORIAL para entender la conversación.
- Si la pregunta es ambigua (ej: "sí", "ok"), pide aclaración.
- Si está relacionada pero incompleta, responde de forma útil sin inventar.
- SOLO rechaza si no tiene relación con servicios o proyectos.

PROHIBIDO:
- Inventar información
- Responder temas fuera del negocio

ESTILO:
- Profesional, claro y conversacional
`
    },

    // 🔥 memoria conversacional
    ...chatHistory,

    {
      role: "user",
      content: `
CONTEXTO:
${context}

PREGUNTA:
${userQuestion}
`
    }
  ];

  const response = await Openai.responses.create({
    model: "gpt-4.1-mini",
    temperature: 0.2,
    input: messages
  });

  return response.output_text;
}