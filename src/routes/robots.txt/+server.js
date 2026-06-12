export function GET() {
  const origin = import.meta.env.PUBLIC_SITE_URL || "https://thewebguy.app";
  return new Response(`User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`, {
    headers: {
      "content-type": "text/plain; charset=utf-8"
    }
  });
}
