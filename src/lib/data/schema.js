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
    offers: {
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
    }
  };
}

export function skillPageSchema(skill, path) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#skill-page`,
    url: absoluteUrl(path),
    name: stripSiteSuffix(skill.h1 || skill.title),
    description: asText(skill.meta || skill.intro),
    isPartOf: { "@id": WEBSITE_ID },
    about: {
      "@type": "DefinedTerm",
      name: skill.eyebrow,
      description: asText(skill.connection || skill.intro)
    },
    provider: { "@id": PROVIDER_ID },
    dateModified: LAST_MODIFIED
  };
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
    offers: {
      "@type": "Offer",
      price: "55",
      priceCurrency: "USD",
      url: absoluteUrl(path),
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "55",
        priceCurrency: "USD",
        unitText: "HOUR"
      }
    }
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

export function schemaList(...schemas) {
  return schemas.flat().filter(Boolean);
}
