<script>
  import { updates, linkedCopy } from "$lib/data/editorial-updates.js";
  import Seo from "$lib/components/Seo.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import CardGrid from "$lib/components/CardGrid.svelte";
  import CtaBand from "$lib/components/CtaBand.svelte";
  import FaqList from "$lib/components/FaqList.svelte";
  import RelatedServices from "$lib/components/RelatedServices.svelte";
  import RelatedSkills from "$lib/components/RelatedSkills.svelte";
  import FixNotesPanel from "$lib/components/FixNotesPanel.svelte";
  import TopicalLinks from "$lib/components/TopicalLinks.svelte";
  import ContextualSupport from "$lib/components/ContextualSupport.svelte";
  import InternalLinkCopy from "$lib/components/InternalLinkCopy.svelte";
  import ProofPanel from "$lib/components/ProofPanel.svelte";
  import SortableTable from "$lib/components/SortableTable.svelte";
  import { serviceUrl, skillUrl } from "$lib/data/content.js";
  import { skillHeroImage } from "$lib/data/hero-images.js";
  import { proofForSkill } from "$lib/data/proof.js";
  import {
    relatedServicesForSkill,
    relatedSkillsForSkill,
    skillContextualSupportItems,
    skillTopicalItems
  } from "$lib/data/relationships.js";
  import { breadcrumbSchema, faqSchema, schemaList, skillPageSchema } from "$lib/data/schema.js";

  let { data } = $props();
  const skill = $derived(data.skill);
  const skillPath = $derived(skillUrl(skill.slug));
  const breadcrumbs = $derived([
    { label: "Home", href: "/", title: "View The Web Guy homepage" },
    { label: "Skills", href: "/skills/", title: "View all technical web skills" },
    { label: skill.eyebrow, title: `Current page: ${skill.h1}` }
  ]);
  const seoSchema = $derived(schemaList(
    breadcrumbSchema(breadcrumbs, skillPath),
    skillPageSchema(skill, skillPath),
    faqSchema(skill.faqs || [])
  ));
  const relatedServiceCards = $derived(relatedServicesForSkill(skill));
  const relatedSkills = $derived(relatedSkillsForSkill(skill));
  const skillProof = $derived(proofForSkill(skill.slug));
  const topicalItems = $derived(skillTopicalItems(skill, relatedServiceCards, relatedSkills));
  const contextualSupportItems = $derived(skillContextualSupportItems(skill, relatedServiceCards, relatedSkills));
  const fixNoteCategoryBySkill = {
    "production-debugging": "Production Debugging"
  };
  const fixNoteCategory = $derived(fixNoteCategoryBySkill[skill.slug] || "");
  const skillFocusParagraphs = {
    "rest-api-webhook-integrations": [
      [
        "API and webhook work usually supports ",
        { text: "Website Integration Help", href: "/services/website-integration-help/", title: "View website integration help for form, CRM, webhook, ecommerce, tracking, and data handoffs" },
        ", ",
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
        ". When those events, forms, CRMs, and reports disagree, I also check ",
        { text: "Tracking Scripts and Pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about broken tracking scripts and pixels" },
        " and ",
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
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels affecting site behavior" },
      { text: "topological relevance and vector SEO", href: "/blog/topological-relevance-vector-seo/", title: "Read the TopoRank case study on vector SEO and internal links" }
    ],
    "production-debugging": [
      { text: "fix my broken website triage", href: "/blog/fix-my-broken-website/", title: "Read the fix my broken website triage guide" },
      { text: "JavaScript issues on websites", href: "/blog/javascript-issues-website-troubleshooting/", title: "Read about JavaScript issues on websites" },
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working" },
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme weirdness" },
      { text: "topological relevance and vector SEO", href: "/blog/topological-relevance-vector-seo/", title: "Read the TopoRank case study on crawl topology and link support" }
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
      { text: "embeds, iframes, and widgets breaking pages", href: "/blog/embeds-iframes-widgets-breaking-pages/", title: "Read about embeds, iframes, and widgets that affect crawlable pages" },
      { text: "topological relevance and vector SEO", href: "/blog/topological-relevance-vector-seo/", title: "Read the TopoRank case study on crawl analysis and internal linking" }
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
  const editorial = $derived(updates.skills[skill.slug]);
  const allSkillInternalParagraphs = $derived(Object.entries(editorial?.copy || {})
    .filter(([heading]) => !/Hero paragraph|answer|FAQ|Performance proof|Shopify proof|Theme proof|table/i.test(heading))
    .map(([, copy]) => linkedCopy(copy, skill.editorialLinks || editorial.links)));
</script>

<Seo title={skill.title} description={skill.meta} schema={seoSchema} />

<main>
  <Hero eyebrow={skill.eyebrow} h1={skill.h1} intro={skill.intro} cta={`Get ${skill.eyebrow} Help`} image={skillHeroImage(skill)} />

  <Breadcrumbs items={breadcrumbs} />

  <section class="section split-section section-effect section-effect--hex section-effect--medium">
    <div>
      <SectionHeading eyebrow={`${skill.eyebrow} problem fit`} h2={`${skill.eyebrow} problems this helps solve`} />
      <ul class="check-list">
        {#each skill.problems as problem}<li>{problem}</li>{/each}
      </ul>
    </div>
    <div>
      <SectionHeading eyebrow={`${skill.eyebrow} tasks`} h2={`${skill.eyebrow} implementation tasks`} />
      <ul class="check-list">
        {#each skill.tasks as task}<li>{task}</li>{/each}
      </ul>
    </div>
  </section>

  <ProofPanel proof={skillProof} />
  {#if skill.slug === "programmatic-seo"}
    <section class="section"><p>See the <a class="text-link" href="/blog/topological-relevance-vector-seo/">TopoRank page and query study</a> for a dated example of comparing page meaning, internal links, and disclosed queries.</p></section>
  {/if}

  <section class="section section-effect section-effect--traces section-effect--low">
    <SectionHeading
      eyebrow={`${skill.eyebrow} planning`}
      h2={skill.projectTable.heading}

    />
    {#if skill.planningIntro}<InternalLinkCopy paragraphs={[linkedCopy(skill.planningIntro, editorial?.links || [])]} />{/if}
    <SortableTable caption={skill.projectTable.heading} columns={skill.projectTable.columns} rows={skill.projectTable.rows} />
    {#if skill.projectTable}
      {#if skill.projectTable.afterHeading}<h3>{skill.projectTable.afterHeading}</h3>{/if}
      {#if skill.projectTable.afterBody}<p class="wide-copy">{skill.projectTable.afterBody}</p>{/if}
    {/if}
  </section>

  <section class="section soft-section section-effect section-effect--hex section-effect--medium">
    <SectionHeading eyebrow={`${skill.eyebrow} in service work`} h2={`Where ${skill.eyebrow} fits into website support`} body={skill.connection} />
    <InternalLinkCopy paragraphs={allSkillInternalParagraphs} />
    <CardGrid
      className="card-grid compact-grid"
      items={relatedServiceCards.map((service) => [service.h1, service.intro, `/services/${service.slug}/`, `View ${service.eyebrow}`, service.slug])}
    />
  </section>

  <RelatedSkills slugs={skill.relatedSkills} />



  {#if fixNoteCategory}
    <FixNotesPanel category={fixNoteCategory} serviceSlug={skill.slug} />
  {/if}

  <CtaBand heading={`Need ${skill.eyebrow} help?`} copy="Send the URL, technical context, what changed recently, and what should happen next." label={`Get ${skill.eyebrow} Help`} sourceTitle={skill.h1} />

  <section class="section section-effect section-effect--traces section-effect--low">
    <SectionHeading eyebrow="FAQ" h2={`${skill.eyebrow} questions`} />
    <FaqList items={skill.faqs} />
  </section>
</main>
