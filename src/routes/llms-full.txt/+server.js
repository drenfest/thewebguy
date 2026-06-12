import { buildLlmsFullText, llmTextHeaders } from "$lib/data/llm-context.js";

export function GET() {
  return new Response(buildLlmsFullText(), {
    headers: llmTextHeaders
  });
}
