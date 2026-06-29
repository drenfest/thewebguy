import {
  blogMap,
  blogUrl,
  locationMap,
  locationUrl,
  serviceMap,
  servicePages,
  serviceSkillMap,
  serviceUrl,
  skillMap,
  skillUrl
} from "./content.js";

export const staticRoutes = new Set(["/", "/services/", "/blog/", "/skills/", "/locations/", "/rate/", "/about/", "/faq/", "/contact/"]);
export const regionalSupportSlugs = ["freeport-il", "rockford-il", "monroe-wi", "beloit-wi", "janesville-wi", "madison-wi"];

export function routeLink(label, href) {
  return { label, href };
}

export function pageLink(label, href) {
  return staticRoutes.has(href) ? routeLink(label, href) : null;
}

export function serviceLink(label, slug) {
  return serviceMap[slug] ? { label, href: serviceUrl(slug) } : null;
}

export function blogLink(label, slug) {
  return blogMap[slug] ? { label, href: blogUrl(slug) } : null;
}

export function skillLink(label, slug) {
  return skillMap[slug] ? { label, href: skillUrl(slug) } : null;
}

export function locationLink(label, slug) {
  return locationMap[slug] ? { label, href: locationUrl(slug) } : null;
}

export function resolveServices(slugs = []) {
  return slugs.map((slug) => serviceMap[slug]).filter(Boolean);
}

export function resolveSkills(slugs = []) {
  return slugs.map((slug) => skillMap[slug]).filter(Boolean);
}

export function resolveLocations(slugs = []) {
  return slugs.map((slug) => locationMap[slug]).filter(Boolean);
}

export function relatedServicesForService(service) {
  return resolveServices(service?.related || []);
}

export function relatedSkillSlugsForService(service) {
  return service?.skillSlugs || serviceSkillMap[service?.slug] || [];
}

export function relatedSkillsForService(service) {
  return resolveSkills(relatedSkillSlugsForService(service));
}

export function serviceTopicalItems(service, relatedServices = [], relatedSkills = []) {
  return [
    {
      label: "Service hub",
      title: "Website Services",
      copy: "Use the full services hub when the problem crosses fixes, WordPress, SEO, tracking, ecommerce, speed, or ongoing support.",
      href: "/services/"
    },
    ...relatedServices.slice(0, 3).map((related) => ({
      label: "Related service",
      title: related.h1.replace(" at $55/hr", ""),
      copy: `${service.eyebrow} often overlaps with ${related.eyebrow.toLowerCase()} when the work touches the same site, template, tracking, or technical backlog.`,
      href: serviceUrl(related.slug)
    })),
    ...relatedSkills.slice(0, 3).map((skill) => ({
      label: "Related skill",
      title: skill.eyebrow,
      copy: skill.connection,
      href: skillUrl(skill.slug)
    }))
  ];
}

export function serviceContextualSupportItems(service, relatedServices = [], relatedSkills = []) {
  return [
    ...relatedSkills.slice(0, 2).map((skill) => ({
      title: skill.eyebrow,
      href: skillUrl(skill.slug),
      titleAttr: `View ${skill.eyebrow} from ${service.eyebrow}`,
      copy: skill.connection
    })),
    ...relatedServices.slice(0, 2).map((related) => ({
      title: related.h1.replace(" at $55/hr", ""),
      href: serviceUrl(related.slug),
      titleAttr: `View ${related.eyebrow} from ${service.eyebrow}`,
      copy: related.intro
    }))
  ];
}

export function serviceClusterPagesFor(service, limit = 12) {
  const clusterAnchorSlug = service?.clusterAnchor || service?.slug;

  return servicePages.filter((page) => (
    page.slug !== service?.slug &&
    (page.clusterAnchor === clusterAnchorSlug || page.slug === clusterAnchorSlug || (page.clusterLinks || []).includes(service?.slug))
  )).slice(0, limit);
}

export function serviceClusterTopicalItems(pages = []) {
  return pages.map((page) => ({
    label: page.keywordCluster || "Related path",
    title: page.eyebrow,
    copy: page.intro,
    href: serviceUrl(page.slug)
  }));
}

export function relatedServicesForSkill(skill) {
  return resolveServices(skill?.relatedServices || []);
}

export function relatedSkillsForSkill(skill) {
  return resolveSkills(skill?.relatedSkills || []);
}

export function skillTopicalItems(skill, relatedServiceCards = [], relatedSkills = []) {
  return [
    {
      label: "Skill hub",
      title: "Technical Web Skills",
      copy: "Use the skills hub when the issue is easier to describe by platform, tool, integration, debugging path, or implementation detail.",
      href: "/skills/"
    },
    ...relatedServiceCards.slice(0, 3).map((service) => ({
      label: "Service connection",
      title: service.h1.replace(" at $55/hr", ""),
      copy: `${skill.eyebrow} usually becomes useful during ${service.eyebrow.toLowerCase()}, especially when implementation has to happen inside an existing website.`,
      href: serviceUrl(service.slug)
    })),
    ...relatedSkills.slice(0, 3).map((related) => ({
      label: "Nearby skill",
      title: related.eyebrow,
      copy: related.connection,
      href: skillUrl(related.slug)
    }))
  ];
}

export function skillContextualSupportItems(skill, relatedServiceCards = [], relatedSkills = []) {
  return [
    ...relatedServiceCards.slice(0, 3).map((service) => ({
      title: service.h1.replace(" at $55/hr", ""),
      href: serviceUrl(service.slug),
      titleAttr: `View ${service.eyebrow} from ${skill.eyebrow}`,
      copy: `${skill.eyebrow} usually matters here when the work needs to become a finished site change instead of a technical note.`
    })),
    ...relatedSkills.slice(0, 1).map((related) => ({
      title: related.eyebrow,
      href: skillUrl(related.slug),
      titleAttr: `View ${related.eyebrow} from ${skill.eyebrow}`,
      copy: related.connection
    }))
  ];
}

export function relatedServicesForLocation(location) {
  return resolveServices(location?.relatedServices || []);
}

export function relatedSkillsForLocation(location) {
  return resolveSkills(location?.relatedSkills || []);
}

export function nearbyLocationsForLocation(location) {
  return resolveLocations(location?.nearby || []);
}

export function regionalLinkLocationsForLocation(location, slugs = regionalSupportSlugs) {
  return resolveLocations(slugs).filter((nearby) => nearby.slug !== location?.slug);
}

export function locationTopicalItems(location, relatedServices = [], relatedSkills = []) {
  return [
    {
      label: "Service area hub",
      title: "Local Website Support Near Freeport, IL",
      copy: "Use the locations hub to compare nearby service areas and understand how local-friendly remote web support is organized.",
      href: "/locations/"
    },
    ...relatedServices.slice(0, 3).map((service) => ({
      label: `${location.city} service fit`,
      title: service.h1.replace(" at $55/hr", ""),
      copy: `${location.city}-area sites often need ${service.eyebrow.toLowerCase()} when local pages, lead forms, tracking, or platform cleanup are part of the work.`,
      href: serviceUrl(service.slug)
    })),
    ...relatedSkills.slice(0, 3).map((skill) => ({
      label: "Useful capability",
      title: skill.eyebrow,
      copy: skill.connection,
      href: skillUrl(skill.slug)
    }))
  ];
}

export function locationContextualSupportItems(location, nearbyLocations = [], relatedServices = []) {
  return [
    ...nearbyLocations.slice(0, 3).map((nearby) => ({
      title: `Local Website Support in ${nearby.city}, ${nearby.state}`,
      href: locationUrl(nearby.slug),
      titleAttr: `View web support for ${nearby.city}, ${nearby.state} from ${location.city}, ${location.state}`,
      copy: `for nearby regional context when the visitor is comparing local-friendly website support around ${location.city}.`
    })),
    ...relatedServices.slice(0, 2).map((service) => ({
      title: service.h1.replace(" at $55/hr", ""),
      href: serviceUrl(service.slug),
      titleAttr: `View ${service.eyebrow} for ${location.city}, ${location.state}`,
      copy: `${location.city}-area sites often need this when local pages, forms, tracking, platform cleanup, or SEO implementation become part of the request.`
    }))
  ];
}

export function locationLinkSeries(locations = []) {
  return locations.flatMap((nearby, index) => [
    index === 0 ? "" : index === locations.length - 1 ? ", and " : ", ",
    {
      text: `${nearby.city}, ${nearby.state}`,
      href: locationUrl(nearby.slug),
      title: `View local website support for ${nearby.city}, ${nearby.state}`
    }
  ]);
}
