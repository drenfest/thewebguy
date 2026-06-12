import { blogPosts, blogUrl, locationPages, locationUrl, servicePages, serviceUrl, skillPages, skillUrl } from "$lib/data/content.js";

export function GET() {
  const origin = import.meta.env.PUBLIC_SITE_URL || "https://thewebguy.app";
  const urls = [
    "/",
    "/services/",
    ...servicePages.map((service) => serviceUrl(service.slug)),
    "/blog/",
    ...blogPosts.map((post) => blogUrl(post.slug)),
    "/skills/",
    ...skillPages.map((skill) => skillUrl(skill.slug)),
    "/locations/",
    ...locationPages.map((location) => locationUrl(location.slug)),
    "/about/",
    "/rate/",
    "/contact/",
    "/faq/",
    "/privacy/",
    "/terms/"
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${origin}${url}</loc></url>`).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=utf-8"
    }
  });
}
