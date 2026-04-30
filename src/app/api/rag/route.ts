import { NextRequest, NextResponse } from "next/server";
import { searchDocs, askAgent } from "@/Services/Rag";

export async function POST(req: NextRequest) {
  try {
    const { question, history } = await req.json();

    if (!question || typeof question !== "string") {
      return NextResponse.json(
        { error: "question es requerido" },
        { status: 400 }
      );
    }

    // 🧠 fallback si no hay historial
    const chatHistory = Array.isArray(history) ? history : [];

    // 🔍 1. búsqueda semántica
    const results = await searchDocs(question, 3);

    // 🤖 2. agente con memoria
    const answer = await askAgent(question, results, chatHistory);

    return NextResponse.json({ answer });

  } catch (error) {
    console.error("Error en /api/rag:", error);
    return NextResponse.json(
      { error: `Error: ${(error as Error).message}` },
      { status: 500 }
    );
  }
}