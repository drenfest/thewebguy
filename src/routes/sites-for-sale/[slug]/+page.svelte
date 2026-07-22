<script>
  import Seo from "$lib/components/Seo.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import CtaBand from "$lib/components/CtaBand.svelte";
  import { siteForSaleUrl } from "$lib/data/content.js";
  import { breadcrumbSchema, schemaList, webPageSchema } from "$lib/data/schema.js";

  let { data } = $props();
  const site = $derived(data.site);

  const breadcrumbs = $derived([
    { label: "Home", href: "/", title: "View The Web Guy homepage" },
    { label: "Sites For Sale", href: "/sites-for-sale/", title: "View all sites for sale" },
    { label: site.name, title: `Current page: ${site.name}` }
  ]);

  const pagePath = $derived(siteForSaleUrl(site.slug));
  const seoSchema = $derived(schemaList(
    breadcrumbSchema(breadcrumbs, pagePath),
    webPageSchema({
      title: `${site.name} | Sites For Sale`,
      description: site.cardSummary,
      url: pagePath
    })
  ));

  const statusClass = $derived(site.statusSlug === "sold" ? "status--sold" : site.statusSlug === "for-sale" ? "status--sale" : "status--progress");
</script>

<Seo
  title={`${site.name} | Sites For Sale | The Web Guy`}
  description={site.cardSummary}
  schema={seoSchema}
/>

<main>
  <section class="sale-hero">
    <div class="sale-hero-copy">
      <Breadcrumbs items={breadcrumbs} />
      <div class="sale-hero-headline">
        <span class={`status-pill ${statusClass}`}>{site.status}</span>
        <span class="price-pill">{site.askingPrice}</span>
      </div>
      <p class="eyebrow">{site.type}</p>
      <h1>{site.name}</h1>
      <p class="sale-market">{site.market}</p>
      <p class="sale-summary">{site.heroSummary}</p>
      <p class="sale-note">{site.availabilityNote}</p>
      <div class="sale-actions">
        <a class="button button-primary" href="/contact/#request-form" title={`Ask about ${site.name}`}>{site.status === "Sold" ? "Ask About a Similar Build" : "Ask About Buying This Site"}</a>
        <a class="button button-secondary" href={site.liveUrl} target="_blank" rel="noreferrer" title={`${site.liveLabel}: ${site.name}`}>{site.liveLabel}</a>
        <a class="button button-secondary" href="/sites-for-sale/" title="Back to the sites for sale inventory">Back to Inventory</a>
      </div>
      <div class="badge-row" aria-label={`${site.name} feature badges`}>
        {#each site.badges as badge}
          <span>{badge}</span>
        {/each}
      </div>
    </div>

    <div class="sale-hero-media">
      <a href={site.liveUrl} target="_blank" rel="noreferrer" title={`${site.liveLabel}: ${site.name}`}>
        <img src={site.screenshots[0].src} alt={site.screenshots[0].alt} />
      </a>
    </div>
  </section>

  <section class="section section-effect section-effect--grid section-effect--medium">
    <div class="proof-grid">
      {#each site.proofBar as [label, value]}
        <article class="proof-card">
          <strong>{value}</strong>
          <p>{label}</p>
        </article>
      {/each}
    </div>
  </section>

  <section class="section soft-section section-effect section-effect--signals section-effect--low">
    <SectionHeading eyebrow="Visual preview" h2="Screenshots from the asset" body="These are real captures from the asset itself, included so the buyer can evaluate the product instead of guessing from a description." />
    <div class={`screenshot-grid ${site.screenshots.length === 1 ? "screenshot-grid--single" : ""}`}>
      {#each site.screenshots as shot}
        <figure class="shot-card">
          <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
          <figcaption>{shot.label}</figcaption>
        </figure>
      {/each}
    </div>
  </section>

  <section class="section section-effect section-effect--traces section-effect--low">
    <SectionHeading eyebrow="Measured proof" h2="Current performance and visibility state" body={site.buyerHook} />
    <div class="metrics-grid">
      <article class="metric-panel">
        <h3>Lighthouse snapshot</h3>
        <div class="score-grid">
          <div><span>Performance</span><strong>{site.lighthouse.performance}</strong></div>
          <div><span>Accessibility</span><strong>{site.lighthouse.accessibility}</strong></div>
          <div><span>Best Practices</span><strong>{site.lighthouse.bestPractices}</strong></div>
          <div><span>SEO</span><strong>{site.lighthouse.seo}</strong></div>
        </div>
        <p>{site.lighthouse.source}</p>
      </article>

      <article class="metric-panel">
        <h3>{site.searchConsole.label}</h3>
        <strong class="metric-emphasis">{site.searchConsole.value}</strong>
        <p>{site.searchConsole.detail}</p>
      </article>

      <article class="metric-panel">
        <h3>{site.traffic.label}</h3>
        <strong class="metric-emphasis">{site.traffic.value}</strong>
        <p>{site.traffic.detail}</p>
      </article>

      <article class="metric-panel">
        <h3>Last optimization date</h3>
        <strong class="metric-emphasis">{site.lastOptimizationDate}</strong>
        <p>The listing shows whether the asset is still being improved or already archived.</p>
      </article>
    </div>
  </section>

  <section class="section split-section section-effect section-effect--grid section-effect--low">
    <div>
      <SectionHeading eyebrow="Quick snapshot" h2="Core build numbers" body="The buyer should not need to inspect a sitemap or codebase just to understand the asset depth." />
    </div>
    <div>
      <dl class="stat-list">
        {#each site.quickStats as [label, value]}
          <div>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        {/each}
      </dl>
    </div>
  </section>

  <section class="section soft-section section-effect section-effect--signals section-effect--low">
    <div class="detail-section-grid">
      {#each site.sections as section}
        <article class="detail-card">
          <h2>{section.title}</h2>
          <ul class="check-list">
            {#each section.items as item}
              <li>{item}</li>
            {/each}
          </ul>
        </article>
      {/each}
    </div>
  </section>

  <CtaBand heading="Need the transfer scope or expansion plan?" copy="Use the request form to ask about acquisition timing, rebranding, launch support, additional locations, SEO work, or a similar commissioned build." />
</main>

<style>
  .sale-hero {
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
    gap: 1.5rem;
    padding: clamp(1.4rem, 3vw, 2rem);
  }

  .sale-hero-copy,
  .sale-hero-media,
  .proof-card,
  .shot-card,
  .metric-panel,
  .detail-card {
    border: 1px solid rgba(21, 44, 51, 0.14);
    border-radius: 1.3rem;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(247, 244, 237, 0.96)),
      radial-gradient(circle at top left, rgba(189, 139, 84, 0.1), transparent 55%);
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
  }

  .sale-hero-copy {
    padding: 1.35rem 1.4rem 1.45rem;
    display: grid;
    gap: 0.95rem;
  }

  .sale-hero-copy :global(.breadcrumb-nav) {
    margin-bottom: 0.3rem;
  }

  .sale-hero-headline,
  .sale-actions,
  .badge-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .sale-hero-copy h1,
  .sale-market,
  .sale-summary,
  .sale-note,
  .metric-panel p {
    margin: 0;
  }

  .sale-hero-copy h1 {
    font-size: clamp(2.2rem, 4vw, 4rem);
    line-height: 0.96;
  }

  .sale-market {
    font-size: 1.02rem;
    font-weight: 700;
    color: var(--ink-muted);
  }

  .sale-summary {
    font-size: 1.05rem;
  }

  .sale-note {
    color: var(--ink-muted);
  }

  .sale-hero-media {
    overflow: hidden;
    min-height: 420px;
  }

  .sale-hero-media a {
    display: block;
    width: 100%;
    height: 100%;
  }

  .sale-hero-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    display: block;
  }

  .badge-row span,
  .price-pill {
    display: inline-flex;
    align-items: center;
    padding: 0.35rem 0.7rem;
    border-radius: 999px;
    background: rgba(10, 31, 40, 0.08);
    font-size: 0.82rem;
    font-weight: 700;
  }

  .status-pill {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .status--progress {
    background: rgba(202, 133, 48, 0.14);
    color: #9b5b13;
    border: 1px solid rgba(202, 133, 48, 0.25);
  }

  .status--sale {
    background: rgba(14, 99, 76, 0.14);
    color: #0e5c47;
    border: 1px solid rgba(14, 99, 76, 0.24);
  }

  .status--sold {
    background: rgba(33, 79, 102, 0.14);
    color: #1d5067;
    border: 1px solid rgba(33, 79, 102, 0.24);
  }

  .proof-grid,
  .metrics-grid,
  .detail-section-grid {
    display: grid;
    gap: 1rem;
  }

  .proof-grid {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  .proof-card {
    padding: 1rem 1.05rem;
  }

  .proof-card strong {
    display: block;
    font-size: 1.05rem;
    line-height: 1.1;
  }

  .proof-card p {
    margin: 0.35rem 0 0;
    color: var(--ink-muted);
  }

  .screenshot-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .screenshot-grid--single {
    grid-template-columns: 1fr;
  }

  .shot-card {
    overflow: hidden;
    margin: 0;
  }

  .shot-card img {
    width: 100%;
    display: block;
    object-fit: cover;
    object-position: top center;
    max-height: 32rem;
  }

  .shot-card figcaption {
    padding: 0.85rem 1rem 1rem;
    font-weight: 700;
  }

  .metrics-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .metric-panel,
  .detail-card {
    padding: 1.1rem 1.15rem;
  }

  .metric-panel h3,
  .detail-card h2 {
    margin: 0 0 0.8rem;
  }

  .score-grid,
  .stat-list,
  .detail-section-grid {
    display: grid;
  }

  .score-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
    margin-bottom: 0.9rem;
  }

  .score-grid div,
  .stat-list div {
    padding: 0.8rem 0.9rem;
    border-radius: 1rem;
    background: rgba(10, 31, 40, 0.05);
  }

  .score-grid span,
  .stat-list dt {
    display: block;
    font-size: 0.82rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ink-muted);
  }

  .score-grid strong,
  .metric-emphasis,
  .stat-list dd {
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.05;
  }

  .metric-emphasis,
  .stat-list dd {
    display: block;
    margin-bottom: 0.5rem;
  }

  .stat-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.85rem;
  }

  .stat-list dd {
    margin: 0.2rem 0 0;
  }

  .detail-section-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 960px) {
    .sale-hero,
    .proof-grid,
    .screenshot-grid,
    .metrics-grid,
    .stat-list,
    .detail-section-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
