<script>
  import Seo from "$lib/components/Seo.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import CtaBand from "$lib/components/CtaBand.svelte";
  import { staticHeroImages } from "$lib/data/hero-images.js";
  import { sitesForSale, siteForSaleUrl } from "$lib/data/content.js";
  import { breadcrumbSchema, itemListSchema, schemaList } from "$lib/data/schema.js";

  const breadcrumbs = [
    { label: "Home", href: "/", title: "View The Web Guy homepage" },
    { label: "Sites For Sale", title: "Current page: Sites For Sale" }
  ];

  const seoSchema = schemaList(
    breadcrumbSchema(breadcrumbs, "/sites-for-sale/"),
    itemListSchema({
      id: "/sites-for-sale/",
      name: "Sites for sale inventory",
      description: "Single-sale website and app assets from The Web Guy with real screenshots, measured proof, and detail pages for each listing.",
      items: sitesForSale.map((site) => ({
        name: site.name,
        description: site.cardSummary,
        url: siteForSaleUrl(site.slug)
      }))
    })
  );

  const inventoryHighlights = [
    ["Single-sale only", "No cloned packs, no recycled agency templates, and no duplicate customer copies."],
    ["Real screenshots", "Each listing shows the asset instead of generic mockup filler."],
    ["Systems included", "Lead capture, tracking, CRM, or workflow infrastructure is part of the value when the asset supports it."],
    ["Measured proof", "Lighthouse, visibility state, and launch maturity are shown honestly instead of being implied."]
  ];

  const statusLegend = [
    { label: "In Progress", className: "status--progress", copy: "Built and available for early acquisition before the history fully matures." },
    { label: "For Sale", className: "status--sale", copy: "Live inventory that is ready for acquisition now." },
    { label: "Sold", className: "status--sold", copy: "Archive proof of previous asset delivery, not active inventory." }
  ];

  function statusClass(site) {
    if (site.statusSlug === "sold") return "status--sold";
    if (site.statusSlug === "for-sale") return "status--sale";
    return "status--progress";
  }
</script>

<Seo
  title="Sites For Sale | The Web Guy"
  description="Single-sale website and app assets from The Web Guy, shown with real screenshots, status badges, and detail pages built to help buyers evaluate the product."
  schema={seoSchema}
/>

<main>
  <Hero
    eyebrow="Single-sale digital assets"
    h1="Sites For Sale"
    intro="Acquisition-ready web assets, built once and sold once. Each listing is presented like a product: real screenshots, state badges, proof where available, and a direct path into the underlying system depth."
    cta="Ask About Buying a Site"
    image={staticHeroImages.services}
  />

  <Breadcrumbs items={breadcrumbs} />

  <section class="section section-effect section-effect--grid section-effect--medium">
    <div class="inventory-head">
      <SectionHeading
        eyebrow="Current inventory"
        h2="Selective inventory, not a template marketplace"
        body="These listings are meant to help a buyer evaluate the asset itself: the brand, page depth, backend systems, launch maturity, and what is already done before any follow-up scope starts."
      />
    </div>

    <div class="legend-grid" aria-label="Listing status legend">
      {#each statusLegend as item}
        <article class="legend-card">
          <span class={`status-pill ${item.className}`}>{item.label}</span>
          <p>{item.copy}</p>
        </article>
      {/each}
    </div>

    <div class="highlight-grid">
      {#each inventoryHighlights as [title, copy]}
        <article class="highlight-card">
          <strong>{title}</strong>
          <p>{copy}</p>
        </article>
      {/each}
    </div>
  </section>

  <section class="section soft-section section-effect section-effect--signals section-effect--low">
    <div class="sale-card-grid">
      {#each sitesForSale as site}
        <article class="sale-card">
          <div class="sale-card-topline">
            <span class={`status-pill ${statusClass(site)}`}>{site.status}</span>
            <span class="price-pill">{site.askingPrice}</span>
          </div>

          <a class="sale-card-media" href={siteForSaleUrl(site.slug)} title={`View ${site.name} details`}>
            <img src={site.screenshots[0].src} alt={site.screenshots[0].alt} loading="lazy" decoding="async" />
          </a>

          <div class="sale-card-body">
            <div class="sale-card-heading">
              <p class="eyebrow">{site.type}</p>
              <h2><a href={siteForSaleUrl(site.slug)} title={`View ${site.name} details`}>{site.name}</a></h2>
            </div>

            <p class="sale-card-market">{site.market}</p>
            <p>{site.cardSummary}</p>

            <div class="sale-card-badges" aria-label={`${site.name} feature badges`}>
              {#each site.badges as badge}
                <span>{badge}</span>
              {/each}
            </div>

            <dl class="sale-card-metrics">
              {#each site.quickStats.slice(0, 4) as [label, value]}
                <div>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              {/each}
            </dl>

            <div class="sale-card-proof">
              <div>
                <strong>Lighthouse</strong>
                <p>{site.lighthouse.performance} / {site.lighthouse.accessibility} / {site.lighthouse.bestPractices} / {site.lighthouse.seo}</p>
              </div>
              <div>
                <strong>{site.searchConsole.label}</strong>
                <p>{site.searchConsole.value}</p>
              </div>
            </div>

            <div class="sale-card-actions">
              <a class="button button-primary" href={siteForSaleUrl(site.slug)} title={`View ${site.name} asset details`}>View Site Details</a>
              <a class="button button-secondary" href={site.liveUrl} target="_blank" rel="noreferrer" title={`${site.liveLabel}: ${site.name}`}>{site.liveLabel}</a>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </section>

  <CtaBand heading="Want the full transfer scope?" copy="Use the request form to ask about acquisition timing, what is included, launch support, or a similar commissioned build." />
</main>

<style>
  .inventory-head {
    margin-bottom: 1.25rem;
  }

  .legend-grid,
  .highlight-grid,
  .sale-card-grid {
    display: grid;
    gap: 1rem;
  }

  .legend-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-bottom: 1rem;
  }

  .highlight-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .legend-card,
  .highlight-card,
  .sale-card {
    border: 1px solid rgba(21, 44, 51, 0.14);
    border-radius: 1.3rem;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(247, 244, 237, 0.96)),
      radial-gradient(circle at top left, rgba(189, 139, 84, 0.1), transparent 55%);
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
  }

  .legend-card,
  .highlight-card {
    padding: 1.1rem 1.15rem;
  }

  .legend-card p,
  .highlight-card p {
    margin: 0.7rem 0 0;
  }

  .sale-card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sale-card {
    overflow: hidden;
  }

  .sale-card-topline {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.7rem;
    padding: 1.1rem 1.2rem 0;
  }

  .sale-card-media {
    display: block;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: #0f172a;
    margin-top: 0.95rem;
  }

  .sale-card-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    display: block;
  }

  .sale-card-body {
    display: grid;
    gap: 1rem;
    padding: 1.2rem 1.2rem 1.3rem;
  }

  .sale-card-heading h2,
  .sale-card-heading p,
  .sale-card-market,
  .sale-card-proof p {
    margin: 0;
  }

  .sale-card-heading h2 {
    font-size: clamp(1.5rem, 2vw, 2rem);
    line-height: 1.06;
  }

  .sale-card-heading a {
    color: inherit;
    text-decoration: none;
  }

  .sale-card-market {
    color: var(--ink-muted);
    font-weight: 700;
  }

  .sale-card-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
  }

  .sale-card-badges span,
  .price-pill {
    display: inline-flex;
    align-items: center;
    padding: 0.35rem 0.7rem;
    border-radius: 999px;
    background: rgba(10, 31, 40, 0.08);
    font-size: 0.82rem;
    font-weight: 700;
  }

  .sale-card-metrics {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.8rem;
    margin: 0;
  }

  .sale-card-metrics div,
  .sale-card-proof {
    border-top: 1px solid rgba(21, 44, 51, 0.1);
    padding-top: 0.85rem;
  }

  .sale-card-metrics dt {
    font-size: 0.8rem;
    color: var(--ink-muted);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .sale-card-metrics dd {
    margin: 0.18rem 0 0;
    font-size: 1.1rem;
    font-weight: 800;
  }

  .sale-card-proof {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.8rem;
  }

  .sale-card-proof strong {
    display: block;
    margin-bottom: 0.25rem;
  }

  .sale-card-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .sale-card-actions :global(.button) {
    flex: 1 1 15rem;
    justify-content: center;
    text-align: center;
  }

  .sale-card-actions :global(.button-secondary) {
    border-color: #152c33;
    background: #152c33;
    color: #f7f4ed;
  }

  .sale-card-actions :global(.button-secondary:hover) {
    border-color: #0f2026;
    background: #0f2026;
    color: #ffffff;
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

  @media (max-width: 960px) {
    .legend-grid,
    .highlight-grid,
    .sale-card-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
