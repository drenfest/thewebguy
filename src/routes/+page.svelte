<script>
  import Seo from "$lib/components/Seo.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import CtaBand from "$lib/components/CtaBand.svelte";
  import FaqList from "$lib/components/FaqList.svelte";
  import RecentFixesCarousel from "$lib/components/RecentFixesCarousel.svelte";
  import HomepageProblemTabs from "$lib/components/HomepageProblemTabs.svelte";
  import HomepageSkillsTabs from "$lib/components/HomepageSkillsTabs.svelte";
  import { faqs } from "$lib/data/faqs.js";
  import { staticHeroImages } from "$lib/data/hero-images.js";
  import { blogCategoryMap, blogPosts, blogUrl } from "$lib/data/content.js";
  import { formatContentDate, publishedDateForUrl } from "$lib/data/content-dates.js";
  import { locationPages, locationUrl } from "$lib/data/locations.js";
  import { breadcrumbSchema, faqSchema, organizationSchema, schemaList, serviceCatalogFromPages, websiteSchema } from "$lib/data/schema.js";
  import { coreServicePages } from "$lib/data/services.js";

  const breadcrumbs = [{ label: "Home", title: "Current page: The Web Guy homepage" }];
  const servicePages = coreServicePages;
  const homepageFaqs = faqs.slice(0, 6);
  const blogPostOrder = new Map(blogPosts.map((post, index) => [post.slug, index]));
  const recentBlogPosts = [...blogPosts]
    .sort((a, b) => {
      const dateSort = publishedDateForUrl(blogUrl(b.slug)).localeCompare(publishedDateForUrl(blogUrl(a.slug)));
      if (dateSort) return dateSort;
      return (blogPostOrder.get(b.slug) ?? 0) - (blogPostOrder.get(a.slug) ?? 0);
    })
    .slice(0, 4);

  function recentPostDate(post) {
    return formatContentDate(publishedDateForUrl(blogUrl(post.slug)), "Publication date unavailable");
  }

  function recentPostCategory(post) {
    return blogCategoryMap[post.category]?.label || post.eyebrow || "Website support";
  }
  const homepageSchemaServiceSlugs = new Set([
    "website-fixes",
    "wordpress-support",
    "technical-seo-implementation",
    "landing-pages",
    "analytics-tracking",
    "ecommerce-support"
  ]);
  const homepageSchemaServices = servicePages.filter((service) => homepageSchemaServiceSlugs.has(service.slug));
  const homeSchema = schemaList(
    organizationSchema(),
    websiteSchema(),
    serviceCatalogFromPages(homepageSchemaServices, "/"),
    breadcrumbSchema(breadcrumbs, "/"),
    faqSchema(homepageFaqs)
  );
  const proofSignals = [
    {
      label: "10+ years",
      title: "Website, WordPress, and SEO implementation experience",
      copy: "Practical support for existing sites, agency overflow, technical cleanup, and launch work."
    },
    {
      label: "WordPress, Shopify, custom",
      title: "CMS and front-end development coverage",
      copy: "Theme, plugin, Liquid, JavaScript, CSS, templates, APIs, and production debugging."
    },
    {
      label: "SEO + development",
      title: "Technical SEO changes that actually ship",
      copy: "Schema, redirects, headings, crawl fixes, internal links, and page structure handled in the site."
    },
    {
      label: "Direct developer access",
      title: "No account-manager handoff",
      copy: "Send the URL, symptom, audit note, or task list directly to the person doing the work."
    }
  ];

  const problemRoutes = [
    {
      label: "Something broke",
      title: "A page, form, layout, script, or checkout stopped working",
      symptoms: ["A form, button, modal, or checkout action stopped working", "A page overlaps, disappears, or breaks on mobile", "A script, embed, plugin, or recent update caused new errors"],
      image: "/images/homepage/problem-routing/something-broke.webp",
      imageAlt: "Broken website layouts and form errors being traced through a diagnostic interface",
      links: [
        { label: "Website Fixes", href: "/services/website-fixes/" },
        { label: "WordPress Troubleshooting", href: "/services/wordpress-troubleshooting/" },
        { label: "Production Debugging", href: "/skills/production-debugging/" }
      ],
      send: "The URL, screenshot, device or browser, expected behavior, and anything that recently changed.",
      outcome: "Reproduce the problem, identify the responsible layer, and fix it or document the safest next move."
    },
    {
      label: "SEO is stuck",
      title: "Pages earn impressions, but the site still needs an SEO developer",
      symptoms: ["Important pages earn impressions but do not move up", "An audit lists fixes that have never been implemented", "Indexing, redirects, schema, or internal links remain inconsistent"],
      image: "/images/homepage/problem-routing/seo-is-stuck.webp",
      imageAlt: "Website crawl graph, structured page elements, and search pathways becoming organized",
      links: [
        { label: "Technical SEO Implementation", href: "/services/technical-seo-implementation/" },
        { label: "Technical SEO Developer", href: "/services/technical-seo-developer/" },
        { label: "Crawl Analysis", href: "/skills/crawl-analysis-internal-linking/" }
      ],
      send: "The audit or crawl export, affected URLs, CMS details, current priorities, and any known access limits.",
      outcome: "Apply and verify the technical changes that support clearer crawling, indexing, relevance, and page structure."
    },
    {
      label: "A page needs to launch",
      title: "A service, campaign, local, or landing page needs to launch",
      symptoms: ["A campaign or service is ready but has no useful destination page", "The current page has no clear conversion path", "Copy and assets exist, but the page is not built or launch-ready"],
      image: "/images/homepage/problem-routing/need-a-page-live.webp",
      imageAlt: "Responsive landing page moving through a launch checklist toward deployment",
      links: [
        { label: "Landing Pages", href: "/services/landing-pages/" },
        { label: "React and Static Sites", href: "/services/react-static-sites/" },
        { label: "Analytics and Tracking", href: "/services/analytics-tracking/" }
      ],
      send: "The offer, audience, source copy, desired CTA, reference pages, tracking needs, and target launch date.",
      outcome: "A launch-ready page with clear structure, responsive behavior, verified conversion paths, and clean handoff notes."
    },
    {
      label: "Data does not connect",
      title: "Forms, GA4, GTM, ecommerce, APIs, or dashboards disagree",
      symptoms: ["Form submissions never reach the CRM or inbox", "Analytics totals do not match real leads or sales", "An API, webhook, tag, or dashboard reports success but loses data"],
      image: "/images/homepage/problem-routing/data-does-not-connect.webp",
      imageAlt: "Disconnected website form data being repaired into verified analytics, CRM, API, and dashboard paths",
      links: [
        { label: "Analytics and Tracking", href: "/services/analytics-tracking/" },
        { label: "API Integrations", href: "/services/api-integrations/" },
        { label: "GA4 and GTM", href: "/skills/ga4-gtm-measurement-integrity/" }
      ],
      send: "The source page, action being measured, expected destination, sample test flow, and the reports or systems that disagree.",
      outcome: "A mapped and tested data path with failures corrected, duplicate signals removed, and verification at the final destination."
    },
    {
      label: "The site is slow",
      title: "Pages feel heavy, unstable, or held back by scripts and plugins",
      symptoms: ["Pages take too long to become usable", "Images, scripts, plugins, or embeds make the layout jump", "The site feels slow even after basic caching or image changes"],
      image: "/images/homepage/problem-routing/site-is-slow.webp",
      imageAlt: "Heavy website assets and scripts being optimized into a faster loading page",
      links: [
        { label: "Site Speed and Performance", href: "/services/site-speed-performance/" },
        { label: "Performance Engineering", href: "/skills/performance-engineering/" },
        { label: "WordPress Support", href: "/services/wordpress-support/" }
      ],
      send: "The affected URLs, platform and hosting details, recent changes, performance reports, and the slow interactions that matter most.",
      outcome: "Reduce avoidable page weight and blocking work, improve stability, and document remaining platform or third-party limits."
    },
    {
      label: "Web work keeps piling up",
      title: "The site needs steady updates, fixes, cleanup, and support",
      symptoms: ["Small website tasks stay unfinished for weeks", "Updates arrive faster than the current team can ship them", "Recurring fixes, content changes, and checks need one dependable owner"],
      image: "/images/homepage/problem-routing/ongoing-web-help.webp",
      imageAlt: "Website maintenance dashboard with recurring tasks, monitoring, backups, and steady improvement",
      links: [
        { label: "Ongoing Webmaster Support", href: "/services/ongoing-webmaster-support/" },
        { label: "Agency Overflow", href: "/services/agency-overflow/" },
        { label: "WordPress Support", href: "/services/wordpress-support/" }
      ],
      send: "The current backlog, platforms involved, recurring deadlines, approximate monthly volume, priorities, and access boundaries.",
      outcome: "A manageable support rhythm with prioritized work, useful status updates, safer changes, and less unfinished website debt."
    },
    {
      label: "The site is unreliable",
      title: "Repair the technical problems making the site unreliable",
      symptoms: ["The same production issue keeps returning", "DNS, SSL, caching, hosting, or WordPress behavior changes unpredictably", "Updates are risky because the site has no reliable baseline"],
      image: "/images/homepage/problem-routing/fix-and-stabilize.webp",
      imageAlt: "A fractured website being repaired into a stable and secure production system",
      links: [
        { label: "Website Fixes", href: "/services/website-fixes/" },
        { label: "WordPress Support", href: "/services/wordpress-support/" },
        { label: "Reliability", href: "/services/security-hosting-reliability/" }
      ],
      send: "The affected URL, hosting or platform details, screenshots, recent changes, error messages, and the behavior that needs to become reliable.",
      outcome: "Identify the responsible layer, repair the immediate issue, and leave the site in a safer state for the next update."
    },
    {
      label: "A page or feature needs built",
      title: "Build the page, component, or recurring update the site needs",
      symptoms: ["A new offer needs a page or reusable component", "An existing page cannot support the content it now needs", "Desktop and mobile versions require different layout work"],
      image: "/images/homepage/problem-routing/build-and-update.webp",
      imageAlt: "Responsive website sections being assembled into a polished desktop and mobile experience",
      links: [
        { label: "Landing Pages", href: "/services/landing-pages/" },
        { label: "React and Static Sites", href: "/services/react-static-sites/" },
        { label: "Webmaster Support", href: "/services/ongoing-webmaster-support/" }
      ],
      send: "The current site or source files, the page goal, supplied copy and assets, examples you like, required actions, and the launch deadline.",
      outcome: "A maintainable, responsive addition that fits the existing site and is checked before it goes live."
    },
    {
      label: "SEO changes are not implemented",
      title: "Turn SEO recommendations into real website changes",
      symptoms: ["SEO recommendations are documented but still not live", "Metadata, headings, schema, redirects, or canonicals conflict", "Priority pages remain difficult to crawl or reach internally"],
      image: "/images/homepage/problem-routing/seo-and-visibility.webp",
      imageAlt: "Connected website pages becoming easier for search systems to crawl and discover",
      links: [
        { label: "Technical SEO", href: "/services/technical-seo-implementation/" },
        { label: "SEO Developer", href: "/services/technical-seo-developer/" },
        { label: "Schema", href: "/skills/schema-structured-data/" },
        { label: "Crawl and Links", href: "/skills/crawl-analysis-internal-linking/" }
      ],
      send: "The audit or crawl export, priority URLs, CMS access notes, current rankings or indexing symptoms, and the recommendations waiting for implementation.",
      outcome: "Ship the technical changes, verify them on the live site, and make important pages easier to understand and reach."
    },
    {
      label: "Tracking and tools do not connect",
      title: "Connect the forms, data, tools, and reporting behind the site",
      symptoms: ["Leads or sales are missing from reports", "Forms, pixels, tags, APIs, and dashboards disagree", "Manual handoffs keep copying the same data between systems"],
      image: "/images/homepage/problem-routing/track-connect-automate.webp",
      imageAlt: "Forms, analytics, APIs, webhooks, and dashboards connected through a reliable data system",
      links: [
        { label: "Analytics and Tracking", href: "/services/analytics-tracking/" },
        { label: "API Integrations", href: "/services/api-integrations/" },
        { label: "Automation", href: "/services/automation-internal-tools/" }
      ],
      send: "The action to measure or automate, the systems involved, sample data, current scripts or tags, expected destination, and any access limitations.",
      outcome: "A tested path from visitor action to the correct report, CRM, webhook, database, notification, or internal workflow."
    },
    {
      label: "An AI build needs review",
      title: "Add engineering review to an AI-built website or release",
      symptoms: ["The AI-built site works in pieces but not as a complete flow", "Generated code is difficult to review, maintain, or release safely", "Forms, SEO, tracking, security, or production checks were skipped"],
      image: "/images/homepage/problem-routing/ai-development.webp",
      imageAlt: "AI-generated code moving through automated tests, security checks, and production review",
      links: [
        { label: "AI Development Oversight", href: "/ai-development-oversight/" },
        { label: "AI Website Cleanup", href: "/services/ai-built-website-cleanup/" },
        { label: "AI Code Review", href: "/ai-development-oversight/ai-code-review/" }
      ],
      send: "The repository or build context, target URL, tools used, known concerns, release goal, recent changes, and what must be dependable before launch.",
      outcome: "Keep the useful speed of AI-assisted work while adding human review, verification, safer structure, and a clearer production path."
    }
  ];
  const homepageSkills = [
    {
      label: "Website Fixes",
      skillLabel: "Production Debugging",
      title: "Trace failures through the live production stack",
      intro: "Production debugging brings together browser diagnostics, JavaScript behavior, CMS output, APIs, hosting, caching, DNS, SSL, and third-party scripts. The goal is to identify the failing layer before changing code or configuration.",
      context: ["This skill draws on ", { text: "performance engineering", href: "/skills/performance-engineering/", title: "View website performance engineering skills" }, ", ", { text: "API and webhook integration", href: "/skills/rest-api-webhook-integrations/", title: "View REST API and webhook integration skills" }, ", and ", { text: "Cloudflare, DNS, and SSL", href: "/skills/cloudflare-dns-ssl/", title: "View Cloudflare, DNS, and SSL skills" }, " when a failure crosses system boundaries."],
      scope: ["Browser behavior, network requests, application state, CMS output, and server responses", "Environment differences, releases, caching, third-party scripts, and integration boundaries", "Console evidence, request traces, logs, and repeatable failure conditions"],
      advantages: ["Isolates the responsible layer before code or configuration changes begin", "Reduces broad rewrites and unrelated changes that create new risk", "Tests the repair against the exact path that originally failed"],
      deliverable: "The client receives a smaller, safer repair backed by evidence, plus a clear explanation of the cause and what was verified afterward.",
      skillHref: "/skills/production-debugging/",
      serviceHref: "/services/website-fixes/",
      image: "/images/homepage/skills/production-debugging.webp",
      imageAlt: "Production website debugging illustration showing an isolated error moving through a repaired browser and server path"
    },
    {
      label: "WordPress Support",
      skillLabel: "WordPress Plugin and Theme Engineering",
      title: "Build WordPress systems that stay maintainable",
      intro: "WordPress engineering covers custom plugins, theme and child-theme work, Gutenberg output, WooCommerce extensions, PHP templates, JavaScript, custom fields, scheduled actions, admin tools, and external integrations.",
      context: ["Durable functionality belongs in ", { text: "custom plugin development", href: "/skills/wordpress-plugin-development/", title: "View WordPress plugin development skills" }, ", while layouts and reusable presentation systems belong in ", { text: "WordPress theme development", href: "/skills/wordpress-theme-development/", title: "View WordPress theme development skills" }, ". Both support broader ", { text: "WordPress website support", href: "/services/wordpress-support/", title: "View WordPress website support services" }, "."],
      scope: ["Plugins, hooks, filters, REST routes, settings, permissions, scheduled actions, and stored data", "Themes, child themes, PHP templates, Gutenberg components, custom fields, CSS, and JavaScript", "Admin workflows, WooCommerce behavior, integrations, validation, logging, and update safety"],
      advantages: ["Places functionality and presentation in the correct WordPress layers", "Extends core and vendor systems without editing files that updates will overwrite", "Creates reusable code with clearer ownership, testing boundaries, and maintenance paths"],
      deliverable: "The client receives WordPress functionality and templates that fit the platform, survive routine updates, and remain understandable to the next developer who works on the site.",
      skillHref: "/skills/wordpress-plugin-development/",
      serviceHref: "/services/wordpress-support/",
      image: "/images/homepage/skills/wordpress-plugin-development.webp",
      imageAlt: "WordPress plugin engineering illustration with modular code, hooks, admin controls, and connected data"
    },
    {
      label: "Technical SEO",
      skillLabel: "Crawl Analysis and Internal Linking",
      title: "Turn crawl evidence into a clearer site graph",
      intro: "Technical SEO work spans crawl analysis, internal linking, schema, metadata patterns, redirects, canonicals, indexability, product data, and template-level page structure. The value is turning search evidence into implementable website changes.",
      context: ["The same implementation depth supports ", { text: "schema and structured data", href: "/skills/schema-structured-data/", title: "View schema and structured data skills" }, ", ", { text: "programmatic SEO", href: "/skills/programmatic-seo/", title: "View programmatic SEO skills" }, ", and ", { text: "Google Merchant Center product data", href: "/skills/google-merchant-center-product-data/", title: "View Google Merchant Center and product data skills" }, "."],
      scope: ["Status codes, canonicals, indexability, crawl depth, navigation, and internal-link graphs", "Orphaned content, redirect chains, broken paths, weak hubs, and duplicate URL patterns", "Page purpose, template behavior, anchor context, and site hierarchy"],
      advantages: ["Connects crawl data to the templates and navigation systems causing it", "Prioritizes changes by structural impact instead of spreadsheet order", "Turns abstract SEO findings into changes a developer can actually implement"],
      deliverable: "The client receives a prioritized site-structure plan tied to specific pages, templates, and internal-link changes rather than an unexplained crawl export.",
      skillHref: "/skills/crawl-analysis-internal-linking/",
      serviceHref: "/services/technical-seo-implementation/",
      image: "/images/homepage/skills/crawl-analysis-internal-linking.webp",
      imageAlt: "Crawl analysis illustration showing a structured website hierarchy and orphaned pages reconnecting to internal link paths"
    },
    {
      label: "Landing Pages",
      skillLabel: "Performance Engineering",
      title: "Control the code and assets that make pages feel slow",
      intro: "Front-end and performance work covers responsive HTML and CSS, JavaScript behavior, component structure, images, fonts, bundles, embeds, accessibility, caching, rendering, and Core Web Vitals. It improves the page without separating speed from usability or conversion.",
      context: ["This skill supports focused ", { text: "landing page development", href: "/services/landing-pages/", title: "View landing page development services" }, ", production-ready ", { text: "React and static sites", href: "/services/react-static-sites/", title: "View React and static website services" }, ", and deeper ", { text: "site speed and performance work", href: "/services/site-speed-performance/", title: "View site speed and performance services" }, "."],
      scope: ["Network waterfalls, JavaScript execution, rendering, layout shift, caching, and asset delivery", "Images, fonts, bundles, embeds, analytics, widgets, and third-party scripts", "Real-device behavior across the interactions that matter to the page"],
      advantages: ["Identifies the actual bottleneck instead of optimizing whatever is easiest", "Balances speed improvements against tracking, content, and conversion requirements", "Separates fixable page weight from platform and vendor limitations"],
      deliverable: "The client receives a faster, more stable page with measurable improvements and an honest record of any remaining third-party constraints.",
      skillHref: "/skills/performance-engineering/",
      serviceHref: "/services/landing-pages/",
      image: "/images/homepage/skills/performance-engineering.webp",
      imageAlt: "Website performance engineering illustration showing a heavy page becoming faster, stable, and streamlined"
    },
    {
      label: "Analytics and Tracking",
      skillLabel: "GA4 and GTM Measurement Integrity",
      title: "Verify the complete path from action to report",
      intro: "Measurement skills include GA4, GTM, ecommerce events, pixels, data layers, consent behavior, campaign attribution, forms, phone clicks, CRM handoffs, dashboards, and the browser requests connecting them. A green tag preview alone is not proof.",
      context: ["Reliable reporting often depends on ", { text: "REST APIs and webhooks", href: "/skills/rest-api-webhook-integrations/", title: "View REST API and webhook integration skills" }, ", ", { text: "automation and internal tools", href: "/services/automation-internal-tools/", title: "View automation and internal tool services" }, ", and hands-on ", { text: "analytics and tracking support", href: "/services/analytics-tracking/", title: "View analytics and tracking services" }, "."],
      scope: ["Events, parameters, triggers, consent behavior, data layers, destinations, and attribution", "Forms, phone clicks, ecommerce actions, campaign URLs, GA4, GTM, and reporting tools", "Browser requests, tag diagnostics, platform processing, and controlled conversion tests"],
      advantages: ["Validates the full measurement chain instead of stopping when a tag fires", "Finds duplication, missing context, and transformation errors between systems", "Creates repeatable tests for future releases and campaign changes"],
      deliverable: "The client receives cleaner conversion data, a documented measurement path, and proof that the intended user action reaches the final report correctly.",
      skillHref: "/skills/ga4-gtm-measurement-integrity/",
      serviceHref: "/services/analytics-tracking/",
      image: "/images/homepage/skills/ga4-gtm-measurement-integrity.webp",
      imageAlt: "Measurement integrity illustration showing a user action passing through validated events into accurate analytics reporting"
    },
    {
      label: "Ecommerce Support",
      skillLabel: "Shopify, Liquid, and WooCommerce Engineering",
      title: "Connect storefront code, product data, and ecommerce behavior",
      intro: "Ecommerce engineering covers Shopify Plus and Liquid, WooCommerce templates and extensions, product and collection data, checkout-adjacent behavior, feeds, schema, analytics, integrations, storefront JavaScript, and performance.",
      context: ["The platform work connects ", { text: "Shopify Plus and Liquid skills", href: "/skills/shopify-plus-liquid/", title: "View Shopify Plus and Liquid development skills" }, " with ", { text: "WordPress plugin development", href: "/skills/wordpress-plugin-development/", title: "View WordPress plugin development skills for WooCommerce extensions" }, ", ", { text: "product data and Merchant Center", href: "/skills/google-merchant-center-product-data/", title: "View Google Merchant Center and ecommerce product data skills" }, ", and ", { text: "ecommerce tracking", href: "/services/analytics-tracking/", title: "View ecommerce analytics and tracking services" }, "."],
      scope: ["Shopify Liquid templates, sections, app blocks, metafields, products, and collections", "WooCommerce templates, hooks, extensions, product data, and order or checkout-adjacent behavior", "Feeds, structured data, ecommerce events, APIs, responsive storefronts, and performance"],
      advantages: ["Works in the correct platform, theme, extension, or data layer instead of patching only the visible symptom", "Keeps merchandising, tracking, schema, integrations, and responsive output aligned", "Accounts for reusable templates, catalog growth, routine updates, and platform constraints"],
      deliverable: "The client receives a storefront change that fits Shopify or WooCommerce architecture, works across product and collection templates, and remains maintainable as the catalog evolves.",
      skillHref: "/skills/shopify-plus-liquid/",
      skillCta: "Explore Shopify and Liquid",
      skillTitle: "Explore Shopify Plus and Liquid development skills",
      serviceHref: "/services/ecommerce-support/",
      image: "/images/homepage/skills/shopify-plus-liquid.webp",
      imageAlt: "Shopify and WooCommerce engineering illustration showing storefront templates, product data, cart flow, and ecommerce systems"
    }
  ];

</script>

<Seo
  title="The Web Guy | SEO Developer, WordPress Help & Website Fixes"
  description="Work directly with a developer to fix your website, handle WordPress and technical SEO, or review AI-built code. Start with a free quote."
  schema={homeSchema}
/>

<main>
  <Hero
    eyebrow="THE WEB GUY"
    h1="Get Your Website Working the Way It Should."
    intro="Broken forms, WordPress trouble, SEO work that never gets implemented, or an AI build that needs a second look. Work directly with a developer to get the next step scoped, fixed, and checked."
    cta="Get a Free Quote"
    secondary="View Services"
    showCapabilityLinks={false}
    image={staticHeroImages.home}
  />

  <Breadcrumbs items={breadcrumbs} />

  <section class="section split-section home-ai-review-section section-effect section-effect--signals section-effect--low">
    <div><SectionHeading eyebrow="AI Development Oversight" h2="Build With AI. Ship With an Engineer." body="Already building with Codex, Claude Code, Cursor, or another AI tool? Get human review of the code, the system around it, and the checks your next release needs." /><a class="button button-primary" href="/ai-development-oversight/">Explore AI Development Oversight</a></div>
    <div class="summary-copy-panel home-ai-review-panel"><h3>Have something ready for review?</h3><p>Start with a focused code review, pre-launch website QA, or ongoing oversight for your team. You receive findings and a practical next step within an agreed scope.</p><a class="text-link" href="/ai-development-oversight/ai-code-review/">See what an AI code review covers</a></div>
  </section>

  <section class="section soft-section section-effect section-effect--signals section-effect--low" aria-label="The Web Guy proof signals">
    <div class="cluster-grid">
      {#each proofSignals as signal}
        <article class="cluster-panel">
          <span>{signal.label}</span>
          <h3>{signal.title}</h3>
          <p>{signal.copy}</p>
        </article>
      {/each}
    </div>
  </section>

  <HomepageProblemTabs items={problemRoutes} />

  <CtaBand
    heading="Need web work handled without babysitting?"
    copy="Send the URL, what is broken or needed, and the outcome you want. The reply can start with the most useful next step."
    label="Get a Free Quote"
    secondaryLabel="View Services"
    secondaryHref="/services/"
  />

  <section class="section home-blog-section section-effect section-effect--hex section-effect--medium">
    <div class="home-blog-heading">
      <SectionHeading
        eyebrow="Recent blog posts"
        h2="Recent website troubleshooting and implementation guides"
        body="Practical articles about broken sites, WordPress, SEO implementation, tracking, launches, and the technical work behind them."
      />
      <a class="button button-primary" href="/blog/" title="View all website support articles">View All Blog Posts</a>
    </div>

    <div class="home-blog-grid">
      {#each recentBlogPosts as post}
        <article class="home-blog-card">
          <p class="home-blog-meta">{recentPostDate(post)} <span aria-hidden="true">/</span> {recentPostCategory(post)}</p>
          <h3><a href={blogUrl(post.slug)} title={`Read ${post.title.replace(" | The Web Guy", "")}`}>{post.title.replace(" | The Web Guy", "")}</a></h3>
          <p>{post.summary}</p>
          <a class="home-blog-link" href={blogUrl(post.slug)} title={`Read ${post.title.replace(" | The Web Guy", "")}`}>Read Article -&gt;</a>
        </article>
      {/each}
    </div>
  </section>

  <HomepageSkillsTabs items={homepageSkills} />

  <RecentFixesCarousel />

  <section class="section split-section local-remote-section section-effect section-effect--grid section-effect--low">
    <div>
      <SectionHeading
        eyebrow="Local and remote website support"
        h2="Website support near Freeport, IL and for remote teams"
        body="The Web Guy supports businesses near Freeport, Rockford, Monroe, Beloit, Janesville, Dixon, Sterling, Galena, Dubuque, Madison, and remote teams that need practical contract website help."
      />
      <a class="text-link" href="/locations/" title="View the service area page">View service area</a>
    </div>
    <div class="local-support-panel">
      {#each locationPages.slice(0, 6) as location}
        <a href={locationUrl(location.slug)} title={`View web support for ${location.city}, ${location.state}`}>{location.city}, {location.state}</a>
      {/each}
    </div>
  </section>

  <section class="section rate-section effect effect-dark-grid effect-medium" id="rate">
    <div class="rate-layout">
      <div>
        <SectionHeading
          eyebrow="Flexible freelance web support"
          h2="Get a Free Quote."
          body="Find out what can be done for your website. We can discuss a prototype, a focused first step, or a full implementation, and I can work within your existing processes, tools, and approval flow."
        />
        <div class="home-quote-actions">
          <a class="button button-primary" href="/contact/#request-form" title="Request a free website quote">Get a Free Quote</a>
          <a class="home-quote-rate-link" href="/rate/" title="View hourly and project-based pricing">See Pricing Options -&gt;</a>
        </div>
      </div>
      <div class="rate-card home-quote-card">
        <span>Ways to get started</span>
        <h3>Choose the approach that fits your team</h3>
        <ul>
          <li>Prototype an idea before committing to the complete build</li>
          <li>Hand off a defined project, website fix, implementation, or review</li>
          <li>Add developer capacity within your existing tools and processes</li>
          <li>Use hourly or project-based pricing based on the work</li>
        </ul>
        <p>There is no charge to request a quote. Send the context you already have, and we can determine the most useful way to begin.</p>
      </div>
    </div>
  </section>

  <section class="section soft-section home-faq-section">
    <div class="faq-header-row">
      <div class="faq-header-copy">
        <p class="eyebrow">FAQ</p>
        <h2>Common questions before sending work</h2>
      </div>
      <a class="button button-secondary dark-button faq-more-button" href="/faq/" title="View more contract website support FAQs">Read More FAQs</a>
    </div>
    <FaqList items={homepageFaqs} />
  </section>
</main>

<style>
  :global(main > .hero h1) {
    max-width: 820px;
    font-size: clamp(1.95rem, 3.9vw, 3.55rem);
    line-height: 1;
  }

  :global(main > .hero) {
    padding-top: clamp(42px, 5.4vw, 72px);
    padding-bottom: clamp(40px, 5vw, 68px);
  }

  :global(main > .hero .hero-lede) {
    max-width: 660px;
    margin-top: 16px;
    line-height: 1.5;
  }

  :global(main > .hero .hero-actions) {
    margin-top: 20px;
  }

  .home-ai-review-section { align-items: stretch; }
  .home-ai-review-panel {
    align-content: center;
    justify-items: center;
    text-align: center;
  }
  .home-ai-review-panel p { max-width: 520px; }
  .home-ai-review-panel .text-link { justify-self: center; text-align: center; }

  .home-quote-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
  }

  .rate-section :global(.section-heading h2) { color: #fff; }
  .rate-section :global(.section-heading p:not(.eyebrow)) { color: #e7eef6; }
  .rate-section :global(.section-heading .eyebrow) { color: var(--accent); }

  .home-quote-rate-link {
    color: var(--accent);
    font-weight: 800;
    text-decoration: none;
  }

  .home-quote-rate-link:hover,
  .home-quote-rate-link:focus-visible {
    color: #fff;
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  .home-quote-card {
    display: grid;
    align-content: center;
    gap: 18px;
  }

  .home-quote-card > span { color: #d5e0ec; }

  .home-quote-card h3 {
    margin: 0;
    color: #fff;
    font-size: clamp(1.45rem, 2.4vw, 2rem);
    line-height: 1.12;
  }

  .home-quote-card ul {
    display: grid;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .home-quote-card li {
    position: relative;
    padding-left: 20px;
    color: #e3ebf3;
    line-height: 1.45;
  }

  .home-quote-card li::before {
    position: absolute;
    top: 0.58em;
    left: 0;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 12px rgba(48, 199, 149, 0.45);
    content: "";
  }

  .home-quote-card p {
    margin: 0;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    font-size: 0.92rem;
    line-height: 1.5;
  }

  .home-blog-heading {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 24px;
    align-items: end;
  }

  .home-blog-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 18px;
    margin-top: clamp(26px, 4vw, 42px);
  }

  .home-blog-card {
    display: grid;
    align-content: start;
    min-width: 0;
    padding: clamp(20px, 2.4vw, 26px);
    border: 1px solid var(--line);
    border-radius: 8px;
    background: rgba(255, 253, 250, 0.9);
    clip-path: var(--notch-clip-soft);
    box-shadow: var(--shadow-soft);
  }

  .home-blog-meta {
    margin: 0;
    color: var(--accent-dark);
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    line-height: 1.35;
    text-transform: uppercase;
  }

  .home-blog-meta span { margin: 0 4px; color: var(--muted); }
  .home-blog-card h3 { margin: 14px 0 0; font-size: clamp(1.08rem, 1.55vw, 1.3rem); line-height: 1.2; }
  .home-blog-card h3 a { color: var(--ink); text-decoration: none; }
  .home-blog-card h3 a:hover,
  .home-blog-card h3 a:focus-visible { color: var(--accent-dark); }
  .home-blog-card > p:not(.home-blog-meta) { display: -webkit-box; margin: 14px 0 0; overflow: hidden; color: var(--muted); line-height: 1.55; -webkit-box-orient: vertical; -webkit-line-clamp: 4; line-clamp: 4; }
  .home-blog-link { width: fit-content; margin-top: 20px; color: var(--accent-dark); font-weight: 800; text-decoration: none; }
  .home-blog-link:hover,
  .home-blog-link:focus-visible { text-decoration: underline; text-underline-offset: 4px; }

  @media (max-width: 1060px) {
    .home-blog-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }

  @media (max-width: 680px) {
    .home-blog-heading { grid-template-columns: 1fr; align-items: start; }
    .home-blog-heading > :global(.button) { width: 100%; }
    .home-blog-grid { grid-template-columns: 1fr; }
  }

</style>
