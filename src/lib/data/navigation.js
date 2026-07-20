function group(title, links) {
  return { title, links: links.filter(Boolean) };
}

function menu(groups, featured) {
  return {
    groups: groups.filter((item) => item.links.length),
    featured
  };
}

function taxonomyLink(label, href) {
  return { label, href };
}

function routeLink(label, href) {
  return { label, href };
}

function pageLink(label, href) {
  return routeLink(label, href);
}

function serviceLink(label, slug) {
  return routeLink(label, `/services/${slug}/`);
}

function skillLink(label, slug) {
  return routeLink(label, `/skills/${slug}/`);
}

function locationLink(label, slug) {
  return routeLink(label, `/locations/${slug}/`);
}

const blogTagMenuGroupNames = ["Troubleshooting Tags", "Tracking & Data Tags", "Platform Tags", "SEO & Launch Tags"];
const blogCategories = [
  ["Start Here", "/blog/category/start-here/"],
  ["Front-End & Layout", "/blog/category/front-end-layout/"],
  ["Forms, Tracking & Data", "/blog/category/forms-tracking-data/"],
  ["WordPress & CMS", "/blog/category/wordpress-cms/"],
  ["SEO, Pages & AI Launches", "/blog/category/seo-pages-ai/"],
  ["Ecommerce & Checkout", "/blog/category/ecommerce-checkout/"]
];
const fixNoteCategories = [
  ["Website Fixes", "/fix-notes/category/website-fixes/"],
  ["Page Speed", "/fix-notes/category/page-speed/"],
  ["Technical SEO", "/fix-notes/category/technical-seo/"],
  ["WordPress Support", "/fix-notes/category/wordpress-support/"],
  ["AI Website Cleanup", "/fix-notes/category/ai-website-cleanup/"],
  ["Tracking & Analytics", "/fix-notes/category/tracking-analytics/"],
  ["API Integrations", "/fix-notes/category/api-integrations/"],
  ["Ecommerce Support", "/fix-notes/category/ecommerce-support/"],
  ["Landing Pages", "/fix-notes/category/landing-pages/"],
  ["Production Debugging", "/fix-notes/category/production-debugging/"]
];
const blogTags = [
  ["Website Fixes", "/blog/tag/website-fixes/", "Troubleshooting Tags"],
  ["CSS", "/blog/tag/css/", "Troubleshooting Tags"],
  ["JavaScript", "/blog/tag/javascript/", "Troubleshooting Tags"],
  ["Mobile Layout", "/blog/tag/mobile-layout/", "Troubleshooting Tags"],
  ["Embeds & Iframes", "/blog/tag/embeds-iframes/", "Troubleshooting Tags"],
  ["Forms", "/blog/tag/forms/", "Tracking & Data Tags"],
  ["GA4 & GTM", "/blog/tag/ga4-gtm/", "Tracking & Data Tags"],
  ["Conversion Tracking", "/blog/tag/conversion-tracking/", "Tracking & Data Tags"],
  ["Analytics & Tracking", "/blog/tag/analytics-tracking/", "Tracking & Data Tags"],
  ["APIs & Integrations", "/blog/tag/api-integrations/", "Tracking & Data Tags"],
  ["Dashboards", "/blog/tag/dashboards/", "Tracking & Data Tags"],
  ["WordPress", "/blog/tag/wordpress/", "Platform Tags"],
  ["Plugin Conflicts", "/blog/tag/plugin-conflicts/", "Platform Tags"],
  ["Themes", "/blog/tag/themes/", "Platform Tags"],
  ["Page Builders", "/blog/tag/page-builders/", "Platform Tags"],
  ["WooCommerce", "/blog/tag/woocommerce/", "Platform Tags"],
  ["Ecommerce", "/blog/tag/ecommerce/", "Platform Tags"],
  ["Checkout", "/blog/tag/checkout/", "Platform Tags"],
  ["Emergency Support", "/blog/tag/emergency-support/", "Platform Tags"],
  ["Landing Pages", "/blog/tag/landing-pages/", "SEO & Launch Tags"],
  ["Technical SEO", "/blog/tag/technical-seo/", "SEO & Launch Tags"],
  ["SEO Audit", "/blog/tag/seo-audit/", "SEO & Launch Tags"],
  ["Internal Links", "/blog/tag/internal-links/", "SEO & Launch Tags"],
  ["Crawl Analysis", "/blog/tag/crawl-analysis/", "SEO & Launch Tags"],
  ["AI-Built Cleanup", "/blog/tag/ai-built/", "SEO & Launch Tags"],
  ["Site Speed", "/blog/tag/site-speed/", "SEO & Launch Tags"],
  ["Automation", "/blog/tag/automation/", "SEO & Launch Tags"]
];
const blogCategoryLinks = blogCategories.map(([label, href]) => taxonomyLink(label, href));
const fixNoteCategoryLinks = fixNoteCategories.map(([label, href]) => taxonomyLink(label, href));
const blogTagGroups = blogTagMenuGroupNames.map((title) => group(
  title,
  blogTags
    .filter(([, , menuGroup]) => menuGroup === title)
    .map(([label, href]) => taxonomyLink(label, href))
));

export const headerCta = {
  label: "Fix My Web Problem",
  href: "/contact/#request-form"
};

export const mainNavItems = [
  { label: "Services", href: "/services/", menuKey: "services" },
  { label: "Blog", href: "/blog/", menuKey: "blog" },
  { label: "Skills", href: "/skills/", menuKey: "skills" },
  { label: "Locations", href: "/locations/", menuKey: "locations" },
  { label: "About", href: "/about/", menuKey: "about", overviewLabel: "About The Web Guy" },
  { label: "Contact", href: "/contact/" }
];

export const utilityNavItems = mainNavItems.filter((item) => !item.menuKey);

export const megaMenus = {
  services: menu(
    [
      group("Fix & Stabilize", [
        serviceLink("Website Fixes", "website-fixes"),
        serviceLink("AI-Built Cleanup", "ai-built-website-cleanup"),
        serviceLink("WordPress Support", "wordpress-support"),
        serviceLink("Site Speed & Performance", "site-speed-performance"),
        serviceLink("Security, Hosting & Reliability", "security-hosting-reliability"),
        serviceLink("Ongoing Webmaster Support", "ongoing-webmaster-support")
      ]),
      group("Build & Update", [
        serviceLink("Landing Pages", "landing-pages"),
        serviceLink("React & Static Sites", "react-static-sites"),
        serviceLink("Ecommerce Support", "ecommerce-support"),
        serviceLink("API Integrations", "api-integrations"),
        serviceLink("Automation & Internal Tools", "automation-internal-tools")
      ]),
      group("SEO, Tracking & Systems", [
        serviceLink("Technical SEO Implementation", "technical-seo-implementation"),
        serviceLink("SEO Audit Implementation", "seo-audit-implementation"),
        serviceLink("Technical SEO Developer", "technical-seo-developer"),
        serviceLink("Schema Implementation", "schema-implementation-service"),
        serviceLink("GA4/GTM Setup Help", "ga4-gtm-setup-help"),
        serviceLink("Conversion Tracking Troubleshooting", "conversion-tracking-troubleshooting"),
        serviceLink("Analytics & Tracking", "analytics-tracking"),
        serviceLink("Agency Overflow", "agency-overflow"),
        serviceLink("Ecommerce Support", "ecommerce-support"),
        serviceLink("API Integrations", "api-integrations")
      ]),
      group("Focused WordPress Help", [
        serviceLink("WordPress Help", "wordpress-help"),
        serviceLink("WordPress Website Support", "wordpress-website-support"),
        serviceLink("WordPress Maintenance", "wordpress-maintenance"),
        serviceLink("WordPress Troubleshooting", "wordpress-troubleshooting"),
        serviceLink("Fix a WordPress Issue", "fix-wordpress-issue"),
        serviceLink("Broken WordPress Site", "fix-broken-wordpress-site"),
        serviceLink("WordPress Emergency Support", "wordpress-emergency-support"),
        serviceLink("White Screen of Death Fix", "wordpress-white-screen-of-death-fix"),
        serviceLink("Contact Form Not Working", "contact-form-not-working-wordpress"),
        serviceLink("Elementor Layout Broken", "elementor-layout-broken"),
        serviceLink("Plugin Conflict Help", "wordpress-plugin-conflict-help"),
        serviceLink("WordPress Small Tasks", "wordpress-developer-for-small-tasks"),
        serviceLink("Hourly WordPress Developer", "hourly-wordpress-developer")
      ]),
      group("Agency & Ecommerce Support", [
        serviceLink("Agency Overflow Developer", "agency-overflow-developer"),
        serviceLink("White Label WordPress Support", "white-label-wordpress-support"),
        serviceLink("Website Maintenance for Agencies", "website-maintenance-for-agencies"),
        serviceLink("Website Support for Agencies", "website-support-for-agencies"),
        serviceLink("Shopify Liquid Support", "shopify-liquid-support"),
        serviceLink("WooCommerce Support", "woocommerce-support"),
        serviceLink("WooCommerce Checkout Fix", "woocommerce-checkout-error-fix")
      ])
    ],
    {
      heading: "Not sure what service you need?",
      text: "Start with the symptom. Send the URL, what broke, what is stuck, or what needs to go live.",
      label: "Fix My Web Problem",
      href: "/contact/#request-form"
    }
  ),
  blog: menu(
    [
      group("Fix Notes", [
        taxonomyLink("View Fix Notes", "/fix-notes/"),
        ...fixNoteCategoryLinks.slice(0, 6)
      ]),
      group("Categories", blogCategoryLinks),
      ...blogTagGroups
    ],
    {
      heading: "Recent Fix Notes",
      text: "Short work notes from related cleanup, debugging, implementation, and support tasks.",
      label: "View Fix Notes",
      href: "/fix-notes/"
    }
  ),
  skills: menu(
    [
      group("Platforms", [
        skillLink("Shopify Plus & Liquid", "shopify-plus-liquid"),
        skillLink("WordPress Plugin Development", "wordpress-plugin-development"),
        skillLink("WordPress Theme Development", "wordpress-theme-development")
      ]),
      group("Performance & Reliability", [
        skillLink("Performance Engineering", "performance-engineering"),
        skillLink("Production Debugging", "production-debugging"),
        skillLink("Cloudflare, DNS & SSL", "cloudflare-dns-ssl")
      ]),
      group("Data, SEO & Integrations", [
        skillLink("GA4/GTM Measurement Integrity", "ga4-gtm-measurement-integrity"),
        skillLink("Programmatic SEO", "programmatic-seo"),
        skillLink("Schema & Structured Data", "schema-structured-data"),
        skillLink("Google Merchant Center & Product Data", "google-merchant-center-product-data"),
        skillLink("REST API & Webhook Integrations", "rest-api-webhook-integrations")
      ])
    ],
    {
      heading: "Technical depth behind the fixes",
      text: "Practical skills for debugging, implementation, SEO cleanup, tracking, automation, ecommerce, and platform support.",
      label: "View Skills",
      href: "/skills/"
    }
  ),
  locations: menu(
    [
      group("Core Service Area", [
        locationLink("Freeport, IL", "freeport-il"),
        locationLink("Rockford, IL", "rockford-il"),
        locationLink("Monroe, WI", "monroe-wi"),
        locationLink("Beloit, WI", "beloit-wi"),
        locationLink("Janesville, WI", "janesville-wi"),
        locationLink("Dixon, IL", "dixon-il"),
        locationLink("Sterling, IL", "sterling-il"),
        locationLink("Galena, IL", "galena-il")
      ]),
      group("Regional Areas", [
        locationLink("Dubuque, IA", "dubuque-ia"),
        locationLink("Madison, WI", "madison-wi")
      ]),
      group("More", [
        pageLink("View All Locations", "/locations/"),
        locationLink("Service Area Near Freeport, IL", "freeport-il"),
        pageLink("Contact for Remote Support", "/contact/")
      ])
    ],
    {
      heading: "Remote-friendly web support near Freeport, IL",
      text: "Hourly website help for nearby businesses, agencies, and teams across the Freeport/Rockford region and surrounding areas.",
      label: "View Locations",
      href: "/locations/"
    }
  ),
  about: menu(
    [
      group("The Basics", [
        pageLink("Rate", "/rate/"),
        pageLink("FAQ", "/faq/")
      ])
    ],
    {
      heading: "Straightforward contract web help",
      text: "Learn how the hourly rate works, what to send, and the kinds of website problems that fit best.",
      label: "Fix My Web Problem",
      href: "/contact/#request-form"
    }
  )
};

function mobileSectionFromMenu(key, label, overviewLabel, overviewHref) {
  const menu = megaMenus[key];

  return {
    key,
    label,
    links: [pageLink(overviewLabel, overviewHref)].filter(Boolean),
    groups: menu?.groups || []
  };
}

export const mobileNavSections = [
  mobileSectionFromMenu("services", "Services", "View All Services", "/services/"),
  mobileSectionFromMenu("blog", "Blog", "View Blog", "/blog/"),
  mobileSectionFromMenu("skills", "Skills", "View All Skills", "/skills/"),
  mobileSectionFromMenu("locations", "Locations", "View All Locations", "/locations/"),
  mobileSectionFromMenu("about", "About", "About The Web Guy", "/about/")
];
