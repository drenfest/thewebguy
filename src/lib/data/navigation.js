import { blogCategories, blogCategoryUrl, blogTags, blogTagUrl, fixNoteCategories, fixNoteCategoryUrl } from "./content.js";
import { locationLink, pageLink, serviceLink, skillLink } from "./relationships.js";

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

const blogTagMenuGroupNames = ["Troubleshooting Tags", "Tracking & Data Tags", "Platform Tags", "SEO & Launch Tags"];
const blogCategoryLinks = blogCategories.map((category) => taxonomyLink(category.label, blogCategoryUrl(category.slug)));
const fixNoteCategoryLinks = fixNoteCategories.map((category) => taxonomyLink(category.label, fixNoteCategoryUrl(category.slug)));
const blogTagGroups = blogTagMenuGroupNames.map((title) => group(
  title,
  blogTags
    .filter((tag) => tag.menuGroup === title)
    .map((tag) => taxonomyLink(tag.label, blogTagUrl(tag.slug)))
));

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
      label: "Send a Website Problem",
      href: "/contact/"
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
  mobileSectionFromMenu("locations", "Locations", "View All Locations", "/locations/")
];
