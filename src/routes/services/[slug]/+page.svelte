<script>
  import Seo from "$lib/components/Seo.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import CardGrid from "$lib/components/CardGrid.svelte";
  import TabbedServiceFeature from "$lib/components/TabbedServiceFeature.svelte";
  import CtaBand from "$lib/components/CtaBand.svelte";
  import RelatedProjectHelp from "$lib/components/RelatedProjectHelp.svelte";
  import InternalLinkCopy from "$lib/components/InternalLinkCopy.svelte";
  import FaqList from "$lib/components/FaqList.svelte";
  import ProofPanel from "$lib/components/ProofPanel.svelte";
  import ServiceTroubleshootingGuide from "$lib/components/ServiceTroubleshootingGuide.svelte";
  import ProductionServiceContent from "$lib/components/ProductionServiceContent.svelte";
  import ServiceQuoteCard from "$lib/components/ServiceQuoteCard.svelte";
  import { serviceUrl, skillUrl } from "$lib/data/content.js";
  import { serviceHeroImage } from "$lib/data/hero-images.js";
  import { proofForService } from "$lib/data/proof.js";
  import { serviceConversionFor } from "$lib/data/service-conversions.js";
  import { aiCleanupTabs } from "$lib/data/ai-cleanup-tabs-reviewed.js";
  import { aiDevelopmentHub, aiDevelopmentPages, aiDevelopmentUrl } from "$lib/data/ai-development.js";
  import {
    relatedServicesForService,
    relatedSkillsForService,
    relatedSkillSlugsForService,
    serviceClusterPagesFor,
    isRelatedServiceSection,
    serviceRelatedProjectItems
  } from "$lib/data/relationships.js";
  import { breadcrumbSchema, faqSchema, schemaList, serviceSchema } from "$lib/data/schema.js";

  let { data } = $props();
  const service = $derived(data.service);
  const conversion = $derived(serviceConversionFor(service));
  const aiCheckerInfographics = {
    "Pages, navigation, and responsive behavior": {
      src: "/images/ai-services/checker-infographics/responsive-check.webp",
      alt: "Connected website routes shown across desktop, tablet, and mobile layouts"
    },
    "Forms, leads, and connected systems": {
      src: "/images/ai-services/checker-infographics/form-systems-check.webp",
      alt: "Form validation branching to email, CRM, webhook, and database destinations"
    },
    "Search and sharing basics": {
      src: "/images/ai-services/checker-infographics/search-sharing-check.webp",
      alt: "Search inspection connecting sitemap, structured data, internal links, and sharing signals"
    },
    "Browser errors and production behavior": {
      src: "/images/ai-services/checker-infographics/production-debugging-check.webp",
      alt: "Browser and console errors traced through a production deployment pipeline"
    },
    "Accessibility and interaction": {
      src: "/images/ai-services/checker-infographics/accessibility-interaction-check.webp",
      alt: "Keyboard, focus, visibility, touch, and dialog interaction checks"
    },
    "Performance, security, and maintainability": {
      src: "/images/ai-services/checker-infographics/performance-security-maintainability.webp",
      alt: "Performance gauge, security shield, modular code, and maintenance tools"
    }
  };
  const isS01RecoveryHero = $derived(service.slug === "contact-form-not-working-wordpress");
  const servicePath = $derived(serviceUrl(service.slug));
  const breadcrumbs = $derived([
    { label: "Home", href: "/", title: "View The Web Guy homepage" },
    { label: "Services", href: "/services/", title: "View all website services" },
    { label: isS01RecoveryHero ? "WordPress Form Fixes" : service.eyebrow, title: `Current page: ${service.h1}` }
  ]);
  const serviceFaqs = $derived(service.faqs || [
    [`What does ${service.eyebrow.toLowerCase()} cost?`, `Request a free quote for your site and task. Scope and cost are agreed before work starts.`],
    ["What should I send first?", "Send the URL, what should happen, what is happening now, timeline, and any audit notes, screenshots, or task lists."],
    ["Can this be one-time or ongoing?", "Yes. This can be a one-time fix, a small project, agency overflow, or part of ongoing webmaster/platform support."],
    ["What does The Web Guy avoid promising?", "No fake guarantees, no unlimited flat-rate work, and no pretending every issue is simple before the site is reviewed."]
  ]);
  const seoSchema = $derived(schemaList(
    breadcrumbSchema(breadcrumbs, servicePath),
    serviceSchema(service, servicePath),
    faqSchema(serviceFaqs)
  ));
  const relatedServices = $derived(relatedServicesForService(service));
  const relatedSkillSlugs = $derived(relatedSkillSlugsForService(service));
  const relatedSkills = $derived(relatedSkillsForService(service));
  const serviceProof = $derived(proofForService(service.slug));
  const fallbackAudienceHeading = $derived(`${service.audience.split(".")[0]}.`);
  const audienceHeading = $derived(service.audienceHeading || fallbackAudienceHeading);
  const audienceBody = $derived(service.audienceHeading ? service.audience : service.audience.split(".").slice(1).join(".").trim());
  const serviceClusterPages = $derived(serviceClusterPagesFor(service));
  const primaryServiceSections = $derived(service.sections
    .map((section, originalIndex) => ({ section, originalIndex }))
    .filter(({ section }) => !isRelatedServiceSection(section))
    .filter(({ section }) => !(
      service.keywordCluster &&
      (/problems this page targets/i.test(section.h2 || "") ||
        / tasks$/i.test(section.h2 || "") ||
        /^how to hand off /i.test(section.h2 || ""))
    )));
  const relatedProjectItems = $derived(serviceRelatedProjectItems(service, relatedServices, relatedSkills, serviceClusterPages));
  const aiClusterProjectItems = [
    {
      label: "AI development hub",
      title: aiDevelopmentHub.eyebrow,
      copy: "Compare the human review, launch QA, release oversight, and guardrail paths for AI-assisted website work.",
      href: aiDevelopmentUrl(),
      linkLabel: "Explore AI Development Oversight"
    },
    ...aiDevelopmentPages.map((item) => ({
      label: "AI development path",
      title: item.eyebrow,
      copy: item.summary,
      href: aiDevelopmentUrl(item.slug),
      linkLabel: `View ${item.eyebrow}`
    }))
  ];
  const s01RelatedCopyByHref = {
    "/services/website-fixes/": "Use this when the form problem is one part of a broader page, script, redirect, modal, or front-end behavior issue.",
    "/services/analytics-tracking/": "Use this for broader analytics, pixel, campaign, or reporting work after the real inquiry path is understood.",
    "/services/wordpress-support/": "Use this when the site needs continuing WordPress changes or support beyond one isolated form repair.",
    "/services/conversion-tracking-troubleshooting/": "Use this when the inquiry arrives but GA4, GTM, pixels, or reporting miss or duplicate the conversion.",
    "/skills/ga4-gtm-measurement-integrity/": "Follow the success event from the visitor action through GTM and GA4 without treating a tracking signal as proof that the inquiry arrived.",
    "/skills/production-debugging/": "Inspect browser errors, network requests, runtime behavior, and visitor conditions when the visible form state does not reveal the failure point.",
    "/skills/rest-api-webhook-integrations/": "Inspect payloads, authentication, responses, and receiving-system behavior when a form should create or update a record elsewhere.",
    "/services/fix-wordpress-issue/": "Use this when the next WordPress task is already defined and can stay separate from the form-repair scope.",
    "/services/fix-broken-wordpress-site/": "Use this when failed forms are one symptom of a wider site, plugin, theme, PHP, or front-end failure.",
    "/services/wordpress-emergency-support/": "Use this when a live-site failure has urgent business impact and the affected paths need careful triage.",
    "/services/wordpress-white-screen-of-death-fix/": "Use this when a white screen or fatal error prevents normal public or administrative access to WordPress.",
    "/services/website-integration-help/": "Use this when the form submits but a CRM, webhook, automation, or other connected system receives incomplete or incorrect data.",
    "/services/ga4-gtm-setup-help/": "Use this to implement or repair form events and conversion measurement once the operational submission path is working.",
    "/services/": "Compare the full service range when the problem crosses forms, WordPress, connected systems, tracking, or more than one technical workstream."
  };
  const s01PrimaryRelatedItems = [
    { label: "Related service", title: "Website Fixes", href: "/services/website-fixes/", linkLabel: "View Website Fixes" },
    { label: "Related service", title: "Analytics & Tracking", href: "/services/analytics-tracking/", linkLabel: "View Analytics & Tracking" },
    { label: "Related service", title: "WordPress Support", href: "/services/wordpress-support/", linkLabel: "View WordPress Support" },
    { label: "Related service", title: "Conversion Tracking Troubleshooting", href: "/services/conversion-tracking-troubleshooting/", linkLabel: "View Conversion Tracking Troubleshooting" }
  ];
  const s01RelatedProjectItems = $derived([...s01PrimaryRelatedItems, ...relatedProjectItems]
    .filter((item, index, items) => items.findIndex((candidate) => candidate.href === item.href) === index)
    .map((item) => ({
      ...item,
      copy: s01RelatedCopyByHref[item.href] || item.copy
    })));
  const skillInvestigationCopy = {
    "production-debugging": "trace the failure through browser requests, runtime errors, server clues, and the affected user flow.",
    "wordpress-plugin-development": "inspect hooks, plugin behavior, stored data, permissions, and update-safe extension points.",
    "wordpress-theme-development": "check template output, responsive CSS, JavaScript behavior, and page-builder or theme interactions.",
    "performance-engineering": "measure script weight, caching behavior, layout shift, rendering delays, and Core Web Vitals evidence.",
    "ga4-gtm-measurement-integrity": "follow events from the browser action through GTM, GA4, pixels, and the final report.",
    "rest-api-webhook-integrations": "inspect requests, authentication, payloads, responses, retries, and the receiving system.",
    "crawl-analysis-internal-linking": "compare crawl output, templates, canonicals, redirects, and internal-link paths against the intended site structure.",
    "schema-structured-data": "compare rendered structured data with the visible page, business facts, and search-engine requirements.",
    "cloudflare-dns-ssl": "check DNS, SSL, proxy, cache, redirect, and origin behavior before changing the application.",
    "shopify-plus-liquid": "inspect Liquid templates, product data, storefront scripts, app output, and ecommerce events.",
    "programmatic-seo": "review templates, source data, metadata, internal links, and crawl paths before expanding page volume."
  };
  const serviceInvestigationParagraphs = $derived(relatedSkills[0] ? [[
    "I use ",
    {
      text: relatedSkills[0].eyebrow,
      href: skillUrl(relatedSkills[0].slug),
      title: `View ${relatedSkills[0].eyebrow} used during ${service.eyebrow}`
    },
    ` to ${skillInvestigationCopy[relatedSkills[0].slug] || "inspect the technical evidence, isolate the responsible layer, and verify the affected path after the change."}`
  ]] : []);
  const supportingArticleLinks = {
    "wordpress-support": [
      { text: "WordPress site broken after a plugin update", href: "/blog/wordpress-site-broken-after-plugin-update/", title: "Read what to check when a WordPress site breaks after a plugin update" },
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme weirdness on existing sites" },
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working on websites" }
    ],
    "technical-seo-implementation": [
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about broken tracking scripts and pixels" },
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme weirdness affecting SEO work" },
      { text: "topological relevance and vector SEO", href: "/blog/topological-relevance-vector-seo/", title: "Read the TopoRank case study on topological relevance and vector SEO" }
    ],
    "landing-pages": [
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working before launch" },
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels before a page launches" }
    ],
    "site-speed-performance": [
      { text: "embeds, iframes, and widgets breaking pages", href: "/blog/embeds-iframes-widgets-breaking-pages/", title: "Read about embeds, iframes, and widgets breaking pages" },
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels affecting site behavior" },
      { text: "topological relevance and vector SEO", href: "/blog/topological-relevance-vector-seo/", title: "Read the TopoRank case study on topological relevance and vector SEO" }
    ],
    "website-fixes": [
      { text: "fix my broken website triage", href: "/blog/fix-my-broken-website/", title: "Read the fix my broken website triage guide" },
      { text: "JavaScript issues on websites", href: "/blog/javascript-issues-website-troubleshooting/", title: "Read about JavaScript issues on websites" },
      { text: "WordPress site broken after a plugin update", href: "/blog/wordpress-site-broken-after-plugin-update/", title: "Read what to check when a WordPress site breaks after a plugin update" },
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme weirdness" },
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working" }
    ],
    "ai-built-website-cleanup": [
      { text: "AI-built website not ready to launch", href: "/blog/ai-built-website-not-ready-to-launch/", title: "Read the AI-built website launch cleanup checklist" },
      { text: "CSS and JavaScript website bugs", href: "/blog/css-javascript-errors-website-bugs/", title: "Read about CSS and JavaScript bugs in generated or existing sites" },
      { text: "website data not connecting", href: "/blog/website-data-systems-not-connecting/", title: "Read about website data, forms, tracking, APIs, and systems not connecting" }
    ],
    "agency-overflow": [
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme weirdness in client sites" },
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working during production support" }
    ],
    "ecommerce-support": [
      { text: "WooCommerce checkout not working", href: "/blog/woocommerce-checkout-not-working/", title: "Read what to check when WooCommerce checkout is not working" },
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about broken tracking scripts and pixels in ecommerce measurement" },
      { text: "embeds, iframes, and widgets breaking pages", href: "/blog/embeds-iframes-widgets-breaking-pages/", title: "Read about embeds, iframes, and widgets breaking pages" }
    ],
    "analytics-tracking": [
      { text: "GTM form tracking for GA4", href: "/blog/gtm-form-tracking-ga4/", title: "Read about GTM form tracking for GA4" },
      { text: "Google Ads conversion tracking not working", href: "/blog/google-ads-conversion-tracking-not-working/", title: "Read what to check when Google Ads conversion tracking is not working" },
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about broken tracking scripts and pixels" },
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about form and modal issues that affect tracking" },
      { text: "topological relevance and vector SEO", href: "/blog/topological-relevance-vector-seo/", title: "Read the TopoRank case study on topological relevance and vector SEO" }
    ],
    "api-integrations": [
      { text: "website integration help", href: "/services/website-integration-help/", title: "View website integration help for forms, CRMs, APIs, webhooks, ecommerce systems, and data handoffs" },
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working before data reaches another system" },
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels around data handoffs" }
    ],
    "security-hosting-reliability": [
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme issues that can look like reliability problems" },
      { text: "embeds, iframes, and widgets breaking pages", href: "/blog/embeds-iframes-widgets-breaking-pages/", title: "Read about third-party embeds and widgets breaking pages" }
    ],
    "automation-internal-tools": [
      { text: "web services automation", href: "/services/web-services-automation/", title: "View web services automation for recurring reports, checks, dashboards, APIs, and website operations" },
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels before automating reporting" },
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about form and modal issues before automating data flow" }
    ],
    "ongoing-webmaster-support": [
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme weirdness in ongoing website support" },
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels in recurring website support" },
      { text: "topological relevance and vector SEO", href: "/blog/topological-relevance-vector-seo/", title: "Read the TopoRank case study on internal link topology" }
    ],
    "react-static-sites": [
      { text: "embeds, iframes, and widgets breaking pages", href: "/blog/embeds-iframes-widgets-breaking-pages/", title: "Read about embeds, iframes, and widgets breaking pages" },
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working on front-end builds" }
    ]
  };
  const serviceSupportingParagraphs = $derived((supportingArticleLinks[service.slug] || []).length ? [[
    "When this work starts from a visible symptom, the troubleshooting path may look more like ",
    ...(supportingArticleLinks[service.slug] || []).flatMap((link, index, links) => [
      index === 0 ? "" : index === links.length - 1 ? " or " : ", ",
      link
    ]),
    " before it becomes a clean service request."
  ]] : []);
  const effectVariants = ["section-effect--grid", "section-effect--signals", "section-effect--hex", "section-effect--traces"];
  const serviceFocusParagraphs = {
    "wordpress-troubleshooting": [
      [
        "If the problem began after an update, I check for ",
        { text: "plugin conflicts", href: "/services/wordpress-plugin-conflict-help/", title: "View WordPress plugin conflict troubleshooting" },
        ". If it works while you are logged in but fails for visitors, I inspect cache output and script optimization before changing the theme or plugin code."
      ],
      [
        "I use ",
        { text: "production debugging", href: "/skills/production-debugging/", title: "View production debugging methods" },
        " to trace the failure through browser requests, PHP or JavaScript errors, and the affected user flow."
      ]
    ],
    "website-fixes": [
      [
        "Broken-site work often starts with a symptom like ",
        { text: "fix my broken website", href: "/blog/fix-my-broken-website/", title: "Read the broken website triage guide" },
        ", ",
        { text: "JavaScript issues", href: "/blog/javascript-issues-website-troubleshooting/", title: "Read about JavaScript issues on websites" },
        ", ",
        { text: "embeds, iframes, and widgets breaking pages", href: "/blog/embeds-iframes-widgets-breaking-pages/", title: "Read about embeds, iframes, and widgets breaking website pages" },
        ", ",
        { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about broken tracking scripts and pixels" },
        ", or ",
        { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working" },
        " before the fix turns into WordPress, JavaScript, CSS, tracking, performance, or hosting work."
      ]
    ],
    "automation-internal-tools": [
      [
        "Automation work usually sits between ",
        { text: "Web Services Automation", href: "/services/web-services-automation/", title: "View web services automation support for scheduled reports, QA checks, dashboards, API checks, and recurring web operations" },
        ", ",
        { text: "API Integrations", href: "/services/api-integrations/", title: "View API integration support for forms, CRMs, webhooks, ecommerce systems, and data workflows" },
        ", ",
        { text: "REST API & Webhook Integrations", href: "/skills/rest-api-webhook-integrations/", title: "View REST API and webhook integration skills for payloads, endpoints, authentication, and retries" },
        ", and ",
        { text: "Analytics & Tracking", href: "/services/analytics-tracking/", title: "View analytics and tracking support for form events, conversion data, dashboards, and measurement QA" },
        " when the site needs data to move between forms, CRMs, dashboards, and internal tools."
      ]
    ],
    "api-integrations": [
      [
        "API integration requests usually need ",
        { text: "Website Integration Help", href: "/services/website-integration-help/", title: "View website integration help for form, CRM, webhook, ecommerce, tracking, and data handoffs" },
        " for practical website handoffs, ",
        { text: "REST API & Webhook Integrations", href: "/skills/rest-api-webhook-integrations/", title: "View REST API and webhook integration support for payloads, endpoints, authentication, and retry behavior" },
        " for the technical connection, ",
        { text: "Automation & Internal Tools", href: "/services/automation-internal-tools/", title: "View automation and internal web tool support" },
        " for the workflow around it, and ",
        { text: "Analytics & Tracking", href: "/services/analytics-tracking/", title: "View analytics and tracking support for verification and reporting" },
        " when the handoff also needs to be measured."
      ]
    ],
    "react-static-sites": [
      [
        "React and static-site work often supports ",
        { text: "Landing Pages", href: "/services/landing-pages/", title: "View landing page support for service pages, campaign pages, forms, CTAs, and tracking" },
        ", ",
        { text: "Performance Engineering", href: "/skills/performance-engineering/", title: "View performance engineering support for fast static pages, script weight, layout shift, and Core Web Vitals" },
        ", and ",
        { text: "Technical SEO Implementation", href: "/services/technical-seo-implementation/", title: "View technical SEO implementation for metadata, headings, schema, crawl paths, and internal links" },
        " when a lightweight build still needs to launch cleanly."
      ]
    ],
    "landing-pages": [
      [
        "A landing page usually connects to ",
        { text: "Analytics & Tracking", href: "/services/analytics-tracking/", title: "View analytics and tracking support for forms, CTAs, events, and conversion verification" },
        ", ",
        { text: "Technical SEO Implementation", href: "/services/technical-seo-implementation/", title: "View technical SEO implementation for page structure, metadata, headings, schema, and internal links" },
        ", and the planning notes in ",
        { text: "Need a Page Live Fast", href: "/blog/need-a-page-live-fast/", title: "Read the landing page planning article" },
        " before launch."
      ]
    ],
    "site-speed-performance": [
      [
        "Speed cleanup often depends on ",
        { text: "Performance Engineering", href: "/skills/performance-engineering/", title: "View performance engineering support for script bloat, layout shift, caching, and Core Web Vitals" },
        ", ",
        { text: "Cloudflare / DNS / SSL", href: "/skills/cloudflare-dns-ssl/", title: "View Cloudflare, DNS, SSL, cache, and reliability support" },
        ", and ",
        { text: "WordPress Support", href: "/services/wordpress-support/", title: "View WordPress support for plugin-heavy sites, themes, page builders, and cleanup" },
        " when scripts, plugins, hosting, cache, or templates are slowing the site down."
      ]
    ],
    "technical-seo-implementation": [
      [
        "Technical SEO implementation usually touches ",
        { text: "Crawl Analysis & Internal Linking", href: "/skills/crawl-analysis-internal-linking/", title: "View crawl analysis and internal linking support" },
        ", ",
        { text: "Schema & Structured Data", href: "/skills/schema-structured-data/", title: "View schema and structured data implementation support" },
        ", and ",
        { text: "Programmatic SEO", href: "/skills/programmatic-seo/", title: "View programmatic SEO support for scalable page structures, templates, metadata, and internal links" },
        " when audit notes need to become actual site changes."
      ]
    ],
    "technical-seo-developer": [
      [
        "SEO developer work usually connects to ",
        { text: "Technical SEO Implementation", href: "/services/technical-seo-implementation/", title: "View technical SEO implementation for headings, schema, redirects, crawl cleanup, and internal links" },
        ", ",
        { text: "SEO Audit Implementation", href: "/services/seo-audit-implementation/", title: "View SEO audit implementation for approved recommendations that need to go live" },
        ", and ",
        { text: "Crawl Analysis & Internal Linking", href: "/skills/crawl-analysis-internal-linking/", title: "View crawl analysis and internal linking support" },
        " when the SEO recommendation needs real template, CMS, schema, redirect, or internal-link work instead of another audit. When a page already earns several related queries, the better move is usually to support one best-fit term before creating another thin SEO page."
      ],
      [
        "For the advanced internal-link side of that work, the ",
        { text: "topological relevance and vector SEO", href: "/blog/topological-relevance-vector-seo/", title: "Read the TopoRank case study on crawl topology, semantic clusters, and contextual link support" },
        " case study shows how crawl topology and contextual support guide body-level internal-link decisions before the changes hit a live site."
      ]
    ],
    "ai-built-website-cleanup": [
      [
        "An AI-built website checker should separate review from implementation. For a scoped pre-launch findings pass, start with ",
        { text: "AI Website QA", href: "/ai-development-oversight/ai-website-qa/", title: "View pre-launch AI website QA for forms, mobile behavior, accessibility, SEO, tracking, and production readiness" },
        ". Cleanup work often starts with ",
        { text: "Website Fixes", href: "/services/website-fixes/", title: "View website fixes for broken generated layouts, forms, scripts, and front-end issues" },
        ", then pulls in ",
        { text: "Production Debugging", href: "/skills/production-debugging/", title: "View production debugging for AI-built sites that fail after deployment" },
        ", ",
        { text: "Analytics & Tracking", href: "/services/analytics-tracking/", title: "View analytics and tracking setup for AI-built websites" },
        ", or ",
        { text: "API & Integrations", href: "/services/api-integrations/", title: "View API and integration help for AI-built websites, forms, CRMs, webhooks, and data handoffs" },
        " depending on what the generated site skipped."
      ],
      [
        "If the AI-generated page looks close but is not launch-ready, compare ",
        { text: "Technical SEO Implementation", href: "/services/technical-seo-implementation/", title: "View technical SEO implementation for metadata, schema, sitemap support, robots, and internal links" },
        ", ",
        { text: "Site Speed", href: "/services/site-speed-performance/", title: "View site speed cleanup for bloated generated assets, scripts, and layout shift" },
        ", and ",
        { text: "Cloudflare / DNS / SSL", href: "/skills/cloudflare-dns-ssl/", title: "View Cloudflare, DNS, SSL, domain, and deployment support" },
        " before pushing more changes blindly."
      ]
    ],
    "agency-overflow": [
      [
        "Agency overflow work often moves between ",
        { text: "WordPress Support", href: "/services/wordpress-support/", title: "View WordPress support for agency client sites" },
        ", ",
        { text: "Technical SEO Implementation", href: "/services/technical-seo-implementation/", title: "View technical SEO implementation support for audit tasks and crawl cleanup" },
        ", ",
        { text: "Landing Pages", href: "/services/landing-pages/", title: "View landing page support for campaign and service pages" },
        ", and ",
        { text: "Analytics & Tracking", href: "/services/analytics-tracking/", title: "View analytics and tracking support for QA, events, and conversions" },
        " depending on what the client backlog needs this week."
      ]
    ]
  };
  const allServiceInternalParagraphs = $derived([
    ...(serviceFocusParagraphs[service.slug] || serviceInvestigationParagraphs),
    ...serviceSupportingParagraphs
  ]);
  const limitsHeading = $derived(service.limitsHeading || `What ${service.eyebrow} includes, and where the limits are`);
  const serviceHeadingOverrides = {
    "What can be implemented": "Technical SEO tasks that can be implemented",
    "Send the crawl notes, audit spreadsheet, or task list": "How to hand off technical SEO implementation work",
    "Why websites get slow": "Why WordPress and business websites get slow",
    "What The Web Guy can and cannot promise": "Realistic Core Web Vitals and Lighthouse expectations",
    "Send the URL and the problem": "Website bug help starts with the URL and symptom",
    "The person to send annoying website problems to": "Website fix help without a rebuild",
    "Communication expectations": "How agency overflow handoffs stay clear",
    "Conversion and UX fixes": "Ecommerce conversion and product page fixes",
    "Install, troubleshoot, and verify": "GA4 and GTM installation, troubleshooting, and verification",
    "Connect the pieces that keep breaking": "Website API integrations for forms, CRMs, and ecommerce",
    "Keep the site stable": "Website reliability, SSL, DNS, and hosting support",
    "When automation is worth it": "When website automation saves real production time",
    "Ongoing support usually includes": "Ongoing webmaster support tasks for existing sites",
    "When a lightweight build makes sense": "When React or static site work is the right fit"
  };

  function sectionEffect(index, intensity = "medium", extra = "") {
    return ["section", extra, "section-effect", effectVariants[index % effectVariants.length], `section-effect--${intensity}`].filter(Boolean).join(" ");
  }

  function serviceSectionEyebrow(section) {
    const heading = section.h2.toLowerCase();
    if (heading.includes("common") || heading.includes("what can") || heading.includes("tasks")) return `${service.eyebrow} tasks`;
    if (heading.includes("connect") || heading.includes("related") || heading.includes("overlap")) return `Related ${service.eyebrow.toLowerCase()} work`;
    if (heading.includes("when") || heading.includes("expect") || heading.includes("promise") || heading.includes("not")) return `${service.eyebrow} fit`;
    if (heading.includes("send") || heading.includes("handoff")) return `${service.eyebrow} handoff`;
    return `${service.eyebrow} scope`;
  }

  function serviceSectionHeading(section) {
    return serviceHeadingOverrides[section.h2] || section.h2;
  }
</script>

<Seo title={service.title} description={service.meta} schema={seoSchema} />

<main class={`service-page service-${service.slug}`}>
  {#snippet upliftPanel()}
    {#each service.uplift.scope.paragraphs as paragraph}<p>{paragraph}</p>{/each}
  {/snippet}
  <Hero
    eyebrow={isS01RecoveryHero ? "WordPress Form Fixes" : service.eyebrow}
    h1={service.h1}
    intro={isS01RecoveryHero
      ? "Missing inquiry emails, a form that gets stuck, or CAPTCHA that will not load? I investigate what happens from the visitor’s submission to the expected email or record, make the agreed repair, and test the affected path."
      : service.intro}
    cta={service.cta}
    image={serviceHeroImage(service)}
    secondary={service.uplift?.heroSecondary || "View Services"}
    secondaryHref={service.uplift?.heroSecondaryHref || "/services/"}
    note={isS01RecoveryHero
      ? "Free quote. Scope and cost agreed before paid work begins."
      : service.uplift?.heroNote || "Free quote. Scope and cost agreed before paid work begins."}
    showCapabilityLinks={!service.uplift || isS01RecoveryHero}
    panel={service.uplift && !isS01RecoveryHero ? upliftPanel : undefined}
    panelHeading={service.uplift?.scope.heading || conversion.statusAction}
    panelStatus={conversion.status}
    panelEyebrow={conversion.eyebrow}
    panelTitle={conversion.heading}
    panelCopy={conversion.copy}
    panelCta={conversion.label}
    panelTags={conversion.tags}
    panelProof={conversion.proof}
  />
  <Breadcrumbs items={breadcrumbs} />
  {#if service.uplift && isS01RecoveryHero}
    <section class="section split-section audience-section section-effect section-effect--hex section-effect--medium" id="form-fix-fit">
      <div>
        <SectionHeading
          eyebrow="WordPress Form Fixes fit"
          h2="When your WordPress form needs repair"
          body="Use this service when a visible WordPress form does not complete the result you expect. Start with the page and the behavior you can reproduce; you do not need to identify the plugin or cause first."
        />
        <ul class="check-list audience-list">
          <li>The form reports success, but the inquiry never reaches the expected inbox.</li>
          <li>The submit button spins, validation stalls, or the confirmation step never appears.</li>
          <li>CAPTCHA is missing, blocked, or behaves differently for logged-out visitors.</li>
          <li>The inquiry arrives with fields missing, or the form-to-CRM handoff is incomplete.</li>
          <li>The lead arrives, but the redirect or conversion event is missing or duplicated.</li>
        </ul>
      </div>
      <ServiceQuoteCard {conversion} sourceTitle={service.h1} />
      <InternalLinkCopy
        className="internal-link-copy--wide"
        paragraphs={[
          [
            "If a submission reaches the form but loses fields on the way to another tool, use ",
            { text: "website integration troubleshooting", href: "/services/website-integration-help/", title: "View website integration troubleshooting" },
            ". If the inquiry arrives but reporting is wrong, ",
            { text: "conversion tracking troubleshooting", href: "/services/conversion-tracking-troubleshooting/", title: "View conversion tracking troubleshooting" },
            " keeps the measurement issue separate from actual delivery, while ",
            { text: "GA4/GTM event setup", href: "/skills/ga4-gtm-measurement-integrity/", title: "View GA4/GTM measurement integrity" },
            " covers the deeper event implementation."
          ],
          [
            "For a wider plugin, theme, cache, or update problem where the form is only one symptom, start with ",
            { text: "WordPress troubleshooting", href: "/services/wordpress-troubleshooting/", title: "View WordPress troubleshooting" },
            "."
          ]
        ]}
      />
    </section>
    <ServiceTroubleshootingGuide
      {service}
      showProcess={true}
      showDelivery={true}
      showProof={true}
      diagnosisEyebrow="WordPress Form Fixes in practice"
      symptomsOverride={[
        "The form reports success, but no inquiry reaches the expected inbox",
        "The submit spinner or validation never completes for a visitor",
        "CAPTCHA is missing, blocked, or fails before the request can be sent",
        "A saved entry exists, but the notification or connected record is incomplete",
        "The inquiry arrives, but the redirect or conversion event is missing or duplicated"
      ]}
      investigationCopy="I follow a controlled submission from the browser response to any saved entry, notification or API request, and the receiving system’s available evidence. I check form configuration, browser and network errors, script timing, CAPTCHA, authenticated sending, field mapping, and visitor or cache conditions only as they relate to the reproduced failure."
      processHeading="How the repair is controlled"
      processBody="A free quote identifies the next paid step. If the cause is unknown, we first agree on a paid investigation; Reproduce and Isolate happen inside that scope. Any repair is agreed before changes continue, then the affected path is retested."
      deliveryCopy="You receive a concise diagnosis of the failed stage, the agreed repair, and retest notes covering the public submission response plus any saved entry, notification or API request, or destination evidence available within scope. I also record unresolved third-party dependencies and any check you must complete in an inbox or CRM I cannot access."
      sendCopy="Send the form URL, expected result, what happens now, when it started, recent changes, and a safe test address or non-sensitive sample. Include a screenshot or short screen recording if available, with private details hidden. Note whether WordPress admin, hosting, email provider, CAPTCHA, CRM, or analytics access is available; do not send passwords or customer data in the first message."
      proofId="form-fix-examples"
      proofSlugsOverride={[
        "fixed-contact-form-email-delivery-authenticated-sending",
        "repaired-recaptcha-loading-without-disabling-page-optimization"
      ]}
    />
    <section class="section no-overpromise section-effect section-effect--hex section-effect--low" id="form-fix-limits">
      <SectionHeading
        eyebrow="WordPress Form Fixes fit and limits"
        h2="What WordPress Form Fixes includes, and where the limits are"
      />
      <div class="split-section tight">
        <p>Form repair can include tracing the public submission, checking the relevant WordPress settings and script behavior, correcting the agreed failure point, and retesting the affected path. The exact checks depend on the symptom, access available, and scope agreed before paid work begins.</p>
        <ul class="check-list">
          <li>Email, CAPTCHA, CRM, analytics, hosting, and other third-party systems may require separate access or owner-side confirmation.</li>
          <li>A successful form response does not by itself prove mailbox receipt or a complete record in another system.</li>
          <li>Older inquiries can only be recovered when a usable record was stored somewhere accessible.</li>
          <li>Work beyond the agreed failure point is raised and scoped before it continues.</li>
        </ul>
      </div>
    </section>
    <RelatedProjectHelp
      eyebrow="WordPress Form Fixes project paths"
      heading="Related help for this project"
      intro="Find related help for broader website issues, conversion tracking, connected systems, ongoing WordPress support, or a technical investigation path outside the agreed form repair."
      items={s01RelatedProjectItems}
    />
    <ProductionServiceContent
      {service}
      sectionStart={2}
      showProofSection={false}
      showWorkflow={false}
      showDeliverables={false}
      showFaq={false}
      showCta={false}
      showRelated={false}
    />
    <CtaBand
      sectionId="form-fix-quote"
      heading="Get a Free Quote"
      copy="Send the form URL, what should happen, what happens now, and any recent change you know about. I’ll use that to quote the next practical step; paid investigation or repair begins only after scope and cost are agreed."
      label="Get a Form Repair Quote"
      sourceTitle={service.h1}
    />
    <section class="section section-effect section-effect--traces section-effect--low" id="form-fix-faq">
      <SectionHeading eyebrow="FAQ" h2="WordPress Form Fixes questions" />
      <FaqList items={service.uplift.faqs} askQuestion={true} questionContext={`service_${service.slug}`} />
    </section>
  {:else if service.uplift}
    <ProductionServiceContent {service} />
  {:else}
  <section class="section split-section audience-section section-effect section-effect--hex section-effect--medium">
    <div>
      <SectionHeading eyebrow={`${service.eyebrow} fit`} h2={audienceHeading} body={audienceBody} />
      {#if service.targetedPatch}
        <InternalLinkCopy paragraphs={[service.targetedPatch.paragraph]} className="internal-link-copy--wide" />
      {/if}
      {#if service.supportingBridge}
        <InternalLinkCopy paragraphs={[service.supportingBridge]} className="internal-link-copy--wide" />
      {/if}
      {#if service.audienceItems}
        <ul class="check-list audience-list">
          {#each service.audienceItems as item}<li>{item}</li>{/each}
        </ul>
      {/if}
    </div>
    <ServiceQuoteCard {conversion} sourceTitle={service.h1} />
    <InternalLinkCopy paragraphs={allServiceInternalParagraphs} className="internal-link-copy--wide" />
  </section>

  <ProofPanel proof={serviceProof} />

  {#if ["ai-built-website-cleanup", "react-static-sites", "agency-overflow", "wordpress-support", "website-fixes", "automation-internal-tools"].includes(service.slug)}
    <section class="section review-gate-section section-effect section-effect--signals section-effect--low">
      <div class="review-gate-intro">
        <SectionHeading eyebrow="Working with AI-generated changes?" h2="Put a Review Gate Before Launch" body="Use a focused checkpoint to catch fragile generated code, missed launch details, and repeat failures before the next release." />
        <a class="text-link" href="/ai-development-oversight/ai-code-review/">See how AI code review works</a>
      </div>
      <div class="review-gate-card">
        <span>One practical checkpoint</span>
        <h3>Review what changed. Test what matters.</h3>
        <ul>
          <li>Inspect generated or AI-assisted changes</li>
          <li>Test the critical launch paths</li>
          <li>Turn findings into a scoped fix list</li>
        </ul>
        <a class="button button-primary" href="/ai-development-oversight/">Explore AI Development Oversight</a>
      </div>
    </section>
  {/if}

  {#each primaryServiceSections as { section, originalIndex }}
    <section
      class={`${sectionEffect(originalIndex + 1, originalIndex % 2 === 1 ? "low" : "medium", originalIndex % 2 === 1 ? "soft-section" : "")} ${section.presentation ? `section-presentation section-presentation--${section.presentation}` : ""}`}
      id={service.slug === "ai-built-website-cleanup"
        ? section.h2 === "What an AI-built website checker should actually check"
          ? "ai-checker-scope"
          : section.h2 === "What AI-built sites usually need cleaned up"
            ? "ai-cleanup-topics"
            : undefined
        : undefined}
    >
      {#if section.presentation === "judgment-contrast"}
        <div class="judgment-intro">
          <SectionHeading eyebrow="Where human review matters" h2={section.h2} />
          <p>{section.body}</p>
        </div>
        <div class="judgment-contrast">
          {#each section.contrast as lane, index}
            <article class:judgment-lane--review={index === 1} class="judgment-lane">
              <span>{lane.label}</span>
              <h3>{lane.heading}</h3>
              <ul>{#each lane.items as item}<li>{item}</li>{/each}</ul>
            </article>
          {/each}
          <div class="judgment-outcome"><strong>Practical outcome</strong><p>{section.outcome}</p></div>
        </div>
      {:else if section.presentation === "tool-map"}
        <div class="tool-map-heading">
          <SectionHeading eyebrow="Built across different stacks" h2={section.h2} />
          <p>{section.body}</p>
        </div>
        <div class="tool-map-grid">
          {#each section.toolGroups as [group, tools], index}
            <article>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{group}</h3>
              <div>{#each tools as tool}<em>{tool}</em>{/each}</div>
            </article>
          {/each}
        </div>
        <p class="tool-map-note">{section.note}</p>
      {:else if section.presentation === "handoff-board"}
        <div class="handoff-board">
          <div class="handoff-board__intro">
            <SectionHeading eyebrow="A useful first message" h2={section.h2} />
            <p>{section.body}</p>
            <aside><strong>No diagnosis required</strong><p>{section.handoffNote}</p><a class="button button-primary" href="/contact/?source_path=%2Fservices%2Fai-built-website-cleanup%2F&amp;source_type=service_detail&amp;source_title=AI-Built+Website+Checker+and+Cleanup&amp;source_cta=Send+the+AI-Built+Site#request-form">Start with the URL</a></aside>
          </div>
          <ol>{#each section.handoff as [number, heading, copy]}<li><span>{number}</span><div><h3>{heading}</h3><p>{copy}</p></div></li>{/each}</ol>
        </div>
      {:else}
      <SectionHeading eyebrow={serviceSectionEyebrow(section)} h2={serviceSectionHeading(section)} />
      {#if service.slug === "ai-built-website-cleanup" && section.h2 === "What AI-built sites usually need cleaned up"}
        <TabbedServiceFeature items={aiCleanupTabs} sectionLabel={section.h2} />
      {:else if section.cards}
        <CardGrid
          items={section.cards}
          mediaByTitle={service.slug === "ai-built-website-cleanup" && section.h2 === "What an AI-built website checker should actually check" ? aiCheckerInfographics : {}}
        />
      {:else if section.bullets}
        <div class="split-section tight">
          <div><p>{section.body}</p></div>
          <div>
            <ul class="check-list">
              {#each section.bullets as bullet}<li>{bullet}</li>{/each}
            </ul>
          </div>
        </div>
      {:else}
        <p class="wide-copy">{section.body}</p>
      {/if}
      {/if}
    </section>
    {#if service.midPageCta && originalIndex === (service.midPageCta.afterSectionIndex ?? 1)}
      <CtaBand
        heading={service.midPageCta.heading}
        copy={service.midPageCta.copy}
        label={service.midPageCta.label}
        secondaryLabel={service.midPageCta.secondaryLabel || ""}
        secondaryHref={service.midPageCta.secondaryHref || ""}
        sourceTitle={service.h1}
      />
    {/if}
  {/each}

  <ServiceTroubleshootingGuide
    {service}
    proofMatch={service.slug === "ai-built-website-cleanup" ? "exact" : "related"}
    proofId={service.slug === "ai-built-website-cleanup" ? "ai-fix-notes" : ""}
  />

  <section class="section no-overpromise section-effect section-effect--hex section-effect--low">
    <SectionHeading eyebrow={`${service.eyebrow} fit and limits`} h2={limitsHeading} />
    <div class="split-section tight">
      <p>This is practical contract execution. The Web Guy can inspect the site, make changes, troubleshoot issues, explain tradeoffs, and keep work moving. Some problems depend on hosting, platform limits, third-party tools, access, business requirements, or existing code quality.</p>
      <ul class="check-list">
        <li>Clear hourly rate or project price</li>
        <li>Plain updates</li>
        <li>No fake guarantees</li>
        <li>No unlimited flat-fee work</li>
        <li>No pretending every issue is simple</li>
      </ul>
    </div>
  </section>

  <RelatedProjectHelp
    eyebrow={`${service.eyebrow} project paths`}
    heading={service.slug === "ai-built-website-cleanup" ? "Continue Through the AI Development Cluster" : "Related help for this project"}
    intro={service.slug === "ai-built-website-cleanup"
      ? "Choose the AI-focused review, QA, oversight, or guardrail path that matches what the generated site needs next."
      : `Compare the most relevant services, technical skills, and focused support paths when ${service.eyebrow.toLowerCase()} is only one part of the work.`}
    items={service.slug === "ai-built-website-cleanup" ? aiClusterProjectItems : relatedProjectItems}
    sectionId={service.slug === "ai-built-website-cleanup" ? "ai-cluster-paths" : undefined}
  />
  <CtaBand
    heading={conversion.heading}
    copy={conversion.copy}
    label={conversion.label}
    sourceTitle={service.h1}
    sectionId={service.slug === "ai-built-website-cleanup" ? "ai-cleanup-quote" : undefined}
  />
  <section class="section section-effect section-effect--traces section-effect--low">
    <SectionHeading eyebrow="FAQ" h2={`${service.eyebrow} questions`} />
    <FaqList items={serviceFaqs} />
  </section>
  {/if}
</main>

<style>
  :global(.service-wordpress-plugin-conflict-help > .hero h1) {
    font-size: clamp(2.15rem, 4.45vw, 4.05rem);
  }

  :global(.service-wordpress-plugin-conflict-help > .hero .hero-actions) {
    margin-top: 8px;
  }

  :global(.service-ai-built-website-cleanup > .hero h1) {
    max-width: 12ch;
    font-size: clamp(2.45rem, 4.15vw, 3.75rem);
    line-height: 1.08;
  }

  :global(.service-ai-built-website-cleanup > .hero .rate-badge strong) {
    margin-top: 6px;
    padding-bottom: 6px;
    font-size: clamp(1.75rem, 2.8vw, 2.55rem);
    line-height: 1.08;
  }

  :global(.service-ai-built-website-cleanup > .hero .rate-badge span) {
    font-size: 0.74rem;
  }

  .review-gate-section {
    display: grid;
    grid-template-columns: minmax(0, 0.92fr) minmax(340px, 0.78fr);
    gap: clamp(34px, 7vw, 104px);
    align-items: center;
    padding-block: clamp(58px, 8vw, 92px);
  }

  .review-gate-intro {
    max-width: 650px;
  }

  .review-gate-intro :global(.section-heading) {
    margin-bottom: 18px;
  }

  .review-gate-intro :global(.section-heading h2) {
    max-width: 16ch;
    font-size: clamp(1.9rem, 3.4vw, 3.15rem);
    line-height: 1.08;
  }

  .review-gate-intro :global(.section-heading p:not(.eyebrow)) {
    max-width: 54ch;
  }

  .review-gate-card {
    position: relative;
    display: grid;
    gap: 18px;
    padding: clamp(26px, 3.5vw, 40px);
    overflow: hidden;
    border: 1px solid rgba(17, 24, 39, 0.14);
    border-radius: 12px;
    background:
      linear-gradient(145deg, rgba(16, 23, 34, 0.98), rgba(18, 55, 57, 0.96)),
      var(--dark);
    box-shadow: 0 24px 60px rgba(17, 24, 39, 0.16);
    clip-path: var(--notch-clip-soft);
  }

  .review-gate-card::after {
    content: "";
    position: absolute;
    right: -42px;
    bottom: -64px;
    width: 190px;
    aspect-ratio: 1;
    border: 1px solid rgba(48, 199, 149, 0.18);
    transform: rotate(18deg);
    pointer-events: none;
  }

  .review-gate-card > * {
    position: relative;
    z-index: 1;
  }

  .review-gate-card > span {
    color: #77e9c2;
    font-family: var(--font-display);
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .review-gate-card h3 {
    max-width: 18ch;
    margin: 0;
    color: var(--white);
    font-size: clamp(1.3rem, 2.1vw, 1.85rem);
    line-height: 1.2;
  }

  .review-gate-card ul {
    display: grid;
    gap: 12px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .review-gate-card li {
    position: relative;
    padding-left: 20px;
    color: #dce5ef;
  }

  .review-gate-card li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.68em;
    width: 7px;
    height: 7px;
    clip-path: var(--hex-clip);
    background: var(--accent);
  }

  .review-gate-card .button {
    width: fit-content;
    margin-top: 4px;
  }

  :global(#form-fix-fit .rate-callout) {
    align-self: start;
    align-content: start;
    min-height: 0;
  }

  .section-presentation {
    overflow: hidden;
  }

  .section.section-presentation--judgment-contrast {
    display: grid;
    grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1.28fr);
    gap: clamp(30px, 5vw, 72px);
    align-items: start;
    background:
      linear-gradient(135deg, rgba(16, 23, 34, 0.98), rgba(20, 54, 59, 0.97)),
      var(--dark);
    color: var(--white);
  }

  .judgment-intro {
    position: sticky;
    top: 110px;
  }

  .judgment-intro :global(.section-heading) {
    margin-bottom: 22px;
  }

  .judgment-intro :global(.section-heading h2) {
    color: var(--white);
  }

  .judgment-intro :global(.section-heading .eyebrow),
  .handoff-board__intro :global(.section-heading .eyebrow) {
    color: #77e9c2;
  }

  .judgment-intro > p {
    max-width: 48ch;
    margin: 0;
    color: #c5d3dc;
    font-size: 1.05rem;
  }

  .judgment-contrast {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  .judgment-lane,
  .judgment-outcome {
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 10px;
  }

  .judgment-lane {
    padding: clamp(22px, 3vw, 34px);
    background: rgba(255, 255, 255, 0.055);
  }

  .judgment-lane--review {
    background: rgba(48, 199, 149, 0.12);
    border-color: rgba(48, 199, 149, 0.34);
  }

  .judgment-lane > span,
  .judgment-outcome strong {
    color: var(--accent);
    font-family: var(--font-display);
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .judgment-lane h3 {
    margin: 12px 0 20px;
    color: var(--white);
    font-size: clamp(1.25rem, 2vw, 1.75rem);
  }

  .judgment-lane ul {
    display: grid;
    gap: 12px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .judgment-lane li {
    position: relative;
    padding-left: 20px;
    color: #dce5ef;
  }

  .judgment-lane li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.68em;
    width: 8px;
    height: 8px;
    clip-path: var(--hex-clip);
    background: var(--accent);
  }

  .judgment-outcome {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 20px;
    align-items: center;
    padding: 18px 22px;
    background: rgba(7, 19, 15, 0.52);
  }

  .judgment-outcome p {
    margin: 0;
    color: #eef7f3;
  }

  .section-presentation--tool-map {
    display: grid;
    grid-template-columns: minmax(250px, 0.68fr) minmax(0, 1.32fr);
    gap: clamp(32px, 6vw, 88px);
    align-items: start;
  }

  .tool-map-heading > p {
    max-width: 46ch;
    margin: -12px 0 0;
    color: var(--muted);
    font-size: 1.05rem;
  }

  .tool-map-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .tool-map-grid article {
    position: relative;
    min-height: 210px;
    padding: 24px;
    border: 1px solid var(--line);
    background: rgba(255, 255, 255, 0.76);
    clip-path: var(--notch-clip-soft);
  }

  .tool-map-grid article:nth-child(2),
  .tool-map-grid article:nth-child(3) {
    background: rgba(226, 248, 240, 0.78);
  }

  .tool-map-grid article > span {
    position: absolute;
    top: 18px;
    right: 18px;
    color: rgba(8, 112, 82, 0.28);
    font-family: var(--font-display);
    font-size: 1.65rem;
    font-weight: 800;
  }

  .tool-map-grid h3 {
    max-width: 15ch;
    margin: 0 0 22px;
    font-size: 1.05rem;
  }

  .tool-map-grid article > div {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .tool-map-grid em {
    padding: 6px 9px;
    border: 1px solid rgba(8, 112, 82, 0.2);
    border-radius: 999px;
    background: var(--white);
    color: var(--accent-dark);
    font-family: var(--font-display);
    font-size: 0.72rem;
    font-style: normal;
    font-weight: 700;
  }

  .tool-map-note {
    grid-column: 2;
    margin: -52px 24px 0;
    padding-top: 18px;
    border-top: 1px solid var(--line);
    color: var(--muted);
    font-size: 0.9rem;
  }

  .section.section-presentation--handoff-board {
    background:
      radial-gradient(circle at 8% 12%, rgba(48, 199, 149, 0.16), transparent 30%),
      linear-gradient(135deg, #101722, #142b32);
  }

  .handoff-board {
    display: grid;
    grid-template-columns: minmax(260px, 0.78fr) minmax(0, 1.22fr);
    gap: clamp(34px, 6vw, 84px);
    align-items: start;
  }

  .handoff-board__intro :global(.section-heading h2),
  .handoff-board__intro > p {
    color: var(--white);
  }

  .handoff-board__intro > p {
    color: #c7d7de;
  }

  .handoff-board__intro aside {
    margin-top: 28px;
    padding: 22px;
    border: 1px solid rgba(48, 199, 149, 0.3);
    border-radius: 10px;
    background: rgba(48, 199, 149, 0.09);
  }

  .handoff-board__intro aside strong {
    color: var(--accent);
    font-family: var(--font-display);
  }

  .handoff-board__intro aside p {
    margin: 8px 0 18px;
    color: #dce5ef;
  }

  .handoff-board ol {
    display: grid;
    gap: 0;
    margin: 0;
    padding: 0;
    list-style: none;
    border-top: 1px solid rgba(255, 255, 255, 0.16);
  }

  .handoff-board li {
    display: grid;
    grid-template-columns: 58px minmax(0, 1fr);
    gap: 18px;
    padding: 18px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  }

  .handoff-board li > span {
    color: var(--accent);
    font-family: var(--font-display);
    font-size: 1.35rem;
    font-weight: 800;
  }

  .handoff-board h3,
  .handoff-board li p {
    margin: 0;
  }

  .handoff-board h3 {
    color: var(--white);
    font-size: 1rem;
  }

  .handoff-board li p {
    margin-top: 5px;
    color: #b9c8d2;
  }

  @media (max-width: 640px) {
    :global(.service-ai-built-website-cleanup) {
      --font-body: "Oxanium", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      --font-display: "Orbitron", "Oxanium", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-family: var(--font-body);
    }
  }

  @media (max-width: 900px) {
    .section.section-presentation--judgment-contrast,
    .section-presentation--tool-map,
    .handoff-board {
      grid-template-columns: 1fr;
    }

    .review-gate-section {
      grid-template-columns: 1fr;
    }

    .judgment-intro {
      position: static;
    }

    .tool-map-note {
      grid-column: 1;
      margin: 6px 0 0;
    }
  }

  @media (max-width: 600px) {
    .judgment-contrast,
    .tool-map-grid {
      grid-template-columns: 1fr;
    }

    .judgment-outcome {
      grid-template-columns: 1fr;
      gap: 8px;
    }

    .tool-map-grid article {
      min-height: 0;
    }

    .handoff-board li {
      grid-template-columns: 44px minmax(0, 1fr);
      gap: 12px;
    }
  }

</style>
