<script>
  import Seo from "$lib/components/Seo.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import CardGrid from "$lib/components/CardGrid.svelte";
  import CtaBand from "$lib/components/CtaBand.svelte";
  import FaqList from "$lib/components/FaqList.svelte";
  import TopicalLinks from "$lib/components/TopicalLinks.svelte";
  import ContextualSupport from "$lib/components/ContextualSupport.svelte";
  import InternalLinkCopy from "$lib/components/InternalLinkCopy.svelte";
  import { faqs, locationPages, locationUrl, servicePages, serviceUrl } from "$lib/data/content.js";
  import { breadcrumbSchema, faqSchema, organizationSchema, schemaList, websiteSchema } from "$lib/data/schema.js";

  const breadcrumbs = [{ label: "Home", title: "Current page: The Web Guy homepage" }];
  const homeSchema = schemaList(
    organizationSchema(),
    websiteSchema(),
    breadcrumbSchema(breadcrumbs, "/"),
    faqSchema(faqs)
  );

  const serviceBySlug = Object.fromEntries(servicePages.map((service) => [service.slug, service]));
  const featuredServices = [
    "wordpress-support",
    "technical-seo-implementation",
    "website-fixes",
    "landing-pages",
    "ecommerce-support",
    "analytics-tracking"
  ]
    .map((slug) => serviceBySlug[slug])
    .filter(Boolean)
    .map((service) => [
      service.h1.replace(" at $55/hr", ""),
      service.intro,
      serviceUrl(service.slug),
      `View ${service.eyebrow}`,
      service.slug
    ]);

  const problemCards = [
    {
      label: "Something broke",
      title: "A page, form, layout, script, or checkout stopped working",
      copy: "Start with the symptom, what changed, and what should happen instead.",
      href: "/blog/something-broke-on-your-website/"
    },
    {
      label: "SEO is stuck",
      title: "The audit is done, but the website still needs the fixes",
      copy: "Turn crawl notes, headings, schema, redirects, and internal links into real changes.",
      href: "/blog/seo-audit-done-now-implement-it/"
    },
    {
      label: "Need a page live",
      title: "A service, campaign, local, or landing page needs to launch",
      copy: "Build the page, wire up the CTA, check mobile, and verify tracking.",
      href: "/blog/need-a-page-live-fast/"
    },
    {
      label: "Data does not connect",
      title: "Forms, GA4, GTM, ecommerce, APIs, or dashboards disagree",
      copy: "Trace the flow from user action to CRM, analytics, webhook, or report.",
      href: "/blog/website-data-systems-not-connecting/"
    },
    {
      label: "Site is slow",
      title: "Pages feel heavy, unstable, or held back by scripts and plugins",
      copy: "Find practical speed cleanup without pretending every platform can score perfectly.",
      href: "/services/site-speed-performance/"
    },
    {
      label: "Ongoing web help",
      title: "The site needs steady updates, fixes, cleanup, and support",
      copy: "Use hourly contract help for the tasks that keep getting pushed off.",
      href: "/services/ongoing-webmaster-support/"
    }
  ];

  const serviceClusters = [
    {
      label: "Fix & stabilize",
      title: "Broken layouts, WordPress issues, hosting, DNS, SSL, cache, and production bugs.",
      links: [["Website Fixes", "/services/website-fixes/"], ["WordPress Support", "/services/wordpress-support/"], ["Reliability", "/services/security-hosting-reliability/"]]
    },
    {
      label: "Build & update",
      title: "Landing pages, service pages, local pages, content cleanup, static pages, and recurring updates.",
      links: [["Landing Pages", "/services/landing-pages/"], ["React / Static Sites", "/services/react-static-sites/"], ["Webmaster Support", "/services/ongoing-webmaster-support/"]]
    },
    {
      label: "SEO & visibility",
      title: "Audit implementation, schema, internal links, page structure, product data, and crawl cleanup.",
      links: [["Technical SEO", "/services/technical-seo-implementation/"], ["Schema", "/skills/schema-structured-data/"], ["Crawl & Links", "/skills/crawl-analysis-internal-linking/"]]
    },
    {
      label: "Track, connect & automate",
      title: "GA4, GTM, forms, pixels, APIs, webhooks, dashboards, product data, and internal tools.",
      links: [["Analytics & Tracking", "/services/analytics-tracking/"], ["API Integrations", "/services/api-integrations/"], ["Automation", "/services/automation-internal-tools/"]]
    }
  ];

  const depthBlocks = [
    ["Debugging & stabilization", "Comfortable tracing issues across WordPress, page builders, PHP, JavaScript, CSS, plugins, forms, modals, embeds, hosting, cache, and production behavior."],
    ["Performance & reliability", "Practical cleanup for script bloat, slow templates, image weight, caching, Cloudflare, DNS, SSL, hosting limits, and Core Web Vitals notes."],
    ["Measurement integrity", "GA4, GTM, pixels, form events, ecommerce tracking, conversion verification, campaign URLs, and reporting flows that need to match reality."],
    ["APIs & internal tools", "REST APIs, webhooks, JSON/CSV cleanup, Postman-style testing, crawlers, checkers, dashboards, CRON jobs, and lightweight automation."]
  ];

  const homeTopicalLinks = [
    {
      label: "Broken website path",
      title: "Website Fixes",
      href: "/services/website-fixes/",
      copy: "Start here for broken layouts, forms, modals, scripts, embeds, mobile bugs, or site behavior that needs hands-on debugging."
    },
    {
      label: "CMS path",
      title: "WordPress Support",
      href: "/services/wordpress-support/",
      copy: "Use this for themes, plugins, Elementor, PHP templates, CSS, JavaScript, content updates, and WordPress cleanup."
    },
    {
      label: "SEO implementation path",
      title: "Technical SEO Implementation",
      href: "/services/technical-seo-implementation/",
      copy: "Use this when audit notes, crawl fixes, schema, redirects, headings, or internal links need to become real site changes."
    },
    {
      label: "Measurement path",
      title: "Analytics & Tracking",
      href: "/services/analytics-tracking/",
      copy: "Use this when GA4, GTM, forms, pixels, ecommerce events, CRM handoffs, or dashboards do not match actual behavior."
    },
    {
      label: "Launch path",
      title: "Landing Pages",
      href: "/services/landing-pages/",
      copy: "Use this for service pages, campaign pages, local pages, paid traffic pages, forms, CTAs, mobile checks, and launch tracking."
    },
    {
      label: "Pricing path",
      title: "Contract Rate",
      href: "/rate/",
      copy: "Use this when you want to understand how $55/hr contract support fits quick fixes, small projects, and ongoing website work."
    }
  ];
  const homeContextualItems = homeTopicalLinks.slice(0, 4).map((item) => ({
    title: item.title,
    href: item.href,
    titleAttr: `View ${item.title} from the homepage`,
    copy: item.copy
  }));
  const homeInlineParagraphs = [
    [
      "If the site is visibly broken, start with ",
      { text: "Website Fixes", href: "/services/website-fixes/", title: "View website fixes for broken layouts, forms, scripts, embeds, and mobile bugs" },
      ". If the work lives inside themes, plugins, page builders, or PHP templates, route it to ",
      { text: "WordPress Support", href: "/services/wordpress-support/", title: "View WordPress support for themes, plugins, page builders, PHP, CSS, and JavaScript" },
      ". Audit notes, schema, redirects, headings, and internal links belong in ",
      { text: "Technical SEO Implementation", href: "/services/technical-seo-implementation/", title: "View technical SEO implementation for crawl notes, schema, redirects, headings, and internal links" },
      "."
    ],
    [
      "When the numbers do not match reality, ",
      { text: "Analytics & Tracking", href: "/services/analytics-tracking/", title: "View analytics and tracking support for GA4, GTM, form events, pixels, and ecommerce measurement" },
      " is the better starting point. When the need is a service page, campaign page, local page, form, CTA, or launch check, use ",
      { text: "Landing Pages", href: "/services/landing-pages/", title: "View landing page support for service pages, campaign pages, local pages, forms, CTAs, and tracking" },
      "."
    ]
  ];
</script>

<Seo
  title="The Web Guy | Contract Web Developer & SEO Support"
  description="Hire The Web Guy for contract WordPress, web development, technical SEO, landing pages, tracking, ecommerce, and website support at $55/hr."
  schema={homeSchema}
/>

<main>
  <Hero
    eyebrow="The Web Guy"
    h1="Contract Web Help for Broken, Slow, Stuck, or Unfinished Websites"
    intro="The Web Guy is a contract web developer for businesses and agencies that need WordPress issues fixed, SEO work implemented, landing pages built, tracking troubleshot, ecommerce stabilized, systems connected, and technical web work finished."
    cta="Send a Website Problem"
    secondary="View Services"
    showCapabilityLinks={false}
  />

  <Breadcrumbs items={breadcrumbs} />

  <section class="section section-effect section-effect--grid section-effect--medium">
    <SectionHeading
      eyebrow="Start with the problem"
      h2="Pick the thing that sounds closest"
      body="You do not need to know whether the issue is WordPress, CSS, JavaScript, hosting, analytics, or a plugin. Start with the symptom and route into the right kind of help."
    />
    <InternalLinkCopy paragraphs={homeInlineParagraphs} />
    <div class="decision-grid">
      {#each problemCards as card}
        <a class="decision-card" href={card.href} title={`Read about ${card.label}: ${card.title}`}>
          <span>{card.label}</span>
          <h3>{card.title}</h3>
          <p>{card.copy}</p>
        </a>
      {/each}
    </div>
  </section>

  <section class="section soft-section section-effect section-effect--signals section-effect--medium">
    <SectionHeading
      eyebrow="Service clusters"
      h2="The work usually falls into four buckets"
      body="The offer is broad enough to handle real messy websites, but the work stays practical: fix, build, implement, measure, connect, and keep moving."
    />
    <div class="cluster-grid">
      {#each serviceClusters as cluster}
        <article class="cluster-panel">
          <span>{cluster.label}</span>
          <h3>{cluster.title}</h3>
          <div class="mini-link-list">
            {#each cluster.links as [label, href]}
              <a href={href} title={`View ${label} from ${cluster.label}`}>{label}</a>
            {/each}
          </div>
        </article>
      {/each}
    </div>
  </section>

  <section class="section section-effect section-effect--traces section-effect--medium">
    <SectionHeading
      eyebrow="Featured services"
      h2="High-value website help you can hand off"
      body="These are the core service pages most visitors will recognize first. Each one is built around a specific problem and points to the relevant deeper skills."
    />
    <CardGrid className="card-grid service-grid" items={featuredServices} />
    <p class="center-link"><a class="button button-primary" href="/services/" title="View all website services">View all services</a></p>
  </section>

  <ContextualSupport
    eyebrow="Common starts"
    heading="Core service paths from the homepage"
    intro="These are the most common next pages when a website problem needs more than a quick explanation."
    items={homeContextualItems}
  />

  <section class="section soft-section technical-depth-section effect effect-dark-grid effect-medium">
    <SectionHeading
      eyebrow="Technical depth"
      h2="Built for the work behind the visible page"
      body="A lot of web work looks simple until it touches the CMS, templates, scripts, tracking, APIs, cache, product data, or reporting. That is the work this site is positioned around."
    />
    <div class="depth-grid">
      {#each depthBlocks as [title, copy]}
        <article class="depth-card">
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>
      {/each}
    </div>
  </section>

  <section class="section split-section local-remote-section section-effect section-effect--grid section-effect--low">
    <div>
      <SectionHeading
        eyebrow="Local and remote"
        h2="Hourly web support near Freeport, IL and remote-friendly"
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
          eyebrow="Contract rate"
          h2="Simple hourly website help: $55/hr"
          body="Best for ongoing support, agency overflow, WordPress cleanup, SEO implementation, landing pages, tracking fixes, ecommerce support, APIs, and practical technical website work."
        />
        <a class="button button-primary" href="/rate/" title="View how the $55/hr contract rate works">Read how the rate works</a>
      </div>
      <div class="rate-card">
        <span>Contract rate</span>
        <strong>$55/hr</strong>
        <p>Start with the URL, the problem, and the outcome you want. The first useful step is usually clear after a practical review.</p>
      </div>
    </div>
  </section>

  <section class="section section-effect section-effect--signals section-effect--medium">
    <SectionHeading eyebrow="Process" h2="A simple way to start" />
    <div class="process-grid">
      {#each [
        ["01", "Send the context", "URL, platform, symptom, goal, deadline, audit notes, or task list."],
        ["02", "Find the first move", "The issue gets sorted into fix, build, SEO, tracking, integration, or support work."],
        ["03", "Do the practical work", "Updates, debugging, cleanup, implementation, testing, and launch support happen hourly."],
        ["04", "Get a plain update", "You get what changed, what was found, what is blocked, and what should happen next."]
      ] as [num, title, text]}
        <article><span>{num}</span><h3>{title}</h3><p>{text}</p></article>
      {/each}
    </div>
  </section>

  <TopicalLinks
    eyebrow="Where to go next"
    heading="Route the website problem into the right support path"
    intro="The fastest path is usually not a broad rebuild. Pick the page that matches the symptom, platform, implementation need, or next decision."
    items={homeTopicalLinks}
  />

  <CtaBand
    heading="Need web work handled without babysitting?"
    copy="Send the URL, what is broken or needed, and the outcome you want. The reply can start with the most useful next step."
    label="Send the Website Problem"
    secondaryLabel="View Services"
    secondaryHref="/services/"
  />

  <section class="section soft-section home-faq-section">
    <div class="faq-header-row">
      <div class="faq-header-copy">
        <p class="eyebrow">FAQ</p>
        <h2>Common questions before sending work</h2>
      </div>
      <a class="button button-secondary dark-button faq-more-button" href="/faq/" title="View more contract website support FAQs">Read More FAQs</a>
    </div>
    <FaqList items={faqs.slice(0, 6)} />
  </section>
</main>
