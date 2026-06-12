<script>
  import Seo from "$lib/components/Seo.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import CardGrid from "$lib/components/CardGrid.svelte";
  import CtaBand from "$lib/components/CtaBand.svelte";
  import FaqList from "$lib/components/FaqList.svelte";
  import RelatedServices from "$lib/components/RelatedServices.svelte";
  import RelatedSkills from "$lib/components/RelatedSkills.svelte";
  import TopicalLinks from "$lib/components/TopicalLinks.svelte";
  import ContextualSupport from "$lib/components/ContextualSupport.svelte";
  import InternalLinkCopy from "$lib/components/InternalLinkCopy.svelte";
  import { serviceMap, serviceUrl, skillMap, skillUrl } from "$lib/data/content.js";

  let { data } = $props();
  const skill = $derived(data.skill);
  const breadcrumbs = $derived([
    { label: "Home", href: "/", title: "View The Web Guy homepage" },
    { label: "Skills", href: "/skills/", title: "View all technical web skills" },
    { label: skill.eyebrow, title: `Current page: ${skill.h1.replace(" at $55/hr", "")}` }
  ]);
  const relatedServiceCards = $derived(skill.relatedServices.map((slug) => serviceMap[slug]).filter(Boolean));
  const relatedSkills = $derived(skill.relatedSkills.map((slug) => skillMap[slug]).filter(Boolean));
  const topicalItems = $derived([
    {
      label: "Skill hub",
      title: "Technical Web Skills",
      copy: "Use the skills hub when the issue is easier to describe by platform, tool, integration, debugging path, or implementation detail.",
      href: "/skills/"
    },
    ...relatedServiceCards.slice(0, 3).map((service) => ({
      label: "Service connection",
      title: service.h1.replace(" at $55/hr", ""),
      copy: `${skill.eyebrow} usually becomes useful during ${service.eyebrow.toLowerCase()}, especially when implementation has to happen inside an existing website.`,
      href: serviceUrl(service.slug)
    })),
    ...relatedSkills.slice(0, 3).map((related) => ({
      label: "Nearby skill",
      title: related.eyebrow,
      copy: related.connection,
      href: skillUrl(related.slug)
    }))
  ]);
  const contextualSupportItems = $derived([
    ...relatedServiceCards.slice(0, 3).map((service) => ({
      title: service.h1.replace(" at $55/hr", ""),
      href: serviceUrl(service.slug),
      titleAttr: `View ${service.eyebrow} from ${skill.eyebrow}`,
      copy: `${skill.eyebrow} usually matters here when the work needs to become a finished site change instead of a technical note.`
    })),
    ...relatedSkills.slice(0, 1).map((related) => ({
      title: related.eyebrow,
      href: skillUrl(related.slug),
      titleAttr: `View ${related.eyebrow} from ${skill.eyebrow}`,
      copy: related.connection
    }))
  ]);
  const skillFocusParagraphs = {
    "rest-api-webhook-integrations": [
      [
        "API and webhook work usually supports ",
        { text: "API Integrations", href: "/services/api-integrations/", title: "View API integration support for websites, forms, CRMs, ecommerce systems, and data workflows" },
        ", ",
        { text: "Automation & Internal Tools", href: "/services/automation-internal-tools/", title: "View automation and internal tool support for connected website workflows" },
        ", and ",
        { text: "Analytics & Tracking", href: "/services/analytics-tracking/", title: "View analytics and tracking support for verification, events, and reporting" },
        " when payloads, endpoints, authentication, or retry behavior affect the website."
      ]
    ],
    "crawl-analysis-internal-linking": [
      [
        "Crawl and internal-link work is usually part of ",
        { text: "Technical SEO Implementation", href: "/services/technical-seo-implementation/", title: "View technical SEO implementation support for crawl cleanup, redirects, headings, schema, and internal links" },
        ", ",
        { text: "Programmatic SEO", href: "/skills/programmatic-seo/", title: "View programmatic SEO support for scalable page structures, templates, metadata, and internal links" },
        ", or ",
        { text: "Schema & Structured Data", href: "/skills/schema-structured-data/", title: "View schema and structured data implementation support" },
        " when crawl paths, orphaned pages, duplicate pages, and template output need cleanup."
      ]
    ],
    "shopify-plus-liquid": [
      [
        "Shopify and Liquid work usually connects to ",
        { text: "Ecommerce Support", href: "/services/ecommerce-support/", title: "View ecommerce website support for Shopify, WooCommerce, product data, checkout, and tracking" },
        ", ",
        { text: "Google Merchant Center & Product Data", href: "/skills/google-merchant-center-product-data/", title: "View Google Merchant Center and product data support" },
        ", and ",
        { text: "Analytics & Tracking", href: "/services/analytics-tracking/", title: "View analytics and tracking support for Shopify events, pixels, ecommerce data, and reporting" },
        " when templates, product data, conversion tracking, or storefront behavior needs cleanup."
      ]
    ],
    "programmatic-seo": [
      [
        "Programmatic SEO should support ",
        { text: "Technical SEO Implementation", href: "/services/technical-seo-implementation/", title: "View technical SEO implementation support for scalable page structures, metadata, schema, and crawl cleanup" },
        ", ",
        { text: "Crawl Analysis & Internal Linking", href: "/skills/crawl-analysis-internal-linking/", title: "View crawl analysis and internal linking support for scalable SEO pages" },
        ", and ",
        { text: "Schema & Structured Data", href: "/skills/schema-structured-data/", title: "View schema and structured data support for templates and generated pages" },
        " so scaled pages do not become thin, isolated, or hard to crawl."
      ]
    ],
    "google-merchant-center-product-data": [
      [
        "Product data support usually connects ",
        { text: "Ecommerce Support", href: "/services/ecommerce-support/", title: "View ecommerce website support for product data, checkout, catalog cleanup, and tracking" },
        ", ",
        { text: "Shopify Plus & Liquid", href: "/skills/shopify-plus-liquid/", title: "View Shopify Plus and Liquid support for product templates and storefront cleanup" },
        ", ",
        { text: "Schema & Structured Data", href: "/skills/schema-structured-data/", title: "View schema and structured data support for product markup" },
        ", and ",
        { text: "Analytics & Tracking", href: "/services/analytics-tracking/", title: "View analytics and tracking support for ecommerce events and reporting" },
        " when Merchant Center, feeds, product schema, and ecommerce measurement need to line up."
      ]
    ],
    "ga4-gtm-measurement-integrity": [
      [
        "GA4 and GTM work is the technical layer behind ",
        { text: "Analytics & Tracking", href: "/services/analytics-tracking/", title: "View analytics and tracking support for GA4, GTM, pixels, form events, and ecommerce measurement" },
        ", and it often overlaps with ",
        { text: "Tracking Scripts and Pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about broken tracking scripts and pixels" },
        " or ",
        { text: "API Integrations", href: "/services/api-integrations/", title: "View API integration support when data has to move between systems" },
        " when events, forms, CRMs, and reports do not agree."
      ]
    ],
    "schema-structured-data": [
      [
        "Schema work usually supports ",
        { text: "Technical SEO Implementation", href: "/services/technical-seo-implementation/", title: "View technical SEO implementation support for schema, headings, redirects, metadata, and crawl cleanup" },
        ", ",
        { text: "Programmatic SEO", href: "/skills/programmatic-seo/", title: "View programmatic SEO support for template-driven schema and scalable pages" },
        ", and ",
        { text: "Google Merchant Center & Product Data", href: "/skills/google-merchant-center-product-data/", title: "View Google Merchant Center and product data support" },
        " when structured data needs to match the real page, product, service, FAQ, or local context."
      ]
    ],
    "wordpress-plugin-development": [
      [
        "Plugin work belongs near ",
        { text: "WordPress Support", href: "/services/wordpress-support/", title: "View WordPress support for themes, plugins, page builders, content updates, and cleanup" },
        ", ",
        { text: "API Integrations", href: "/services/api-integrations/", title: "View API integration support for WordPress forms, CRMs, ecommerce systems, and data workflows" },
        ", and ",
        { text: "Production Debugging", href: "/skills/production-debugging/", title: "View production debugging support for WordPress behavior, hooks, scripts, forms, and plugin conflicts" },
        " when custom functionality has to work safely inside an existing site."
      ]
    ],
    "wordpress-theme-development": [
      [
        "Theme work usually supports ",
        { text: "WordPress Support", href: "/services/wordpress-support/", title: "View WordPress support for themes, page builders, PHP templates, CSS, JavaScript, and cleanup" },
        ", ",
        { text: "Website Fixes", href: "/services/website-fixes/", title: "View website fixes for broken layouts, mobile issues, CSS bugs, and front-end behavior" },
        ", and ",
        { text: "Technical SEO Implementation", href: "/services/technical-seo-implementation/", title: "View technical SEO implementation for heading structure, templates, schema, and internal links" },
        " when templates, layouts, responsive behavior, or SEO structure need to be corrected."
      ]
    ]
  };
  const supportingArticleLinks = {
    "shopify-plus-liquid": [
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about broken tracking scripts and pixels in storefront measurement" },
      { text: "embeds, iframes, and widgets breaking pages", href: "/blog/embeds-iframes-widgets-breaking-pages/", title: "Read about third-party embeds and widgets breaking pages" }
    ],
    "wordpress-plugin-development": [
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme weirdness" },
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working" }
    ],
    "wordpress-theme-development": [
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme weirdness" },
      { text: "embeds, iframes, and widgets breaking pages", href: "/blog/embeds-iframes-widgets-breaking-pages/", title: "Read about embeds, iframes, and widgets breaking pages" }
    ],
    "performance-engineering": [
      { text: "embeds, iframes, and widgets breaking pages", href: "/blog/embeds-iframes-widgets-breaking-pages/", title: "Read about embeds, iframes, and widgets affecting pages" },
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels affecting site behavior" }
    ],
    "production-debugging": [
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working" },
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme weirdness" }
    ],
    "ga4-gtm-measurement-integrity": [
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about broken tracking scripts and pixels" },
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working with tracking" }
    ],
    "rest-api-webhook-integrations": [
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working before API handoff" },
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels around data handoffs" }
    ],
    "programmatic-seo": [
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme issues that can affect scalable SEO pages" },
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels that can affect page measurement" }
    ],
    "schema-structured-data": [
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme issues that can affect schema output" },
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels near structured data and measurement work" }
    ],
    "crawl-analysis-internal-linking": [
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme issues that can affect crawl output" },
      { text: "embeds, iframes, and widgets breaking pages", href: "/blog/embeds-iframes-widgets-breaking-pages/", title: "Read about embeds, iframes, and widgets that affect crawlable pages" }
    ],
    "google-merchant-center-product-data": [
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels in ecommerce measurement" },
      { text: "embeds, iframes, and widgets breaking pages", href: "/blog/embeds-iframes-widgets-breaking-pages/", title: "Read about third-party widgets affecting product pages" }
    ],
    "cloudflare-dns-ssl": [
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme problems that can look like reliability issues" },
      { text: "embeds, iframes, and widgets breaking pages", href: "/blog/embeds-iframes-widgets-breaking-pages/", title: "Read about third-party embeds and widgets breaking pages" }
    ]
  };
  const skillSupportingParagraphs = $derived((supportingArticleLinks[skill.slug] || []).length ? [[
    "When this capability shows up as a website symptom, useful background includes ",
    ...(supportingArticleLinks[skill.slug] || []).flatMap((link, index, links) => [
      index === 0 ? "" : index === links.length - 1 ? " and " : ", ",
      link
    ]),
    " so the technical fix is tied to what a visitor, marketer, or site owner actually sees."
  ]] : []);
  const skillInternalParagraphs = $derived([
    [
      `${skill.eyebrow} usually becomes useful inside `,
      relatedServiceCards[0] && {
        text: relatedServiceCards[0].eyebrow,
        href: serviceUrl(relatedServiceCards[0].slug),
        title: `View ${relatedServiceCards[0].eyebrow} connected to ${skill.eyebrow}`
      },
      relatedServiceCards[1] ? " and " : "",
      relatedServiceCards[1] && {
        text: relatedServiceCards[1].eyebrow,
        href: serviceUrl(relatedServiceCards[1].slug),
        title: `View ${relatedServiceCards[1].eyebrow} connected to ${skill.eyebrow}`
      },
      " when the technical work needs to become a real site change."
    ],
    [
      relatedSkills[0] ? "Nearby technical context includes " : "For broader context, use the ",
      relatedSkills[0] && {
        text: relatedSkills[0].eyebrow,
        href: skillUrl(relatedSkills[0].slug),
        title: `View ${relatedSkills[0].eyebrow} related to ${skill.eyebrow}`
      },
      relatedSkills[0] ? ", or you can return to the " : "",
      { text: "Technical Web Skills", href: "/skills/", title: "View all technical web skills" },
      " hub when the platform, debugging path, tracking setup, API, SEO system, or performance issue is still being sorted."
    ]
  ]);
  const allSkillInternalParagraphs = $derived([...(skillFocusParagraphs[skill.slug] || []), ...skillSupportingParagraphs, ...skillInternalParagraphs]);
</script>

<Seo title={skill.title} description={skill.meta} />

<main>
  <Hero eyebrow={skill.eyebrow} h1={skill.h1} intro={skill.intro} cta={`Get ${skill.eyebrow} Help`} />

  <Breadcrumbs items={breadcrumbs} />

  <section class="section split-section section-effect section-effect--grid section-effect--medium">
    <div>
      <SectionHeading eyebrow="Problems this solves" h2="Where this skill becomes useful" />
      <ul class="check-list">
        {#each skill.problems as problem}<li>{problem}</li>{/each}
      </ul>
    </div>
    <div>
      <SectionHeading eyebrow="Specific tasks" h2="What The Web Guy can handle" />
      <ul class="check-list">
        {#each skill.tasks as task}<li>{task}</li>{/each}
      </ul>
    </div>
  </section>

  <section class="section soft-section section-effect section-effect--signals section-effect--medium">
    <SectionHeading eyebrow="Service connection" h2="How this connects to real website work" body={skill.connection} />
    <InternalLinkCopy paragraphs={allSkillInternalParagraphs} />
    <CardGrid
      className="card-grid compact-grid"
      items={relatedServiceCards.map((service) => [service.h1.replace(" at $55/hr", ""), service.intro, `/services/${service.slug}/`, `View ${service.eyebrow}`, service.slug])}
    />
  </section>

  {#if skill.contextCards}
    <section class="section section-effect section-effect--traces section-effect--low">
      <SectionHeading
        eyebrow="Implementation context"
        h2={`${skill.eyebrow} connects to nearby site work`}
        body="These are the service and skill paths most likely to matter when this capability shows up on a real website."
      />
      <CardGrid className="card-grid compact-grid" items={skill.contextCards} />
    </section>
  {/if}

  <RelatedSkills slugs={skill.relatedSkills} />

  <ContextualSupport
    eyebrow={`${skill.eyebrow} handoff`}
    heading={`Where ${skill.eyebrow} turns into service work`}
    intro="These links connect this capability to the service paths where it usually becomes useful work."
    items={contextualSupportItems}
  />

  <TopicalLinks
    eyebrow="Topical support"
    heading={`${skill.eyebrow} fits into larger website support work`}
    intro="Use these links when the skill is only one part of the work and you need the surrounding service, platform, or technical implementation context."
    items={topicalItems}
  />

  <CtaBand heading={`Need ${skill.eyebrow} help?`} copy="Send the URL, technical context, what changed recently, and what should happen next." label={`Get ${skill.eyebrow} Help`} />

  <section class="section section-effect section-effect--traces section-effect--low">
    <SectionHeading eyebrow="FAQ" h2={`${skill.eyebrow} questions`} />
    <FaqList items={skill.faqs} />
  </section>
</main>
