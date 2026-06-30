<script>
  import { onMount } from "svelte";

  let {
    eyebrow = "The Web Guy",
    h1,
    intro,
    cta = "Send the Website Problem",
    ctaHref = "/contact/",
    secondary = "View Services",
    secondaryHref = "/services/",
    showCapabilityLinks = true,
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

  function isFireworksSeason(date = new Date()) {
    const year = date.getFullYear();
    const starts = new Date(year, 5, 15);
    const ends = new Date(year, 6, 5);
    return date >= starts && date < ends;
  }

  const useSeasonalFireworks = isFireworksSeason();
  let HeroEffect = $state(null);

  onMount(() => {
    let cancelled = false;
    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    const delay = isMobile ? 4200 : 3600;

    async function loadHeroEffect() {
      const module = useSeasonalFireworks ? await import("./HeroFireworks.svelte") : await import("./HeroParticles.svelte");
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
  <link
    rel="preload"
    as="image"
    href={preloadHref}
    imagesrcset={webpSrcset}
    imagesizes="(min-width: 1024px) 430px, (min-width: 720px) 74vw, 92vw"
    type="image/webp"
    media="(min-width: 641px)"
    fetchpriority="high"
  />
</svelte:head>

<section class="hero effect effect-hero effect-high">
  {#if HeroEffect}
    <HeroEffect intensity="high" />
  {/if}
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
        <picture>
          <source
            type="image/webp"
            srcset={webpSrcset}
            sizes="(min-width: 1024px) 430px, (min-width: 720px) 74vw, 92vw"
          />
          <img
            src={fallbackSrc}
            srcset={jpegSrcset}
            sizes="(min-width: 1024px) 430px, (min-width: 720px) 74vw, 92vw"
            width={imageWidth}
            height={imageHeight}
            alt={imageAlt}
            loading="lazy"
            fetchpriority="auto"
            decoding="async"
          />
        </picture>
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
