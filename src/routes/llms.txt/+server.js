import { buildLlmsText, llmTextHeaders } from "$lib/data/llm-context.js";

export function GET() {
  return new Response(buildLlmsText(), {
    headers: llmTextHeaders
  });
}
