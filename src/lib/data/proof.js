export const servicesHubProof = {
  eyebrow: "Service proof",
  heading: "Evidence behind the website service paths",
  intro: "The service pages are built around real production overlap: WordPress, SEO implementation, tracking, ecommerce, performance, integrations, and cleanup work that tends to show up together.",
  items: [
    {
      label: "Performance and cleanup",
      copy: "Built this site as a lightweight proof asset and used similar performance reviews to trace slow pages back to themes, plugins, scripts, images, caching, hosting, and front-end code."
    },
    {
      label: "SEO implementation",
      copy: "Worked with crawl data, schema, headings, metadata, redirects, internal links, sitemap checks, topical fit, and page-role classification instead of leaving SEO notes in spreadsheets."
    },
    {
      label: "Systems and tracking",
      copy: "Cleaned up GA4, Google Tag Manager, forms, ecommerce events, APIs, webhooks, dashboards, and reporting paths when the numbers or handoffs were not trustworthy."
    }
  ]
};

export const skillsHubProof = {
  eyebrow: "Technical proof",
  heading: "Skills tied to real website implementation work",
  intro: "These skills are not resume filler. They are the tools and debugging paths behind WordPress fixes, Shopify cleanup, tracking QA, API work, performance improvements, and SEO implementation.",
  items: [
    {
      label: "Platform engineering",
      copy: "Worked inside WordPress themes, plugins, PHP templates, Shopify/Liquid, WooCommerce, BigCommerce, OpenCart, and custom ecommerce-style builds."
    },
    {
      label: "Measurement and automation",
      copy: "Built or cleaned up GA4/GTM tracking, automated crawl/report workflows, keyword clustering, internal-link analysis, JSON/CSV data flows, CRON jobs, APIs, and webhooks."
    },
    {
      label: "SEO systems",
      copy: "Implemented structured data, crawl analysis, internal linking, topical fit scoring, duplicate/fuzzy-page detection, and programmatic SEO planning."
    }
  ]
};

export const locationsHubProof = {
  eyebrow: "Regional proof",
  heading: "Local-friendly support backed by practical web production",
  intro: "The location pages connect regional intent to the work local businesses actually need: working lead forms, clean WordPress updates, local pages, tracking, speed, ecommerce, and ongoing support.",
  items: [
    {
      label: "Local SEO execution",
      copy: "Worked on local SEO campaigns targeting stronger Map Pack visibility and built service-area or city-page strategies that avoid pure duplicate boilerplate."
    },
    {
      label: "Lead-flow support",
      copy: "Handled the practical pieces that local sites depend on: forms, phone-click tracking, GA4/GTM events, page updates, mobile layouts, and conversion paths."
    },
    {
      label: "Industry range",
      copy: "Created local and service content across plumbing, dental, mental health, water treatment, cleaning, electrical, tourism-style, and other regional business categories."
    }
  ]
};

export const serviceProofBySlug = {
  "wordpress-support": {
    eyebrow: "WordPress proof",
    heading: "Proof of WordPress cleanup, troubleshooting, and custom site work",
    intro: "This service is grounded in hands-on WordPress production work, not plugin-package reselling.",
    items: [
      {
        label: "Themes and templates",
        copy: "Worked on custom themes, child themes, reusable sections, blocks, PHP templates, CSS, JavaScript, and page-builder output."
      },
      {
        label: "Messy-site recovery",
        copy: "Handled plugin conflicts, PHP errors, MySQL problems, caching issues, admin-side failures, and sites that became harder to manage after technical problems."
      },
      {
        label: "Custom functionality",
        copy: "Built and adjusted WordPress functionality when the better fix was not simply adding another plugin to the stack."
      }
    ]
  },
  "technical-seo-implementation": {
    eyebrow: "SEO implementation proof",
    heading: "Proof of technical SEO work beyond audit notes",
    intro: "This service focuses on turning SEO recommendations into visible site changes, crawlable structure, and measurable implementation.",
    items: [
      {
        label: "Structured data",
        copy: "Implemented schema for FAQs, services, local pages, articles, products, business/location pages, and ecommerce contexts."
      },
      {
        label: "Crawl and topology",
        copy: "Worked with sitemap crawling, automated crawl reports, internal linking, page-role classification, topical fit scoring, and duplicate/fuzzy-page detection."
      },
      {
        label: "Production fixes",
        copy: "Cleaned up headings, metadata, redirects, internal links, template output, page structure, and technical items that make SEO recommendations real."
      }
    ]
  },
  "landing-pages": {
    eyebrow: "Landing page proof",
    heading: "Proof of page-build work that supports launch, SEO, and tracking",
    intro: "Landing page work here means more than dropping a headline and button into a template.",
    items: [
      {
        label: "Page types",
        copy: "Built service pages, campaign pages, local SEO pages, paid traffic pages, lead-gen pages, and lightweight static or front-end pages."
      },
      {
        label: "Launch details",
        copy: "Handled CTAs, forms, mobile layout checks, metadata, internal links, tracking scripts, event verification, and page cleanup before launch."
      },
      {
        label: "Content structure",
        copy: "Built pages around the offer, audience, proof, FAQs, form path, search intent, and next action rather than generic filler sections."
      }
    ]
  },
  "site-speed-performance": {
    eyebrow: "Performance proof",
    heading: "Proof of practical speed and Lighthouse cleanup work",
    intro: "Performance work is strongest when it traces the specific thing slowing the site down instead of chasing vanity scores blindly.",
    items: [
      {
        label: "Fast proof asset",
        copy: "Built thewebguy.app as a fast, lightweight proof asset and achieved 100 Lighthouse scores in incognito."
      },
      {
        label: "90+ cleanup work",
        copy: "Improved slow, bloated sites from weak Lighthouse scores into the 90+ range where platform limits allowed practical cleanup."
      },
      {
        label: "Root-cause review",
        copy: "Diagnosed speed issues caused by themes, plugins, scripts, images, caching, hosting, third-party tools, and front-end code."
      }
    ]
  },
  "website-fixes": {
    eyebrow: "Website fix proof",
    heading: "Proof of debugging across broken layouts, scripts, forms, and CMS issues",
    intro: "Broken-site work usually lives in the messy middle between what visitors see and what the platform is doing underneath.",
    items: [
      {
        label: "Visible bugs",
        copy: "Fixed broken layouts, mobile issues, CSS conflicts, JavaScript errors, modals, embeds, iframes, widgets, and front-end behavior."
      },
      {
        label: "Functional failures",
        copy: "Traced form failures, tracking conflicts, plugin weirdness, API handoffs, checkout behavior, and scripts that changed how pages worked."
      },
      {
        label: "Production debugging",
        copy: "Worked inside existing sites where the fix required reproducing the issue, isolating the layer, and making the smallest useful change."
      }
    ]
  },
  "fix-broken-wordpress-site": {
    eyebrow: "",
    heading: "WordPress repair work I can trace and verify",
    intro: "A broken WordPress site can fail in the browser, inside a plugin, or at the hosting layer. I start with the affected action and recent changes, then use the evidence from that path to decide what needs repair.",
    subsections: true,
    items: [
      {
        label: "A form stopped sending usable events",
        copy: "A Contact Form 7 site was using AJAX submissions, so its existing analytics trigger did not match the completed action. I added a small plugin that sends a data-layer event on successful submission and adjusted the tag trigger. The implementation avoided putting submitted names, phone numbers, or email addresses into the event."
      },
      {
        label: "Full-screen scrolling hid page content",
        copy: "On a WordPress site using full-screen rows, sections could advance before visitors had read the content. I isolated the scrolling and anchor behavior, tested the change on a duplicate page, and deployed a scoped CSS and JavaScript plugin to control overflow and section transitions."
      },
      {
        label: "Performance work needed safer cache behavior",
        copy: "A WordPress performance project required control over script loading and static-page regeneration. I built must-use plugin controls for front-end loading and a cache workflow that skips redirected URLs, bypasses admin requests, and rebuilds content in manageable batches."
      }
    ]
  },
  "ai-built-website-cleanup": {
    eyebrow: "AI cleanup proof",
    heading: "Proof of cleanup work across generated code, launch details, and messy site handoffs",
    intro: "AI-built site cleanup fits the same production reality as the rest of the site: the output may be close, but forms, routing, SEO, tracking, performance, deployment, and maintainability still need judgment.",
    items: [
      {
        label: "Generated-code review",
        copy: "Worked with AI-assisted code, Svelte/SvelteKit, React-style front-end work, JavaScript, APIs, environment variables, and production debugging paths where the generated output needed human review."
      },
      {
        label: "Launch readiness",
        copy: "Connected fast builds to metadata, schema, sitemap and robots support, internal links, form flow, GA4/GTM tracking, deployment checks, and practical UX review."
      },
      {
        label: "Cleanup mindset",
        copy: "Handled the same fragile layers AI-built sites often expose: broken layouts, missing edge cases, heavy assets, routing problems, API handoffs, and code that needs to be easier to edit."
      }
    ]
  },
  "agency-overflow": {
    eyebrow: "Agency proof",
    heading: "Proof of production support for overloaded web and SEO teams",
    intro: "Agency overflow is most useful when someone can take a scoped task and turn it into shipped website work.",
    items: [
      {
        label: "SEO production",
        copy: "Implemented audit notes, metadata, headings, schema, redirects, internal links, and crawl cleanup when strategy was already defined."
      },
      {
        label: "Client-site cleanup",
        copy: "Handled WordPress edits, landing pages, tracking QA, performance cleanup, ecommerce fixes, and recurring production tasks."
      },
      {
        label: "Low-drama handoff",
        copy: "Worked from URLs, screenshots, spreadsheets, priority lists, CMS access, and task notes without requiring a large agency process."
      }
    ]
  },
  "ecommerce-support": {
    eyebrow: "Ecommerce proof",
    heading: "Proof of ecommerce cleanup across products, platforms, schema, and tracking",
    intro: "Ecommerce support often crosses storefront templates, product data, checkout behavior, measurement, and technical SEO.",
    items: [
      {
        label: "Platforms",
        copy: "Worked across Shopify, WooCommerce, BigCommerce, OpenCart, and custom ecommerce-style sites."
      },
      {
        label: "Catalog cleanup",
        copy: "Improved category and product page structure across niche catalogs including medical furniture, event supplies, eyewear, karaoke systems, and heavy equipment parts."
      },
      {
        label: "Data and markup",
        copy: "Fixed ecommerce schema, product data, Merchant Center-style issues, tracking, and structured data problems that affect visibility and measurement."
      }
    ]
  },
  "analytics-tracking": {
    eyebrow: "Tracking proof",
    heading: "Proof of GA4, GTM, form, and conversion tracking cleanup",
    intro: "Tracking support is about making sure business actions are actually measured, not just installing another script.",
    items: [
      {
        label: "Measurement stack",
        copy: "Cleaned up GA4, Google Tag Manager, Search Console, pixels, event tracking, conversion tracking, and ecommerce measurement."
      },
      {
        label: "Lead-flow checks",
        copy: "Fixed setups where traffic, form submissions, events, CRM handoffs, or conversions were not lining up with reality."
      },
      {
        label: "Verification",
        copy: "Verified tracking implementation with event testing, trigger checks, conversion checks, and reporting review so data was easier to trust."
      }
    ]
  },
  "api-integrations": {
    eyebrow: "Integration proof",
    heading: "Proof of API, webhook, form, and data handoff work",
    intro: "Integration work is useful when the website has to move data reliably instead of leaving people to copy/paste between systems.",
    items: [
      {
        label: "Connected systems",
        copy: "Worked with APIs, webhooks, forms, CRMs, ecommerce systems, CMS platforms, scripts, payloads, endpoints, and background jobs."
      },
      {
        label: "Debugging paths",
        copy: "Traced failed deliveries, bad payloads, authentication problems, missing fields, timeout issues, endpoint mistakes, and weak retry visibility."
      },
      {
        label: "Data formats",
        copy: "Handled JSON, CSV, reporting flows, automation scripts, and practical data cleanup around web operations."
      }
    ]
  },
  "security-hosting-reliability": {
    eyebrow: "Reliability proof",
    heading: "Proof of website recovery, hosting, SSL, DNS, and hardening work",
    intro: "Reliability support focuses on getting the site stable enough for visitors, search engines, and business workflows to trust it again.",
    items: [
      {
        label: "Malware cleanup",
        copy: "Cleaned hacked or compromised WordPress sites, removed injected scripts and suspicious files, and reviewed suspicious admin users."
      },
      {
        label: "Recovery checks",
        copy: "Scanned files and database content during recovery, then started hardening steps after the immediate cleanup."
      },
      {
        label: "Infrastructure issues",
        copy: "Worked through SSL, DNS, Cloudflare, caching, redirects, hosting, mixed content, and reliability problems that make sites feel broken."
      }
    ]
  },
  "automation-internal-tools": {
    eyebrow: "Automation proof",
    heading: "Proof of workflow automation for SEO, crawling, reporting, and web operations",
    intro: "Automation is most valuable when it removes repetitive review work and makes technical site work easier to act on.",
    items: [
      {
        label: "Crawl workflows",
        copy: "Built Lighthouse/Puppeteer-style crawling workflows for page checks, reporting, and repeatable site review."
      },
      {
        label: "SEO automation",
        copy: "Automated SEO reporting and auditing workflows, reducing manual review time by up to 80-90% in the right workflow."
      },
      {
        label: "Data operations",
        copy: "Built keyword clustering, internal-link analysis, APIs, webhooks, CRON jobs, JSON/CSV workflows, and automation scripts."
      }
    ]
  },
  "ongoing-webmaster-support": {
    eyebrow: "Webmaster proof",
    heading: "Proof of steady webmaster support for existing sites",
    intro: "Ongoing support is built for recurring technical work that keeps getting pushed off until something breaks.",
    items: [
      {
        label: "Contract fit",
        copy: "Current webmaster contractor work aligns with part-time site support: updates, fixes, SEO implementation, tracking, and technical maintenance."
      },
      {
        label: "Recurring tasks",
        copy: "Handled WordPress updates, content/page cleanup, plugin and theme issues, landing pages, forms, tracking, speed, and reliability checks."
      },
      {
        label: "Useful continuity",
        copy: "Worked inside existing sites, messy setups, builders, themes, plugins, and technical backlogs where context matters month to month."
      }
    ]
  },
  "react-static-sites": {
    eyebrow: "Front-end proof",
    heading: "Proof of lightweight front-end and static site implementation",
    intro: "React and static work fits when the page or site needs to stay fast, focused, and easier to maintain.",
    items: [
      {
        label: "Lightweight builds",
        copy: "Built fast static/Svelte-style pages, React/static page work, landing pages, service pages, and focused front-end experiences."
      },
      {
        label: "Front-end fixes",
        copy: "Worked with HTML, CSS, JavaScript, responsive layouts, modals, embeds, forms, tracking scripts, and performance-sensitive UI."
      },
      {
        label: "Launch support",
        copy: "Connected front-end work to metadata, internal links, tracking, forms, accessibility checks, and page-speed expectations before launch."
      }
    ]
  }
};

export const skillProofBySlug = {
  "shopify-plus-liquid": {
    eyebrow: "Shopify proof",
    heading: "Proof of Shopify, Liquid, product data, and tracking cleanup",
    intro: "Shopify work often touches storefront templates, product data, schema, apps, performance, and ecommerce measurement at the same time.",
    items: [
      { label: "Storefront work", copy: "Worked with Shopify/Liquid templates, product pages, storefront behavior, schema, and tracking cleanup." },
      { label: "Ecommerce range", copy: "Handled ecommerce cleanup across Shopify, WooCommerce, BigCommerce, OpenCart, and custom catalog-style sites." },
      { label: "Data and events", copy: "Connected Shopify work to Merchant Center-style data issues, product schema, pixels, and ecommerce events." }
    ]
  },
  "wordpress-plugin-development": {
    eyebrow: "",
    heading: "Custom WordPress plugins built for real problems",
    intro: "Some WordPress features need their own small plugin instead of another theme edit. My work has included form-to-CRM connectors, compatibility layers for existing shortcodes, performance controls, and WordPress admin tools that keep business logic separate from presentation.",
    subsections: true,
    items: [
      {
        label: "Form submissions delivered through a queue",
        copy: "Built a PHP plugin that receives saved Fluent Forms submissions, maps fields to an external CRM, and queues delivery for WordPress's scheduler. The admin settings support separate form mappings, credentials, and a recorded delivery outcome. A live submission was accepted by the receiving API."
      },
      {
        label: "Gravity Forms connected to an external lead system",
        copy: "Built a connector with field mapping, customer lookup, duplicate-submission protection, entry-level diagnostics, and API error handling. Testing exposed an existing-customer response that required a safer lookup path; a later form submission created a lead successfully."
      },
      {
        label: "Old shortcodes, new form system",
        copy: "Built a compatibility plugin that keeps legacy shortcode calls working while rendering a newer embedded form. Existing WordPress pages did not need their saved shortcode content rewritten, and the embedded output received responsive styling."
      },
      {
        label: "Performance controls and static caching",
        copy: "Built a must-use plugin to control critical CSS, script timing, image loading, and static-cache regeneration. The cache can purge affected URLs after content changes and rebuild pages in batches. One production rebuild completed 278 URLs without failures."
      }
    ]
  },
  "wordpress-theme-development": {
    eyebrow: "Theme proof",
    heading: "Proof of WordPress theme, template, and layout work",
    intro: "Theme work is where front-end polish, CMS structure, SEO headings, and real page-builder output meet.",
    items: [
      { label: "Templates", copy: "Worked on custom themes, child themes, PHP templates, reusable sections, blocks, and page-builder cleanup." },
      { label: "Layout fixes", copy: "Handled CSS, JavaScript, responsive layouts, broken sections, mobile issues, embeds, and front-end behavior." },
      { label: "SEO structure", copy: "Connected theme cleanup to heading structure, schema output, internal links, metadata patterns, and crawlable layouts." }
    ]
  },
  "performance-engineering": {
    eyebrow: "Performance proof",
    heading: "Proof of Core Web Vitals, Lighthouse, and page-speed cleanup",
    intro: "Performance engineering here is practical: find what is heavy, unstable, or blocking the page and clean up what can reasonably move.",
    items: [
      { label: "Lighthouse", copy: "Built this site as a lightweight proof asset with 100 Lighthouse scores in incognito." },
      { label: "Slow-site cleanup", copy: "Moved slow, bloated sites from weak Lighthouse scores into the 90+ range where the platform allowed practical improvements." },
      { label: "Root causes", copy: "Reviewed themes, plugins, scripts, images, cache, hosting, third-party tools, layout shift, and front-end code." }
    ]
  },
  "production-debugging": {
    eyebrow: "Debugging proof",
    heading: "Proof of production debugging on live website problems",
    intro: "Production debugging starts with reproducing the symptom and tracing the layer that actually owns the failure.",
    items: [
      { label: "Browser behavior", copy: "Traced JavaScript errors, CSS conflicts, broken modals, forms, embeds, responsive issues, and tracking-script interference." },
      { label: "CMS behavior", copy: "Worked through WordPress plugin conflicts, theme output, page-builder weirdness, PHP/MySQL issues, and cache mismatches." },
      { label: "Systems behavior", copy: "Debugged APIs, webhooks, ecommerce behavior, tracking events, DNS/SSL/cache issues, and reporting mismatches." }
    ]
  },
  "ga4-gtm-measurement-integrity": {
    eyebrow: "Measurement proof",
    heading: "Proof of GA4, GTM, event, and conversion verification",
    intro: "Measurement integrity means checking whether the site action, tag, event, destination, and report all agree.",
    items: [
      { label: "Tracking stack", copy: "Cleaned up GA4, Google Tag Manager, Search Console, pixels, form tracking, conversion events, and ecommerce events." },
      { label: "Broken data", copy: "Fixed setups where traffic, leads, conversions, events, or ecommerce revenue were not trustworthy." },
      { label: "Verification", copy: "Tested triggers, event names, duplicate events, missing parameters, form actions, and reporting behavior." }
    ]
  },
  "rest-api-webhook-integrations": {
    eyebrow: "API proof",
    heading: "Proof of REST API, webhook, payload, and data handoff work",
    intro: "API work becomes useful when the site has to send the right data to the right system consistently.",
    items: [
      { label: "Connections", copy: "Worked with APIs, webhooks, forms, CRMs, ecommerce systems, CMS platforms, scripts, payloads, endpoints, and background jobs." },
      { label: "Troubleshooting", copy: "Handled failed delivery, authentication errors, missing fields, bad formats, timeouts, wrong endpoints, and weak logging." },
      { label: "Automation", copy: "Connected integration work to CRON jobs, JSON/CSV workflows, dashboards, reporting, and internal tool cleanup." }
    ]
  },
  "programmatic-seo": {
    eyebrow: "Programmatic SEO proof",
    heading: "Proof of scalable SEO structure without thin-page sprawl",
    intro: "Programmatic SEO is useful only when templates, data, internal links, schema, and topical fit are handled carefully.",
    items: [
      { label: "Topology", copy: "Built topical fit scoring systems to determine whether a page belongs in a cluster." },
      { label: "Detection", copy: "Built duplicate/fuzzy-page detection logic and page-role classification for scalable site review." },
      { label: "Implementation planning", copy: "Planned internal-link recommendation logic using relevance, anchors, page role, and topology." }
    ]
  },
  "schema-structured-data": {
    eyebrow: "Schema proof",
    heading: "Proof of structured data for services, products, articles, FAQs, and local pages",
    intro: "Schema work should match the real page and support search understanding without inventing details.",
    items: [
      { label: "Schema types", copy: "Implemented structured data for FAQs, services, local pages, articles, products, and business/location pages." },
      { label: "SEO cleanup", copy: "Fixed schema issues that made pages harder for search engines to understand." },
      { label: "Platform fit", copy: "Connected schema work to WordPress, ecommerce, product data, local pages, templates, and programmatic SEO." }
    ]
  },
  "crawl-analysis-internal-linking": {
    eyebrow: "Crawl proof",
    heading: "Proof of crawl analysis, internal links, and site topology work",
    intro: "Crawl analysis is most useful when it turns page data into implementation priorities.",
    items: [
      { label: "Audit tools", copy: "Built custom SEO audit tools for crawl analysis, internal linking, topical fit, and page-role classification." },
      { label: "Topology", copy: "Built topical fit scoring, duplicate/fuzzy-page detection, and internal-link recommendation planning." },
      { label: "Actionable cleanup", copy: "Turned messy crawl data into practical tasks for internal links, templates, metadata, redirects, and page structure." }
    ]
  },
  "google-merchant-center-product-data": {
    eyebrow: "Product data proof",
    heading: "Proof of Merchant Center-style product data, schema, and ecommerce cleanup",
    intro: "Product data work lives between storefront pages, feeds, schema, ecommerce tracking, and the way products are understood.",
    items: [
      { label: "Catalog range", copy: "Worked on niche catalogs including medical furniture, event supplies, eyewear, karaoke systems, and heavy equipment parts." },
      { label: "Platforms", copy: "Handled product data cleanup across Shopify, WooCommerce, BigCommerce, OpenCart, and custom ecommerce-style sites." },
      { label: "Markup and tracking", copy: "Fixed product schema, structured data, Merchant Center-style issues, product page structure, and ecommerce measurement." }
    ]
  },
  "cloudflare-dns-ssl": {
    eyebrow: "Reliability proof",
    heading: "Proof of Cloudflare, DNS, SSL, cache, and recovery work",
    intro: "Reliability work matters when the site is technically online but trust, crawlability, or visitor access is unstable.",
    items: [
      { label: "Infrastructure", copy: "Worked through SSL warnings, DNS issues, Cloudflare/cache behavior, redirects, hosting settings, and mixed content." },
      { label: "Security overlap", copy: "Cleaned hacked WordPress sites, removed suspicious scripts/files, reviewed admin users, and started hardening after cleanup." },
      { label: "Performance overlap", copy: "Connected cache, CDN, hosting, and front-end behavior to speed, stability, crawlability, and production debugging." }
    ]
  }
};

export const locationProofBySlug = {
  "freeport-il": {
    eyebrow: "",
    heading: "Local SEO changes I can make on the website",
    intro: "For a Freeport business, local search work often starts on the pages you control. I can improve a service page's title and headings, connect related pages with useful internal links, correct redirect or canonical problems, add appropriate structured data, and check whether important pages can be crawled and indexed. If a quote form or call button is the main lead path, I can also verify that its tracking matches the action visitors actually take.",
    subsections: true,
    items: [
      {
        label: "Service pages that connect search visits to inquiries",
        copy: "A service page needs to make the business, service, and coverage area clear, then give visitors a working route to a call or quote. I can tighten the page structure, connect related services, repair broken links and redirects, and check the form or call-button tracking. The work addresses the website problems between finding the page and contacting the business."
      }
    ]
  },
  "rockford-il": {
    eyebrow: "Rockford proof",
    heading: "Proof for Rockford SEO production, agency overflow, landing pages, and tracking",
    intro: "Rockford-area support fits businesses and teams that need production work to move without a large agency handoff.",
    items: [
      { label: "SEO implementation", copy: "Worked with crawl exports, metadata, headings, schema, internal links, topical fit, and page structure." },
      { label: "Agency-style tasks", copy: "Handled landing pages, client-site cleanup, production debugging, tracking QA, and technical implementation work." },
      { label: "Measurement", copy: "Cleaned up GA4/GTM, forms, events, conversions, and reports when lead data did not match reality." }
    ]
  },
  "monroe-wi": {
    eyebrow: "Monroe proof",
    heading: "Proof for Monroe WordPress, ecommerce, tracking, and landing page support",
    intro: "Monroe-area support connects local business site work with ecommerce cleanup, WordPress updates, and measurement that has to be trusted.",
    items: [
      { label: "Ecommerce cleanup", copy: "Worked across Shopify, WooCommerce, BigCommerce, OpenCart, custom catalogs, product pages, schema, and tracking." },
      { label: "WordPress work", copy: "Handled themes, page builders, plugin conflicts, forms, templates, content cleanup, and site structure." },
      { label: "Tracking", copy: "Verified GA4/GTM, ecommerce events, form submissions, pixels, and conversion paths." }
    ]
  },
  "beloit-wi": {
    eyebrow: "Beloit proof",
    heading: "Proof for Beloit website fixes, WordPress cleanup, ecommerce, and tracking",
    intro: "Beloit-area support is shaped around visible site problems, lead-flow issues, and ecommerce or CMS cleanup.",
    items: [
      { label: "Fixes", copy: "Worked through broken layouts, forms, modals, JavaScript, CSS, embeds, widgets, and mobile behavior." },
      { label: "WordPress", copy: "Handled plugin conflicts, theme issues, PHP/MySQL problems, caching, admin failures, and content/page cleanup." },
      { label: "Ecommerce and data", copy: "Connected fixes to ecommerce tracking, product data, GA4/GTM, form events, and dashboard cleanup." }
    ]
  },
  "janesville-wi": {
    eyebrow: "",
    heading: "Technical SEO and WordPress help for Janesville sites",
    intro: "When a Janesville site has thin service pages, inconsistent internal links, crawl errors, slow templates, or unreliable form tracking, I can handle the website-side fixes. That can mean clarifying page headings, repairing internal navigation, implementing supplied schema recommendations, reducing script or image weight, or tracing a lead form that no longer records a conversion. The work is scoped to the affected pages and systems.",
    subsections: true,
    items: [
      {
        label: "Fix the page and the path to a lead",
        copy: "A slow service page, a broken mobile menu, or an untracked quote form can undermine an otherwise useful website. I work through the affected template, scripts, links, and form behavior so the repair addresses how visitors use the site. WordPress, front-end code, and measurement can be handled together when the same problem crosses those systems."
      }
    ]
  },
  "dixon-il": {
    eyebrow: "Dixon proof",
    heading: "Proof for Dixon webmaster support, WordPress fixes, and technical SEO implementation",
    intro: "Dixon-area support is useful when a business needs steady website help instead of a large rebuild or campaign package.",
    items: [
      { label: "Ongoing help", copy: "Handled recurring updates, site cleanup, WordPress support, technical fixes, page updates, and webmaster-style tasks." },
      { label: "Debugging", copy: "Worked through plugin conflicts, forms, modals, CSS/JavaScript issues, admin-side failures, and tracking problems." },
      { label: "SEO work", copy: "Turned technical SEO notes into metadata, headings, schema, redirects, internal links, and crawlable page structure." }
    ]
  },
  "sterling-il": {
    eyebrow: "Sterling proof",
    heading: "Proof for Sterling WordPress, performance, ecommerce, and reliability support",
    intro: "Sterling-area support connects site maintenance, speed, security/reliability, and ecommerce cleanup.",
    items: [
      { label: "Performance", copy: "Reviewed slow pages, heavy scripts, plugin bloat, images, caching, hosting, and Core Web Vitals-style issues." },
      { label: "Reliability", copy: "Worked through SSL, DNS, Cloudflare/cache, redirects, hosting, malware cleanup, and hardening steps." },
      { label: "Ecommerce", copy: "Handled product data, product schema, category/product structure, tracking, and storefront cleanup." }
    ]
  },
  "galena-il": {
    eyebrow: "Galena proof",
    heading: "Proof for Galena landing pages, tracking, local SEO, and site speed",
    intro: "Galena-area support fits visitor-focused businesses that need pages, forms, embeds, tracking, and local content to work cleanly.",
    items: [
      { label: "Tourism-style content", copy: "Created tourism-style and local service content where pages need regional context without duplicate boilerplate." },
      { label: "Launch work", copy: "Built landing pages, service pages, forms, CTAs, mobile layouts, tracking, and internal links before launch." },
      { label: "Tracking and speed", copy: "Reviewed GA4/GTM, pixels, booking or embed behavior, slow scripts, images, cache, and performance issues." }
    ]
  },
  "dubuque-ia": {
    eyebrow: "Dubuque proof",
    heading: "Proof for Dubuque technical SEO, ecommerce, analytics, and agency overflow",
    intro: "Dubuque-area support is aimed at practical implementation for sites with SEO, ecommerce, tracking, and production backlogs.",
    items: [
      { label: "SEO systems", copy: "Worked with crawl analysis, internal links, schema, programmatic SEO planning, duplicate detection, and topical fit." },
      { label: "Ecommerce data", copy: "Handled product data, schema, Merchant Center-style issues, catalog cleanup, and ecommerce tracking." },
      { label: "Production support", copy: "Supported agency-style tasks, tracking QA, production debugging, landing pages, and technical implementation." }
    ]
  },
  "madison-wi": {
    eyebrow: "Madison proof",
    heading: "Proof for Madison landing pages, tracking, automation, APIs, and performance",
    intro: "Madison-area support fits teams that need fast implementation across campaigns, forms, analytics, data handoffs, and technical cleanup.",
    items: [
      { label: "Measurement", copy: "Cleaned up GA4, GTM, form events, ecommerce events, pixels, conversions, and reporting issues." },
      { label: "Automation", copy: "Built crawl/report workflows, keyword clustering, internal-link analysis, APIs, webhooks, CRON jobs, and JSON/CSV workflows." },
      { label: "Page launches", copy: "Built landing pages, service pages, local pages, CTAs, forms, tracking checks, and performance-conscious front-end work." }
    ]
  }
};

export function proofForService(slug) {
  return serviceProofBySlug[slug];
}

export function proofForSkill(slug) {
  return skillProofBySlug[slug];
}

export function proofForLocation(slug) {
  return locationProofBySlug[slug];
}
