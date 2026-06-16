import { absoluteUrl, site } from "$lib/config/site.js";

const LAST_MODIFIED = "2026-06-12";
const PROVIDER_ID = `${absoluteUrl("/")}#the-web-guy`;
const WEBSITE_ID = `${absoluteUrl("/")}#website`;

const coreAreas = [
  "Freeport, IL",
  "Rockford, IL",
  "Monroe, WI",
  "Beloit, WI",
  "Janesville, WI",
  "Dubuque, IA",
  "Madison, WI",
  "United States"
];

const coreTopics = [
  "Contract web developer",
  "WordPress support",
  "Technical SEO implementation",
  "Website fixes",
  "Landing pages",
  "GA4 and Google Tag Manager",
  "Shopify and Liquid",
  "Website speed cleanup",
  "API integrations",
  "Ongoing webmaster support"
];

function stripSiteSuffix(value = "") {
  return String(value).replace(/\s+\|\s+The Web Guy$/, "").trim();
}

function asText(value = "") {
  return String(value).replace(/\s+/g, " ").trim();
}

function areaServed(names = coreAreas) {
  return names.map((name) => ({ "@type": name === "United States" ? "Country" : "City", name }));
}

function listItem(item, index, itemType = "WebPage") {
  return {
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": item.type || itemType,
      name: asText(item.name),
      url: absoluteUrl(item.url),
      ...(item.description ? { description: asText(item.description) } : {})
    }
  };
}

function hourlyOffer(path) {
  return {
    "@type": "Offer",
    price: "55",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: absoluteUrl(path),
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "55",
      priceCurrency: "USD",
      unitText: "HOUR"
    }
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": PROVIDER_ID,
    name: site.name,
    url: absoluteUrl("/"),
    description: site.description,
    priceRange: site.rate,
    areaServed: areaServed(),
    knowsAbout: coreTopics
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: site.name,
    url: absoluteUrl("/"),
    description: site.description,
    publisher: { "@id": PROVIDER_ID }
  };
}

export function itemListSchema({ id = "", name = "", description = "", items = [], itemType = "WebPage" } = {}) {
  if (!items.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    ...(id ? { "@id": `${absoluteUrl(id)}#item-list` } : {}),
    name: asText(name),
    ...(description ? { description: asText(description) } : {}),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => listItem(item, index, itemType))
  };
}

export function offerCatalogSchema({ id = "/services/", name = "Website support services", services = [] } = {}) {
  if (!services.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${absoluteUrl(id)}#offer-catalog`,
    name,
    itemListElement: services.map((service, index) => ({
      "@type": "Offer",
      position: index + 1,
      itemOffered: {
        "@type": "Service",
        "@id": `${absoluteUrl(service.path)}#service`,
        name: stripSiteSuffix(service.name),
        serviceType: service.serviceType || stripSiteSuffix(service.name),
        description: asText(service.description),
        url: absoluteUrl(service.path),
        provider: { "@id": PROVIDER_ID }
      },
      price: "55",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(service.path)
    }))
  };
}

export function webPageSchema({ title, description, url }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(url)}#webpage`,
    url: absoluteUrl(url),
    name: stripSiteSuffix(title),
    description: asText(description),
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PROVIDER_ID },
    dateModified: LAST_MODIFIED
  };
}

export function breadcrumbSchema(items = [], currentPath = "/") {
  if (!items.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href || currentPath)
    }))
  };
}

export function faqSchema(items = []) {
  if (!items.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(([question, answer]) => ({
      "@type": "Question",
      name: asText(question),
      acceptedAnswer: {
        "@type": "Answer",
        text: asText(answer)
      }
    }))
  };
}

export function serviceSchema(service, path) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: stripSiteSuffix(service.h1 || service.title),
    serviceType: service.eyebrow || stripSiteSuffix(service.title),
    description: asText(service.meta || service.intro),
    url: absoluteUrl(path),
    provider: { "@id": PROVIDER_ID },
    areaServed: areaServed(),
    offers: hourlyOffer(path)
  };
}

export function skillPageSchema(skill, path) {
  const name = stripSiteSuffix(skill.h1 || skill.title);

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${absoluteUrl(path)}#skill-page`,
      url: absoluteUrl(path),
      name,
      description: asText(skill.meta || skill.intro),
      isPartOf: { "@id": WEBSITE_ID },
      about: {
        "@type": "DefinedTerm",
        "@id": `${absoluteUrl(path)}#defined-term`,
        name: skill.eyebrow,
        description: asText(skill.connection || skill.intro)
      },
      provider: { "@id": PROVIDER_ID },
      dateModified: LAST_MODIFIED
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${absoluteUrl(path)}#service`,
      name,
      serviceType: skill.eyebrow || name,
      description: asText(skill.meta || skill.intro),
      url: absoluteUrl(path),
      provider: { "@id": PROVIDER_ID },
      areaServed: areaServed(),
      offers: hourlyOffer(path)
    },
    {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      "@id": `${absoluteUrl(path)}#defined-term`,
      name: skill.eyebrow,
      description: asText(skill.connection || skill.intro),
      inDefinedTermSet: `${site.name} technical web skills`
    }
  ];
}

export function locationServiceSchema(location, path) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#local-service`,
    name: `Website support for ${location.city}, ${location.state}`,
    serviceType: "Local website support",
    description: asText(location.meta || `Hourly website support for ${location.city}, ${location.state}.`),
    url: absoluteUrl(path),
    provider: { "@id": PROVIDER_ID },
    areaServed: areaServed([`${location.city}, ${location.state}`]),
    offers: hourlyOffer(path)
  };
}

export function articleSchema(post, path) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${absoluteUrl(path)}#article`,
    mainEntityOfPage: absoluteUrl(path),
    headline: asText(post.h1 || stripSiteSuffix(post.title)),
    description: asText(post.meta || post.summary),
    author: { "@id": PROVIDER_ID },
    publisher: { "@id": PROVIDER_ID },
    dateModified: LAST_MODIFIED,
    image: absoluteUrl("/images/technical-web-support-hero.png")
  };
}

export function serviceListSchema(services = [], path = "/services/") {
  return itemListSchema({
    id: path,
    name: "Website services from The Web Guy",
    description: "Contract website services including WordPress support, website fixes, technical SEO, landing pages, tracking, ecommerce, integrations, reliability, automation, and ongoing webmaster support.",
    itemType: "Service",
    items: services.map((service) => ({
      type: "Service",
      name: service.h1 || service.title,
      description: service.meta || service.intro,
      url: `/services/${service.slug}/`
    }))
  });
}

export function blogPostListSchema(posts = [], path = "/blog/") {
  return itemListSchema({
    id: path,
    name: "Website troubleshooting blog posts",
    description: "Blog posts and technical notes from The Web Guy about website troubleshooting, SEO implementation, tracking, WordPress, performance, and web support.",
    itemType: "BlogPosting",
    items: posts.map((post) => ({
      type: "BlogPosting",
      name: post.h1 || post.title,
      description: post.meta || post.summary,
      url: `/blog/${post.slug}/`
    }))
  });
}

export function skillListSchema(skills = [], path = "/skills/") {
  return itemListSchema({
    id: path,
    name: "Technical web skills from The Web Guy",
    description: "Technical implementation skills behind The Web Guy's website support work.",
    itemType: "DefinedTerm",
    items: skills.map((skill) => ({
      type: "DefinedTerm",
      name: skill.eyebrow || skill.h1 || skill.title,
      description: skill.meta || skill.intro || skill.connection,
      url: `/skills/${skill.slug}/`
    }))
  });
}

export function locationListSchema(locations = [], path = "/locations/") {
  return itemListSchema({
    id: path,
    name: "Local website support service areas",
    description: "Local-friendly and remote-friendly website support service area pages.",
    itemType: "Service",
    items: locations.map((location) => ({
      type: "Service",
      name: `Website support in ${location.city}, ${location.state}`,
      description: location.meta,
      url: `/locations/${location.slug}/`
    }))
  });
}

export function serviceCatalogFromPages(services = [], path = "/services/") {
  return offerCatalogSchema({
    id: path,
    services: services.map((service) => ({
      path: `/services/${service.slug}/`,
      name: service.h1 || service.title,
      serviceType: service.eyebrow,
      description: service.meta || service.intro
    }))
  });
}

export function schemaList(...schemas) {
  return schemas.flat().filter(Boolean);
}
