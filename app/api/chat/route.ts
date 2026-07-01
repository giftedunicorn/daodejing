import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

import { startupXinfaSystemPrompt } from "@/lib/prompts/startup-xinfa";

export const runtime = "nodejs";

type ChatRequestBody = {
  messages?: Array<{
    role: "user" | "assistant" | "system";
    content: string;
  }>;
};

export async function POST(request: Request): Promise<Response> {
  if (!process.env.OPENAI_API_KEY) {
    return Response.json(
      { error: "OPENAI_API_KEY is not configured." },
      { status: 500 },
    );
  }

  const body = (await request.json()) as ChatRequestBody;
  const messages = body.messages ?? [];

  try {
    const result = streamText({
      model: openai(process.env.OPENAI_MODEL ?? "gpt-4.1-mini"),
      system: startupXinfaSystemPrompt,
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
