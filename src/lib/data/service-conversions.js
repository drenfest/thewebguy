const genericCtas = new Set(["Get a Free Quote", "Request a Free Quote"]);

const conversionOverrides = {
  "wordpress-help": ["Show me the WordPress problem", "Request WordPress Help"],
  "wordpress-website-support": ["Start with the site and task list", "Request WordPress Support"],
  "wordpress-maintenance": ["Plan the next maintenance pass", "Request WordPress Maintenance"],
  "fix-wordpress-issue": ["Show me the WordPress issue", "Request a WordPress Fix"],
  "wordpress-white-screen-of-death-fix": ["Start with the error or blank screen", "Request White Screen Help"],
  "elementor-layout-broken": ["Show me the broken Elementor layout", "Request Elementor Help"],
  "wordpress-developer-for-small-tasks": ["Send the WordPress task list", "Request Small-Task Help"],
  "hourly-wordpress-developer": ["Start with the WordPress backlog", "Request WordPress Help"],
  "seo-audit-implementation": ["Send the audit and priority URLs", "Request SEO Implementation"],
  "schema-implementation-service": ["Start with the page and schema goal", "Request Schema Implementation"],
  "web-services-automation": ["Show me the repeated workflow", "Request Workflow Automation"],
  "website-maintenance-for-agencies": ["Plan the agency maintenance queue", "Request Agency Maintenance"],
  "website-support-for-agencies": ["Send the next client-site request", "Request Agency Website Support"],
  "shopify-liquid-support": ["Show me the Shopify change", "Request Shopify Liquid Help"]
};

function sentence(value = "") {
  const text = String(value).trim().replace(/[.!?]+$/, "");
  return text ? `${text[0].toLowerCase()}${text.slice(1)}` : "the work you need completed";
}

function firstUsefulSection(service) {
  return (service.sections || []).find((section) => section.bullets?.length || section.cards?.length);
}

export function serviceConversionFor(service) {
  const section = firstUsefulSection(service);
  const details = section?.bullets?.length
    ? section.bullets
    : (section?.cards || []).map(([heading]) => heading);
  const primaryNeed = details?.[0] || service.audienceHeading || service.h1;
  const secondaryNeed = details?.[1] || service.intro;
  const suppliedCta = service.cta || "Get a Free Quote";
  const override = conversionOverrides[service.slug];
  const label = override?.[1] || (genericCtas.has(suppliedCta) ? `Ask About ${service.eyebrow}` : suppliedCta);

  if (service.uplift?.finalCta) {
    const [heading, copy, upliftLabel] = service.uplift.finalCta;
    return {
      status: "Project handoff",
      statusAction: service.eyebrow,
      eyebrow: "A focused first step",
      heading,
      copy,
      label: upliftLabel,
      tags: ["URL + symptom", "Expected result", "Priority"],
      proof: [primaryNeed, secondaryNeed, "Scope and cost agreed before work starts"]
    };
  }

  return {
    status: "Project handoff",
    statusAction: service.eyebrow,
    eyebrow: "A focused first step",
    heading: override?.[0] || (genericCtas.has(suppliedCta) ? `Ask about ${service.eyebrow.toLowerCase()}` : suppliedCta),
    copy: `Send the URL and tell me about ${sentence(primaryNeed)}. Include what should happen instead and any deadline or recent change that matters.`,
    label,
    tags: ["URL + context", "Expected result", "Priority"],
    proof: [primaryNeed, secondaryNeed, "Scope and cost agreed before work starts"]
  };
}
