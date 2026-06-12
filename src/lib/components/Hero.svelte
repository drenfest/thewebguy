<script>
  import HeroParticles from "./HeroParticles.svelte";

  let {
    eyebrow = "The Web Guy",
    h1,
    intro,
    cta = "Send the Website Problem",
    ctaHref = "/contact/",
    secondary = "View Services",
    secondaryHref = "/services/",
    showCapabilityLinks = true
  } = $props();

  const capabilityLinks = [
    ["WordPress", "/services/wordpress-support/"],
    ["Shopify Plus", "/skills/shopify-plus-liquid/"],
    ["Technical SEO", "/services/technical-seo-implementation/"],
    ["Site Speed", "/services/site-speed-performance/"],
    ["Tracking", "/services/analytics-tracking/"],
    ["APIs", "/services/api-integrations/"]
  ];

  function linkTitle(label, href = "") {
    if (href === "/contact/" || href === "#request-form") return "Open the contact request form";
    return `View ${label}`;
  }
</script>

<section class="hero effect effect-hero effect-high">
  <HeroParticles intensity="high" />
  <div class="hero-grid">
    <div>
      <p class="eyebrow">{eyebrow}</p>
      <p class="availability-pill"><span></span>Available for contract web work at $55/hr</p>
      <h1>{h1}</h1>
      <p class="hero-lede">{intro}</p>
      <div class="hero-actions">
        <a class="button button-primary cta-animated cta-animated--primary" href={ctaHref} title={linkTitle(cta, ctaHref)}>{cta}</a>
        <a class="button button-secondary cta-animated" href={secondaryHref} title={linkTitle(secondary, secondaryHref)}>{secondary}</a>
      </div>
      {#if showCapabilityLinks}
        <nav class="cred-strip" aria-label="Common website support paths">
          {#each capabilityLinks as [label, url]}
            <a href={url} title={linkTitle(label, url)}>{label}</a>
          {/each}
        </nav>
      {/if}
    </div>
    <aside class="hero-panel">
      <div class="hero-panel-status">
        <span>Contract queue</span>
        <strong>Open</strong>
      </div>
      <div class="hero-image-frame">
        <img src="/images/technical-web-support-hero.png" alt="Technical website support workspace with code, audit notes, analytics, and performance dashboards" />
      </div>
      <div class="rate-badge"><span>Contract rate</span><strong>$55/hr</strong></div>
      <p>Practical hourly web support for fixes, implementation, cleanup, and ongoing website work.</p>
      <div class="hero-panel-tags" aria-label="Rate details">
        <span>Hourly</span>
        <span>Remote-friendly</span>
        <span>Task-first</span>
      </div>
      <ul class="hero-proof">
        <li>WordPress, Shopify, tracking, APIs</li>
        <li>Site fixes, speed, SEO implementation</li>
        <li>No bloated packages or mystery pricing</li>
      </ul>
    </aside>
  </div>
</section>
