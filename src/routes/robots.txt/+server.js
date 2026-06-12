import { absoluteUrl } from "$lib/config/site.js";

export function GET() {
  return new Response(`User-agent: *
Allow: /
Disallow: /api/

# AI and LLM discovery:
# ${absoluteUrl("/llms.txt")}
# ${absoluteUrl("/llms-full.txt")}

Sitemap: ${absoluteUrl("/sitemap.xml")}
`, {
    headers: {
      "content-type": "text/plain; charset=utf-8"
    }
  });
}
