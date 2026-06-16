const heroBasePath = "/images/heroes";
const pageSpecificLocationSlugs = new Set(["freeport-il", "rockford-il"]);

export function heroImage(slug, alt) {
  return {
    slug,
    alt,
    basePath: heroBasePath,
    width: 1280,
    height: 720
  };
}

export const staticHeroImages = {
  home: heroImage(
    "home-contract-web-support",
    "Contract web developer workspace with code, analytics dashboards, SEO notes, and technical website support tools"
  ),
  services: heroImage(
    "hub-website-services",
    "Website services planning workspace for WordPress support, technical SEO implementation, tracking cleanup, and site fixes"
  ),
  skills: heroImage(
    "hub-technical-web-skills",
    "Technical web skills workspace with code editor, API diagrams, tracking dashboards, and performance debugging tools"
  ),
  locations: heroImage(
    "hub-local-website-support",
    "Local website support planning desk with regional business notes, service area pages, lead tracking, and WordPress updates"
  ),
  blog: heroImage(
    "hub-website-troubleshooting-blog",
    "Website troubleshooting notes workspace with broken layout sketches, JavaScript debugging, forms, tracking, and CMS issue notes"
  ),
  contact: heroImage(
    "page-contact-website-request",
    "Website support request workspace with a contact form draft, site URL notes, timeline, and technical issue checklist"
  ),
  rate: heroImage(
    "page-contract-rate",
    "Contract website help rate workspace with hourly support notes, task list, website fixes, and technical cleanup planning"
  ),
  about: heroImage(
    "page-about-contract-support",
    "Practical contract website support workspace showing WordPress, SEO, tracking, ecommerce, and troubleshooting tools"
  ),
  faq: heroImage(
    "page-contract-website-help-faq",
    "Contract website help FAQ workspace with organized support questions about WordPress, SEO, tracking, rates, and fixes"
  ),
  privacy: heroImage(
    "page-privacy-website-data",
    "Website privacy and contact form data workspace with secure request handling, analytics controls, and technical documentation"
  ),
  terms: heroImage(
    "page-terms-contract-web-work",
    "Contract website support terms workspace with scope notes, access rules, third-party platform details, and hourly work terms"
  )
};

export function serviceHeroImage(service) {
  return heroImage(
    `service-${service.slug}`,
    `${service.eyebrow} hero photo showing practical website support for ${service.h1.replace(" at $55/hr", "").toLowerCase()}`
  );
}

export function skillHeroImage(skill) {
  return heroImage(
    `skill-${skill.slug}`,
    `${skill.eyebrow} hero photo showing technical website implementation work for ${skill.h1.replace(" at $55/hr", "").toLowerCase()}`
  );
}

export function locationHeroImage(location) {
  if (!pageSpecificLocationSlugs.has(location.slug)) {
    return {
      ...staticHeroImages.locations,
      alt: `Local website support hero photo for ${location.city}, ${location.state} businesses needing WordPress, SEO, tracking, and website fixes`
    };
  }

  return heroImage(
    `location-${location.slug}`,
    `Local website support hero photo for ${location.city}, ${location.state} businesses needing WordPress, SEO, tracking, and website fixes`
  );
}

export function blogHeroImage(post) {
  return heroImage(
    post.heroImageSlug || `blog-${post.slug}`,
    `${post.eyebrow} hero photo for article about ${post.h1 || post.title}`
  );
}
