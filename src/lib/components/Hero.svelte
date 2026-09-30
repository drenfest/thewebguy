<script>
  import { onMount } from "svelte";
  import { page } from "$app/state";
  import { contactHrefWithContext, isContactTarget } from "$lib/contact-context.js";

  let {
    eyebrow = "The Web Guy",
    h1,
    intro,
    cta = "Get a Free Quote",
    ctaHref = "/contact/#request-form",
    secondary = "View Services",
    secondaryHref = "/services/",
    showCapabilityLinks = true,
    compact = false,
    panel,
    note = "Free quote. Scope and cost agreed before paid work begins.",
    image = {
      slug: "home-contract-web-support",
      basePath: "/images/heroes",
      alt: "Contract web developer workspace with code, analytics dashboards, SEO notes, and technical website support tools",
      width: 1280,
      height: 720
    }
  } = $props();

  const imageBasePath = $derived(image.basePath || "/images/heroes");
  const imageSlug = $derived(image.slug || "home-contract-web-support");
  const imageAlt = $derived(image.alt || "Technical website support workspace with web development, SEO, tracking, and performance tools");
  const imageWidth = $derived(image.width || 1280);
  const imageHeight = $derived(image.height || 720);
  const webpSrcset = $derived(`${imageBasePath}/${imageSlug}-640.webp 640w, ${imageBasePath}/${imageSlug}-960.webp 960w, ${imageBasePath}/${imageSlug}-1280.webp 1280w`);
  const jpegSrcset = $derived(`${imageBasePath}/${imageSlug}-640.jpg 640w, ${imageBasePath}/${imageSlug}-960.jpg 960w, ${imageBasePath}/${imageSlug}-1280.jpg 1280w`);
  const fallbackSrc = $derived(`${imageBasePath}/${imageSlug}-960.jpg`);
  const preloadHref = $derived(`${imageBasePath}/${imageSlug}-960.webp`);
  const imageSizes = "(max-width: 640px) 46vw, (min-width: 1024px) 430px, (min-width: 720px) 74vw, 92vw";
  const contextualCtaHref = $derived(contactHrefWithContext(ctaHref, {
    sourcePath: page.url.pathname,
    sourceTitle: h1,
    sourceCta: cta
  }));
  const contextualSecondaryHref = $derived(contactHrefWithContext(secondaryHref, {
    sourcePath: page.url.pathname,
    sourceTitle: h1,
    sourceCta: secondary
  }));

  const capabilityLinks = [
    ["WordPress", "/services/wordpress-support/"],
    ["Shopify Plus", "/skills/shopify-plus-liquid/"],
    ["Technical SEO", "/services/technical-seo-implementation/"],
    ["Site Speed", "/services/site-speed-performance/"],
    ["Tracking", "/services/analytics-tracking/"],
    ["APIs", "/services/api-integrations/"]
  ];

  function linkTitle(label, href = "") {
    if (isContactTarget(href) || href === "#request-form") return "Open the contact request form";
    return `View ${label}`;
  }

  let HeroEffect = $state(null);

  onMount(() => {
    if (compact) return;
    let cancelled = false;
    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    const delay = isMobile ? 4200 : 3600;

    async function loadHeroEffect() {
      const module = await import("./HeroParticles.svelte");
      if (!cancelled) HeroEffect = module.default;
    }

    const timeout = window.setTimeout(() => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(() => loadHeroEffect().catch(() => {}), { timeout: 1800 });
        return;
      }

      loadHeroEffect().catch(() => {});
    }, delay);

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
    };
  });
</script>

<svelte:head>
  {#if !panel && !compact}
  <link
    rel="preload"
    as="image"
    href={preloadHref}
    imagesrcset={webpSrcset}
    imagesizes={imageSizes}
    type="image/webp"
    media="(min-width: 641px)"
    fetchpriority="high"
  />
  {/if}
</svelte:head>

<section class="hero effect effect-hero effect-high" class:hero--compact={compact}>
  {#if HeroEffect}
    <HeroEffect intensity="high" />
  {/if}
  <div class="hero-grid">
    <div>
      <p class="eyebrow">{eyebrow}</p>
      <p class="availability-pill"><span></span>Direct help from a developer</p>
      <h1>{h1}</h1>
      <p class="hero-lede">{intro}</p>
      <div class="hero-actions">
        <a class="button button-primary cta-animated cta-animated--primary" href={contextualCtaHref} title={linkTitle(cta, contextualCtaHref)}>{cta}</a>
        {#if secondary}<a class="button button-secondary cta-animated" href={contextualSecondaryHref} title={linkTitle(secondary, contextualSecondaryHref)}>{secondary}</a>{/if}
      </div>
      <p class="hero-quote-note">{note}</p>
      {#if showCapabilityLinks}
        <nav class="cred-strip" aria-label="Common website support paths">
          {#each capabilityLinks as [label, url]}
            <a href={url} title={linkTitle(label, url)}>{label}</a>
          {/each}
        </nav>
      {/if}
    </div>
    {#if !compact}<aside class="hero-panel">
      {#if panel}
        {@render panel()}
      {:else}
      <div class="hero-panel-status">
        <span>Your next step</span>
        <strong>Start here</strong>
      </div>
      <div class="hero-image-frame">
        <picture>
          <source
            type="image/webp"
            srcset={webpSrcset}
            sizes={imageSizes}
          />
          <img
            src={fallbackSrc}
            srcset={jpegSrcset}
            sizes={imageSizes}
            width={imageWidth}
            height={imageHeight}
            alt={imageAlt}
            loading="lazy"
            fetchpriority="auto"
            decoding="async"
          />
        </picture>
      </div>
      <div class="rate-badge"><span>Start with your project</span><strong>Free quote</strong></div>
      <p>Tell me what is broken, what needs to launch, or what you want improved. I will help define the work and quote the next step.</p>
      <div class="hero-panel-tags" aria-label="Working together">
        <span>Clear scope</span>
        <span>Remote-friendly</span>
        <span>Task-first</span>
      </div>
      <ul class="hero-proof">
        <li>WordPress, Shopify, tracking, APIs</li>
        <li>Site fixes, speed, SEO implementation</li>
        <li>You approve the work before it starts</li>
      </ul>
      {/if}
    </aside>{/if}
  </div>
</section>
