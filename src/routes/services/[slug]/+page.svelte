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
  import { serviceMap, serviceSkillMap, serviceUrl, skillMap, skillUrl } from "$lib/data/content.js";
  import { proofForService } from "$lib/data/proof.js";
  import { breadcrumbSchema, faqSchema, schemaList, serviceSchema } from "$lib/data/schema.js";

  let { data } = $props();
  const service = $derived(data.service);
  const servicePath = $derived(serviceUrl(service.slug));
  const breadcrumbs = $derived([
    { label: "Home", href: "/", title: "View The Web Guy homepage" },
    { label: "Services", href: "/services/", title: "View all website services" },
    { label: service.eyebrow, title: `Current page: ${service.h1.replace(" at $55/hr", "")}` }
  ]);
  const serviceFaqs = $derived([
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
  const relatedServices = $derived(service.related.map((slug) => serviceMap[slug]).filter(Boolean));
  const relatedSkills = $derived((serviceSkillMap[service.slug] || []).map((slug) => skillMap[slug]).filter(Boolean));
  const serviceProof = $derived(proofForService(service.slug));
  const fallbackAudienceHeading = $derived(`${service.audience.split(".")[0]}.`);
  const audienceHeading = $derived(service.audienceHeading || fallbackAudienceHeading);
  const audienceBody = $derived(service.audienceHeading ? service.audience : service.audience.split(".").slice(1).join(".").trim());
  const topicalItems = $derived([
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
  ]);
  const contextualSupportItems = $derived([
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
  ]);
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
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme weirdness on existing sites" },
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working on websites" }
    ],
    "technical-seo-implementation": [
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about broken tracking scripts and pixels" },
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme weirdness affecting SEO work" }
    ],
    "landing-pages": [
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working before launch" },
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels before a page launches" }
    ],
    "site-speed-performance": [
      { text: "embeds, iframes, and widgets breaking pages", href: "/blog/embeds-iframes-widgets-breaking-pages/", title: "Read about embeds, iframes, and widgets breaking pages" },
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels affecting site behavior" }
    ],
    "website-fixes": [
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme weirdness" },
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working" }
    ],
    "agency-overflow": [
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme weirdness in client sites" },
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working during production support" }
    ],
    "ecommerce-support": [
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about broken tracking scripts and pixels in ecommerce measurement" },
      { text: "embeds, iframes, and widgets breaking pages", href: "/blog/embeds-iframes-widgets-breaking-pages/", title: "Read about embeds, iframes, and widgets breaking pages" }
    ],
    "analytics-tracking": [
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about broken tracking scripts and pixels" },
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about form and modal issues that affect tracking" }
    ],
    "api-integrations": [
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working before data reaches another system" },
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels around data handoffs" }
    ],
    "security-hosting-reliability": [
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme issues that can look like reliability problems" },
      { text: "embeds, iframes, and widgets breaking pages", href: "/blog/embeds-iframes-widgets-breaking-pages/", title: "Read about third-party embeds and widgets breaking pages" }
    ],
    "automation-internal-tools": [
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels before automating reporting" },
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about form and modal issues before automating data flow" }
    ],
    "ongoing-webmaster-support": [
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme weirdness in ongoing website support" },
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels in recurring website support" }
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
  const effectVariants = ["section-effect--grid", "section-effect--signals", "section-effect--traces"];
  const serviceFocusParagraphs = {
    "website-fixes": [
      [
        "Broken-site work often starts with a symptom like ",
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

<main>
  <Hero eyebrow={service.eyebrow} h1={service.h1} intro={service.intro} cta={service.cta} />
  <Breadcrumbs items={breadcrumbs} />
  <ServiceNav current={service.slug} services={relatedServices} />

  <section class="section split-section audience-section section-effect section-effect--grid section-effect--medium">
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
  {/each}

  <section class="section no-overpromise section-effect section-effect--signals section-effect--low">
    <SectionHeading eyebrow={`${service.eyebrow} fit and limits`} h2={`What ${service.eyebrow} includes, and where the limits are`} />
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
  <RelatedSkills slugs={serviceSkillMap[service.slug] || []} />
  <ContextualSupport
    eyebrow={`Related ${service.eyebrow.toLowerCase()} work`}
    heading={`Where ${service.eyebrow} work often expands`}
    intro="These links point to nearby services and skills that often become part of the same real website request."
    items={contextualSupportItems}
  />
  <TopicalLinks
    eyebrow={`${service.eyebrow} support routes`}
    heading={`${service.eyebrow} connects to nearby website work`}
    intro="If this service is close but not the whole problem, these related pages help route the work by platform, symptom, technical task, or next practical step."
    items={topicalItems}
  />
  <CtaBand heading={service.cta} copy="Send the URL, the task list, or the thing that keeps getting pushed off. The Web Guy will help turn it into actual website work." label={service.cta} />
  <section class="section section-effect section-effect--traces section-effect--low">
    <SectionHeading eyebrow="FAQ" h2={`${service.eyebrow} questions`} />
    <FaqList items={serviceFaqs} />
  </section>
</main>
