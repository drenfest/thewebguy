import {
  blogPosts,
  blogUrl,
  faqs,
  locationPages,
  locationUrl,
  servicePages,
  serviceUrl,
  skillPages,
  skillUrl
} from "./content.js";

const mainPageMeta = {
  "/": {
    title: "The Web Guy",
    description: "Contract WordPress, web development, technical SEO, landing page, tracking, ecommerce, and website support at $55/hr.",
    type: "Main page"
  },
  "/services/": {
    title: "Website Services",
    description: "WordPress support, website fixes, technical SEO implementation, landing pages, tracking cleanup, ecommerce, APIs, automation, and ongoing webmaster help.",
    type: "Hub"
  },
  "/blog/": {
    title: "Website Troubleshooting Blog",
    description: "Practical notes for broken websites, forms, tracking scripts, WordPress weirdness, SEO audits, and fast page launches.",
    type: "Hub"
  },
  "/skills/": {
    title: "Technical Web Skills",
    description: "Platform, debugging, SEO, tracking, data, API, performance, and reliability skills behind practical website support.",
    type: "Hub"
  },
  "/locations/": {
    title: "Local Website Support",
    description: "Remote-friendly hourly website support near Freeport, Rockford, Monroe, Beloit, Janesville, Madison, Dubuque, and nearby regions.",
    type: "Hub"
  },
  "/rate/": {
    title: "Contract Rate",
    description: "Hourly contract website support at $55/hr for quick fixes, small projects, recurring support, and agency overflow.",
    type: "Main page"
  },
  "/about/": {
    title: "About The Web Guy",
    description: "Practical contract website support focused on WordPress, SEO implementation, landing pages, tracking, and website fixes.",
    type: "Main page"
  },
  "/faq/": {
    title: "FAQ",
    description: "Answers about rates, WordPress support, SEO implementation, tracking, ecommerce, monthly support, and sending a request.",
    type: "Main page"
  },
  "/contact/": {
    title: "Contact The Web Guy",
    description: "Send the website problem, URL, timeline, work type, and context for practical hourly support.",
    type: "Contact"
  }
};

function flatten(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(flatten).join(" ");
  if (typeof value === "object") return Object.values(value).map(flatten).join(" ");
  return String(value);
}

function cleanTitle(title = "") {
  return title.replace(/\s*\|\s*The Web Guy\s*$/i, "").replace(/\s+at\s+\$55\/hr$/i, "");
}

function entry({ title, description, href, type, body = "" }) {
  const cleanedTitle = cleanTitle(title);
  return {
    title: cleanedTitle,
    description,
    href,
    type,
    searchable: `${cleanedTitle} ${description || ""} ${body}`.toLowerCase()
  };
}

export const searchIndex = [
  ...Object.entries(mainPageMeta).map(([href, page]) => entry({ ...page, href })),
  ...servicePages.map((service) =>
    entry({
      title: service.h1 || service.title,
      description: service.meta || service.intro,
      href: serviceUrl(service.slug),
      type: "Service",
      body: flatten([service.eyebrow, service.intro, service.audience, service.sections, service.related])
    })
  ),
  ...blogPosts.map((post) =>
    entry({
      title: post.h1 || post.title,
      description: post.meta || post.summary,
      href: blogUrl(post.slug),
      type: "Blog",
      body: flatten([post.eyebrow, post.summary, post.problemType, post.sections, post.faqs, post.links, post.contextCards])
    })
  ),
  ...skillPages.map((skill) =>
    entry({
      title: skill.h1 || skill.title,
      description: skill.meta || skill.intro,
      href: skillUrl(skill.slug),
      type: "Skill",
      body: flatten([skill.eyebrow, skill.intro, skill.problems, skill.tasks, skill.connection, skill.contextCards, skill.faqs])
    })
  ),
  ...locationPages.map((location) =>
    entry({
      title: `${location.city}, ${location.state} Website Support`,
      description: location.meta,
      href: locationUrl(location.slug),
      type: "Location",
      body: flatten([location.context, location.tasks, location.region, location.relatedServices, location.relatedSkills])
    })
  ),
  ...faqs.map(([question, answer, href]) =>
    entry({
      title: question,
      description: answer,
      href,
      type: "FAQ",
      body: answer
    })
  )
];

export function searchPages(query, limit = 6) {
  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .map((term) => term.trim())
    .filter((term) => term.length > 1);

  if (terms.join("").length < 4) return [];

  return searchIndex
    .map((item) => {
      const title = item.title.toLowerCase();
      const description = (item.description || "").toLowerCase();
      const score = terms.reduce((total, term) => {
        if (title === term) return total + 80;
        if (title.includes(term)) return total + 35;
        if (description.includes(term)) return total + 18;
        if (item.searchable.includes(term)) return total + 8;
        return total;
      }, 0);

      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit);
}
