<script>
  import Seo from "$lib/components/Seo.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import CardGrid from "$lib/components/CardGrid.svelte";
  import FaqList from "$lib/components/FaqList.svelte";
  import CtaBand from "$lib/components/CtaBand.svelte";
  import { aiDevelopmentPages, aiDevelopmentCards, aiDevelopmentUrl } from "$lib/data/ai-development.js";
  import { breadcrumbSchema, faqSchema, serviceSchema, schemaList } from "$lib/data/schema.js";

  let { data } = $props();
  const service = $derived(data.service);
  const path = $derived(aiDevelopmentUrl(service.slug));
  const breadcrumbs = $derived([{ label: "Home", href: "/" }, { label: "AI Development", href: "/ai-development-oversight/" }, { label: service.eyebrow }]);
</script>

<Seo title={service.title} description={service.meta} schema={schemaList(serviceSchema(service, path), breadcrumbSchema(breadcrumbs, path), faqSchema(service.faqs))} />

<main class="ai-development ai-development--detail">
  <Hero eyebrow={service.eyebrow} purpose={service.purpose} h1={service.h1} intro={service.intro} cta={service.cta} secondary="What You Receive" secondaryHref="#deliverables" showCapabilityLinks={false} note="Free quote. Review, testing, and implementation are paid services with scope agreed first.">
    {#snippet panel()}
      <div class="ai-review-preview">
        <p class="eyebrow">What you leave with</p>
        <h2>{service.outcome}</h2>
        <ul class="hero-proof">{#each service.deliverables as item}<li>{item}</li>{/each}</ul>
        <p>The quote defines the coverage, access, and deliverables before work starts.</p>
      </div>
    {/snippet}
  </Hero>
  <Breadcrumbs items={breadcrumbs} />
  <nav class="service-nav" aria-label="AI development services">
    <a href="/ai-development-oversight/">Overview</a>
    {#each aiDevelopmentPages as item}<a href={aiDevelopmentUrl(item.slug)} aria-current={item.slug === service.slug ? "page" : undefined}>{item.eyebrow}</a>{/each}
  </nav>

  <section class="section soft-section" id="deliverables">
    <SectionHeading eyebrow="An actionable handoff" h2="Know What Was Checked and What Comes Next" body="The output should help you and your team make a decision. Each engagement has a defined scope; findings are not a blanket guarantee for the whole application." />
    <ul class="check-list">{#each service.deliverables as item}<li>{item}</li>{/each}</ul>
  </section>

  {#each service.sections as section, index}
    <section class:soft-section={index % 2 === 1} class="section section-effect section-effect--grid section-effect--low">
      <SectionHeading h2={section.h2} body={section.body || ""} />
      {#if section.bullets}<ul class="check-list">{#each section.bullets as item}<li>{item}</li>{/each}</ul>{/if}
      {#if section.cards}<CardGrid items={section.cards} />{/if}
    </section>
  {/each}

  <CtaBand heading="Start with the change you want reviewed" copy="Tell me the goal, platform, current state, and deadline. A repository URL is optional; do not send credentials or make private code public. I will confirm fit and quote the scope." label={service.cta} sourceTitle={service.eyebrow} />

  <section class="section">
    <SectionHeading eyebrow="Before we start" h2={`Questions About ${service.eyebrow}`} />
    <FaqList items={service.faqs} askQuestion={false} />
  </section>
  <section class="section soft-section">
    <SectionHeading eyebrow="Related AI development help" h2="Need a Different Kind of Review?" />
    <CardGrid items={aiDevelopmentCards.filter(card => card[2] !== path)} />
    <p>Already have visible site problems to fix? See <a href="/services/ai-built-website-cleanup/">AI-built website cleanup</a> or <a href="/services/website-fixes/">website fixes</a>.</p>
  </section>
</main>
