import { createClientOpenAI as OpenAI } from "@/Config/OpenAIclient";
import { docs } from "@/Services/Docs";

export async function getRows() {
  const responseEmb = await OpenAI.embeddings.create({
    model: "text-embedding-3-small",
    input: docs.map(doc => doc.content)
  });

  return docs.map((doc, i) => ({
    content: doc.content,
    embedding: responseEmb.data[i].embedding,
    metadata: doc.metadata
  }));
}


