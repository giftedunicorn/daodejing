import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

import { founderCompassSystemPrompt } from "@/lib/prompts/founder-compass";

export const runtime = "nodejs";

type ChatRequestBody = {
  messages?: Array<{
    role: "user" | "assistant" | "system";
    content: string;
  }>;
};

export async function POST(request: Request): Promise<Response> {
  if (!process.env.DEEPSEEK_API_KEY) {
    return Response.json(
      { error: "DEEPSEEK_API_KEY is not configured." },
      { status: 500 },
    );
  }

  const body = (await request.json()) as ChatRequestBody;
  const messages = body.messages ?? [];
  const deepseek = createOpenAI({
    apiKey: process.env.DEEPSEEK_API_KEY,
    baseURL: "https://api.deepseek.com",
    compatibility: "compatible",
    name: "deepseek",
  });

  try {
    const result = streamText({
      model: deepseek(process.env.DEEPSEEK_MODEL ?? "deepseek-v4-flash"),
      system: founderCompassSystemPrompt,
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";

    return Response.json(
      { error: `Chat response failed: ${message}` },
      { status: 500 },
    );
  }
}
