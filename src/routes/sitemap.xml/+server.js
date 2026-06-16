import { blogPosts, blogUrl, locationPages, locationUrl, servicePages, serviceUrl, skillPages, skillUrl } from "$lib/data/content.js";
import { absoluteUrl } from "$lib/config/site.js";
import sitemapLastmod from "$lib/data/sitemap-lastmod.json";

const fallbackLastmod = "2026-06-12";

export function GET() {
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
${urls.map((url) => `  <url><loc>${absoluteUrl(url)}</loc><lastmod>${sitemapLastmod[url] || fallbackLastmod}</lastmod></url>`).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=utf-8"
    }
  });
}
