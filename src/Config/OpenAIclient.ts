import OpenAI from "openai";

export const createClientOpenAI = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});