import {
  blogPosts,
  blogUrl,
  locationMap,
  locationUrl,
  serviceMap,
  serviceUrl,
  skillMap,
  skillUrl
} from "./content.js";

const staticRoutes = new Set(["/", "/services/", "/blog/", "/skills/", "/locations/", "/rate/", "/about/", "/faq/", "/contact/"]);
const blogMap = Object.fromEntries(blogPosts.map((post) => [post.slug, post]));

function pageLink(label, href) {
  return staticRoutes.has(href) ? { label, href } : null;
}

function serviceLink(label, slug) {
  return serviceMap[slug] ? { label, href: serviceUrl(slug) } : null;
}

function blogLink(label, slug) {
  return blogMap[slug] ? { label, href: blogUrl(slug) } : null;
}

function skillLink(label, slug) {
  return skillMap[slug] ? { label, href: skillUrl(slug) } : null;
}

function locationLink(label, slug) {
  return locationMap[slug] ? { label, href: locationUrl(slug) } : null;
}

function group(title, links) {
  return { title, links: links.filter(Boolean) };
}

function menu(groups, featured) {
  return {
    groups: groups.filter((item) => item.links.length),
    featured
  };
}

export const headerCta = {
  label: "Send a Website Problem",
  href: "/contact/"
};

export const mainNavItems = [
  { label: "Services", href: "/services/", menuKey: "services" },
  { label: "Blog", href: "/blog/", menuKey: "blog" },
  { label: "Skills", href: "/skills/", menuKey: "skills" },
  { label: "Locations", href: "/locations/", menuKey: "locations" },
  { label: "Rate", href: "/rate/" },
  { label: "About", href: "/about/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact", href: "/contact/" }
];

export const utilityNavItems = mainNavItems.filter((item) => !item.menuKey);

export const megaMenus = {
  services: menu(
    [
      group("Fix & Stabilize", [
        serviceLink("Website Fixes", "website-fixes"),
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
        serviceLink("Analytics & Tracking", "analytics-tracking"),
        serviceLink("Agency Overflow", "agency-overflow"),
        serviceLink("Ecommerce Support", "ecommerce-support"),
        serviceLink("API Integrations", "api-integrations")
      ])
    ],
    {
      heading: "Not sure what service you need?",
      text: "Start with the symptom. Send the URL, what broke, what is stuck, or what needs to go live.",
      label: "Send a Website Problem",
      href: "/contact/"
    }
  ),
  blog: menu(
    [
      group("Troubleshooting", [
        blogLink("Something Broke on Your Website?", "something-broke-on-your-website"),
        blogLink("WordPress Site Keeps Breaking", "cms-plugin-theme-weirdness"),
        blogLink("CSS and JavaScript Issues", "css-javascript-errors-website-bugs")
      ]),
      group("SEO & Pages", [
        blogLink("SEO Audit Done But Not Implemented", "seo-audit-done-now-implement-it"),
        blogLink("Need a Page Live Fast", "need-a-page-live-fast")
      ]),
      group("Tracking & Systems", [
        blogLink("Website Data Does Not Match Reality", "website-data-systems-not-connecting"),
        blogLink("Analytics Verification", "tracking-scripts-pixels-broken")
      ])
    ],
    {
      heading: "Start with the problem",
      text: "Read practical posts based on the situations that usually lead to hourly website help.",
      label: "View Blog",
      href: "/blog/"
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
  )
};

export const mobileNavSections = [
  {
    key: "services",
    label: "Services",
    links: [
      serviceLink("Website Fixes", "website-fixes"),
      serviceLink("WordPress Support", "wordpress-support"),
      serviceLink("Technical SEO Implementation", "technical-seo-implementation"),
      serviceLink("Landing Pages", "landing-pages"),
      serviceLink("Site Speed & Performance", "site-speed-performance"),
      serviceLink("Ecommerce Support", "ecommerce-support"),
      serviceLink("Analytics & Tracking", "analytics-tracking"),
      serviceLink("API Integrations", "api-integrations"),
      serviceLink("Ongoing Webmaster Support", "ongoing-webmaster-support"),
      pageLink("View All Services", "/services/")
    ].filter(Boolean)
  },
  {
    key: "blog",
    label: "Blog",
    links: [
      blogLink("Something Broke on Your Website?", "something-broke-on-your-website"),
      blogLink("SEO Audit Done But Not Implemented", "seo-audit-done-now-implement-it"),
      blogLink("Need a Page Live Fast", "need-a-page-live-fast"),
      blogLink("Website Data Does Not Match Reality", "website-data-systems-not-connecting"),
      pageLink("View Blog", "/blog/")
    ].filter(Boolean)
  },
  {
    key: "skills",
    label: "Skills",
    links: [
      skillLink("Shopify Plus & Liquid", "shopify-plus-liquid"),
      skillLink("WordPress Plugin Development", "wordpress-plugin-development"),
      skillLink("Performance Engineering", "performance-engineering"),
      skillLink("Production Debugging", "production-debugging"),
      skillLink("GA4/GTM Measurement Integrity", "ga4-gtm-measurement-integrity"),
      skillLink("Programmatic SEO", "programmatic-seo"),
      skillLink("Cloudflare, DNS & SSL", "cloudflare-dns-ssl"),
      skillLink("REST API & Webhook Integrations", "rest-api-webhook-integrations"),
      pageLink("View All Skills", "/skills/")
    ].filter(Boolean)
  },
  {
    key: "locations",
    label: "Locations",
    links: [
      locationLink("Freeport, IL", "freeport-il"),
      locationLink("Rockford, IL", "rockford-il"),
      locationLink("Monroe, WI", "monroe-wi"),
      locationLink("Beloit, WI", "beloit-wi"),
      locationLink("Janesville, WI", "janesville-wi"),
      locationLink("Dubuque, IA", "dubuque-ia"),
      locationLink("Madison, WI", "madison-wi"),
      pageLink("View All Locations", "/locations/")
    ].filter(Boolean)
  }
];
