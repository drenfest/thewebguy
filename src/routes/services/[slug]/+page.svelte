<script>
  import Seo from "$lib/components/Seo.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import CardGrid from "$lib/components/CardGrid.svelte";
  import CtaBand from "$lib/components/CtaBand.svelte";
  import ServiceNav from "$lib/components/ServiceNav.svelte";
  import RelatedServices from "$lib/components/RelatedServices.svelte";
  import RelatedSkills from "$lib/components/RelatedSkills.svelte";
  import TopicalLinks from "$lib/components/TopicalLinks.svelte";
  import ContextualSupport from "$lib/components/ContextualSupport.svelte";
  import InternalLinkCopy from "$lib/components/InternalLinkCopy.svelte";
  import FaqList from "$lib/components/FaqList.svelte";
  import ProofPanel from "$lib/components/ProofPanel.svelte";
  import FixNotesPanel from "$lib/components/FixNotesPanel.svelte";
  import SortableTable from "$lib/components/SortableTable.svelte";
  import { serviceUrl, skillUrl } from "$lib/data/content.js";
  import { serviceHeroImage } from "$lib/data/hero-images.js";
  import { proofForService } from "$lib/data/proof.js";
  import {
    relatedServicesForService,
    relatedSkillsForService,
    relatedSkillSlugsForService,
    serviceClusterPagesFor,
    serviceClusterTopicalItems,
    serviceContextualSupportItems,
    serviceTopicalItems
  } from "$lib/data/relationships.js";
  import { breadcrumbSchema, faqSchema, schemaList, serviceSchema } from "$lib/data/schema.js";

  let { data } = $props();
  const service = $derived(data.service);
  const servicePath = $derived(serviceUrl(service.slug));
  const breadcrumbs = $derived([
    { label: "Home", href: "/", title: "View The Web Guy homepage" },
    { label: "Services", href: "/services/", title: "View all website services" },
    { label: service.eyebrow, title: `Current page: ${service.h1.replace(" at $55/hr", "")}` }
  ]);
  const serviceFaqs = $derived(service.faqs || [
    [`What does ${service.eyebrow.toLowerCase()} cost?`, `Contract help for this work is billed at $55/hr when the task, site, and access are clear.`],
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
  const topicalItems = $derived(serviceTopicalItems(service, relatedServices, relatedSkills));
  const contextualSupportItems = $derived(serviceContextualSupportItems(service, relatedServices, relatedSkills));
  const serviceClusterPages = $derived(serviceClusterPagesFor(service));
  const clusterTopicalItems = $derived(serviceClusterTopicalItems(serviceClusterPages));
  const fixNoteCategoryByService = {
    "site-speed-performance": "Page Speed",
    "technical-seo-implementation": "Technical SEO",
    "website-fixes": "Website Fixes",
    "wordpress-support": "WordPress Support",
    "ai-built-website-cleanup": "AI Website Cleanup",
    "analytics-tracking": "Tracking & Analytics",
    "api-integrations": "API Integrations",
    "ecommerce-support": "Ecommerce Support",
    "landing-pages": "Landing Pages"
  };
  const fixNoteCategory = $derived(fixNoteCategoryByService[service.slug] || "");
  const serviceInternalParagraphs = $derived([
    [
      `${service.eyebrow} often overlaps with `,
      relatedServices[0] && {
        text: relatedServices[0].eyebrow,
        href: serviceUrl(relatedServices[0].slug),
        title: `View ${relatedServices[0].eyebrow} related to ${service.eyebrow}`
      },
      relatedServices[0] ? " when the same site, template, workflow, or backlog touches more than one service. " : "",
      relatedSkills[0] && "The technical layer may involve ",
      relatedSkills[0] && {
        text: relatedSkills[0].eyebrow,
        href: skillUrl(relatedSkills[0].slug),
        title: `View ${relatedSkills[0].eyebrow} related to ${service.eyebrow}`
      },
      relatedSkills[0] ? " once the first issue is reproduced." : ""
    ],
    [
      "If the request grows beyond this page, compare ",
      relatedServices[1] && {
        text: relatedServices[1].eyebrow,
        href: serviceUrl(relatedServices[1].slug),
        title: `View ${relatedServices[1].eyebrow} as another service path`
      },
      relatedServices[1] ? " or go back to the " : "go back to the ",
      { text: "Website Services", href: "/services/", title: "View all website services" },
      " hub to route the work by symptom, platform, SEO need, tracking issue, or launch task."
    ]
  ]);
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
        " when the SEO recommendation needs real template, CMS, schema, redirect, or internal-link work instead of another audit."
      ],
      [
        "For the advanced internal-link side of that work, the ",
        { text: "topological relevance and vector SEO", href: "/blog/topological-relevance-vector-seo/", title: "Read the TopoRank case study on crawl topology, semantic clusters, and contextual link support" },
        " case study shows how crawl topology and contextual support guide body-level internal-link decisions before the changes hit a live site."
      ]
    ],
    "ai-built-website-cleanup": [
      [
        "AI-built website cleanup often starts with ",
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
  const allServiceInternalParagraphs = $derived([...(serviceFocusParagraphs[service.slug] || []), ...serviceSupportingParagraphs, ...serviceInternalParagraphs]);
  const serviceDetailTableColumns = [
    { key: "area", label: "Work area" },
    { key: "whatItMeans", label: "What it means" },
    { key: "proof", label: "Helpful evidence" },
    { key: "nextStep", label: "Next step" }
  ];
  const serviceDetailRows = $derived(service.sections.map((section) => ({
    area: serviceSectionHeading(section),
    whatItMeans: section.body || `${section.cards?.length || section.bullets?.length || 0} related ${service.eyebrow.toLowerCase()} items to review.`,
    proof: section.bullets?.slice(0, 2).join(", ") || section.cards?.slice(0, 2).map((card) => card[0]).join(", ") || "URL, access context, screenshot, task list, or audit note",
    nextStep: service.cta
  })));
  const detailHeading = $derived(service.detailHeading || `${service.eyebrow} scope, evidence, and next steps`);
  const detailBody = $derived(service.detailBody || "Use this table to compare the parts of the service, note priority, and gather the right context before sending a request.");
  const limitsHeading = $derived(service.limitsHeading || `What ${service.eyebrow} includes, and where the limits are`);
  const relatedWorkHeading = $derived(service.relatedWorkHeading || `${service.eyebrow} connects to nearby website work`);
  const detailAfterExamples = $derived(service.slug === "technical-seo-developer");
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
  <Hero eyebrow={service.eyebrow} h1={service.h1} intro={service.intro} cta={service.cta} image={serviceHeroImage(service)} />
  <Breadcrumbs items={breadcrumbs} />
  <ServiceNav current={service.slug} services={relatedServices} />

  <section class="section split-section audience-section section-effect section-effect--hex section-effect--medium">
    <div>
      <SectionHeading eyebrow={`${service.eyebrow} fit`} h2={audienceHeading} body={audienceBody} />
      {#if service.audienceItems}
        <ul class="check-list audience-list">
          {#each service.audienceItems as item}<li>{item}</li>{/each}
        </ul>
      {/if}
    </div>
    <div class="rate-callout">
      <span>Simple hourly support</span>
      <strong>$55/hr</strong>
      <p>Good for quick fixes, small projects, cleanup work, ongoing support, and agency overflow when the work is clear.</p>
    </div>
    <InternalLinkCopy paragraphs={allServiceInternalParagraphs} className="internal-link-copy--wide" />
  </section>

  <ProofPanel proof={serviceProof} />

  {#if !detailAfterExamples}
    <section class="section soft-section section-effect section-effect--hex section-effect--low">
      <SectionHeading eyebrow={`${service.eyebrow} details`} h2={detailHeading} body={detailBody} />
      <SortableTable caption={`${service.eyebrow} planning table`} columns={serviceDetailTableColumns} rows={serviceDetailRows} />
      {#if service.detailCaption}<p class="wide-copy service-detail-caption">{service.detailCaption}</p>{/if}
    </section>
  {/if}

  {#each service.sections as section, index}
    <section class={sectionEffect(index + 1, index % 2 === 1 ? "low" : "medium", index % 2 === 1 ? "soft-section" : "")}>
      <SectionHeading eyebrow={serviceSectionEyebrow(section)} h2={serviceSectionHeading(section)} />
      {#if section.cards}
        <CardGrid items={section.cards} />
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
    </section>
    {#if service.midPageCta && index === (service.midPageCta.afterSectionIndex ?? 1)}
      <CtaBand
        heading={service.midPageCta.heading}
        copy={service.midPageCta.copy}
        label={service.midPageCta.label}
        secondaryLabel={service.midPageCta.secondaryLabel || ""}
        secondaryHref={service.midPageCta.secondaryHref || ""}
        sourceTitle={service.h1}
      />
    {/if}
    {#if detailAfterExamples && index === 1}
      <section class="section soft-section section-effect section-effect--hex section-effect--low">
        <SectionHeading eyebrow={`${service.eyebrow} details`} h2={detailHeading} body={detailBody} />
        <SortableTable caption={`${service.eyebrow} planning table`} columns={serviceDetailTableColumns} rows={serviceDetailRows} />
        {#if service.detailCaption}<p class="wide-copy service-detail-caption">{service.detailCaption}</p>{/if}
      </section>
    {/if}
  {/each}

  <section class="section no-overpromise section-effect section-effect--hex section-effect--low">
    <SectionHeading eyebrow={`${service.eyebrow} fit and limits`} h2={limitsHeading} />
    <div class="split-section tight">
      <p>This is practical contract execution. The Web Guy can inspect the site, make changes, troubleshoot issues, explain tradeoffs, and keep work moving. Some problems depend on hosting, platform limits, third-party tools, access, business requirements, or existing code quality.</p>
      <ul class="check-list">
        <li>Clear hourly rate</li>
        <li>Plain updates</li>
        <li>No fake guarantees</li>
        <li>No unlimited flat-fee work</li>
        <li>No pretending every issue is simple</li>
      </ul>
    </div>
  </section>

  <RelatedServices {service} />
  <RelatedSkills slugs={relatedSkillSlugs} />
  {#if clusterTopicalItems.length}
    <TopicalLinks
      eyebrow={service.keywordCluster ? `${service.keywordCluster} paths` : `${service.eyebrow} support paths`}
      heading={`${service.eyebrow} supporting pages`}
      intro="These supporting pages route narrower website problems into the right service path instead of leaving the visitor guessing."
      items={clusterTopicalItems}
    />
  {/if}
  <ContextualSupport
    eyebrow={`Related ${service.eyebrow.toLowerCase()} work`}
    heading={`Where ${service.eyebrow} work often expands`}
    intro="These links point to nearby services and skills that often become part of the same real website request."
    items={contextualSupportItems}
  />
  <TopicalLinks
    eyebrow={`${service.eyebrow} support routes`}
    heading={relatedWorkHeading}
    intro="If this service is close but not the whole problem, these related pages help route the work by platform, symptom, technical task, or next practical step."
    items={topicalItems}
  />
  {#if fixNoteCategory}
    <FixNotesPanel category={fixNoteCategory} serviceSlug={service.slug} />
  {/if}
  <CtaBand heading={service.cta} copy="Send the URL, the task list, or the thing that keeps getting pushed off. The Web Guy will help turn it into actual website work." label={service.cta} sourceTitle={service.h1} />
  <section class="section section-effect section-effect--traces section-effect--low">
    <SectionHeading eyebrow="FAQ" h2={`${service.eyebrow} questions`} />
    <FaqList items={serviceFaqs} />
  </section>
</main>

<style>
  :global(.service-wordpress-plugin-conflict-help > .hero h1) {
    font-size: clamp(2.15rem, 4.45vw, 4.05rem);
  }

  :global(.service-wordpress-plugin-conflict-help > .hero .hero-actions) {
    margin-top: 8px;
  }

  :global(.service-detail-caption) {
    max-width: 920px;
    margin-top: 16px;
    color: var(--muted);
  }
</style>
