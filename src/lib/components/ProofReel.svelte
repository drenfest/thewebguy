<script>
  import { onMount } from "svelte";

  const slides = [
    {
      title: "Performance & Lighthouse",
      items: [
        "Built thewebguy.app as a fast, lightweight proof asset.",
        "Achieved 100 Lighthouse scores in incognito.",
        "Improved slow, bloated sites from weak Lighthouse scores into the 90+ range.",
        "Diagnosed issues caused by themes, plugins, scripts, images, caching, hosting, and frontend code."
      ]
    },
    {
      title: "WordPress Rescue",
      items: [
        "Worked on custom themes, plugin conflicts, PHP errors, MySQL problems, caching issues, and admin-side failures.",
        "Created and adjusted templates, blocks, reusable sections, and SEO-focused page structures.",
        "Built custom WordPress functionality instead of relying only on plugin stacks.",
        "Stabilized messy WordPress sites after technical problems made them harder to manage."
      ]
    },
    {
      title: "Malware & Security Cleanup",
      items: [
        "Cleaned hacked or compromised WordPress sites.",
        "Removed injected scripts and suspicious files.",
        "Reviewed suspicious admin users.",
        "Scanned files and database content during recovery.",
        "Started hardening steps after cleanup."
      ]
    },
    {
      title: "Technical SEO",
      items: [
        "Implemented structured data for FAQs, services, local pages, articles, products, and business/location pages.",
        "Fixed schema issues that made pages harder for search engines to understand.",
        "Worked with sitemap crawling and automated crawl reports.",
        "Turned messy crawl data into practical action items."
      ]
    },
    {
      title: "Internal Linking & Topical Fit",
      items: [
        "Built custom SEO audit tools for crawl analysis, internal linking, topical fit, and page-role classification.",
        "Built topical fit scoring systems to determine whether a page belongs in a cluster.",
        "Built duplicate/fuzzy-page detection logic.",
        "Planned internal link recommendation algorithms using relevance, anchors, page role, and topology."
      ]
    },
    {
      title: "Local SEO",
      items: [
        "Worked on local SEO campaigns targeting Top 3 Map Pack visibility.",
        "Built service-area and city-page strategies for local businesses.",
        "Created local SEO content for plumbing, dental, mental health, water treatment, cleaning, electrical, and tourism-style businesses.",
        "Built location-page content that avoids pure duplicate boilerplate."
      ]
    },
    {
      title: "Ecommerce SEO",
      items: [
        "Worked across Shopify, WooCommerce, BigCommerce, OpenCart, and custom ecommerce-style sites.",
        "Improved ecommerce category and product page structure.",
        "Worked on niche catalogs including medical furniture, event supplies, eyewear, karaoke systems, and heavy equipment parts.",
        "Fixed ecommerce schema and structured data issues."
      ]
    },
    {
      title: "Analytics & Tracking",
      items: [
        "Cleaned up GA4, Google Tag Manager, Search Console, and conversion/event tracking.",
        "Fixed tracking setups where traffic, form submissions, conversions, or events were not trustworthy.",
        "Verified tracking implementation so business owners could better trust their reporting."
      ]
    },
    {
      title: "Automation & Workflow Cleanup",
      items: [
        "Built Lighthouse/Puppeteer-style crawling workflows.",
        "Automated repetitive SEO reporting and auditing workflows, reducing manual review time by up to 80-90%.",
        "Built keyword clustering and internal-link analysis automation.",
        "Worked with APIs, webhooks, CRON jobs, JSON/CSV workflows, and automation scripts."
      ]
    }
  ];

  let track;
  let activeIndex = $state(0);
  let reduceMotion = $state(false);

  function clampIndex(index) {
    return Math.max(0, Math.min(slides.length - 1, index));
  }

  function updateActiveIndex() {
    if (!track) return;

    const width = track.clientWidth || 1;
    activeIndex = clampIndex(Math.round(track.scrollLeft / width));
  }

  function scrollToSlide(index) {
    if (!track) return;

    const nextIndex = clampIndex(index);
    const slide = track.children[nextIndex];
    if (!slide) return;

    track.scrollTo({
      left: slide.offsetLeft,
      behavior: reduceMotion ? "auto" : "smooth"
    });
    activeIndex = nextIndex;
  }

  onMount(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotion = media.matches;

    const handleMotionChange = () => {
      reduceMotion = media.matches;
    };

    track?.addEventListener("scroll", updateActiveIndex, { passive: true });
    media.addEventListener("change", handleMotionChange);
    updateActiveIndex();

    return () => {
      track?.removeEventListener("scroll", updateActiveIndex);
      media.removeEventListener("change", handleMotionChange);
    };
  });
</script>

<section class="section proof-reel-section section-effect section-effect--signals section-effect--low" aria-labelledby="proof-reel-title">
  <div class="proof-reel-shell">
    <div class="proof-reel-header">
      <div>
        <p class="eyebrow">Proof from real web work</p>
        <h2 id="proof-reel-title">Proof From The Messy Middle</h2>
        <p>Real examples from the overlap of SEO, code, speed, tracking, WordPress, ecommerce, and cleanup work.</p>
      </div>
      <div class="proof-reel-controls" aria-label="Proof reel controls">
        <button type="button" aria-label="Show previous proof category" onclick={() => scrollToSlide(activeIndex - 1)} disabled={activeIndex === 0}>Prev</button>
        <button type="button" aria-label="Show next proof category" onclick={() => scrollToSlide(activeIndex + 1)} disabled={activeIndex === slides.length - 1}>Next</button>
      </div>
    </div>

    <div class="proof-reel-viewport">
      <div class="proof-reel-track" bind:this={track} role="group" aria-label="Proof categories. Swipe, scroll, or use the controls to browse.">
        {#each slides as slide, index}
          <article class="proof-slide" aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}: ${slide.title}`}>
            <div class="proof-slide-kicker">Category {String(index + 1).padStart(2, "0")}</div>
            <h3>{slide.title}</h3>
            <ul>
              {#each slide.items as item}
                <li>{item}</li>
              {/each}
            </ul>
          </article>
        {/each}
      </div>
    </div>

    <div class="proof-reel-dots" aria-label="Choose a proof category">
      {#each slides as slide, index}
        <button
          type="button"
          class:active={activeIndex === index}
          aria-label={`Show ${slide.title}`}
          aria-current={activeIndex === index ? "true" : undefined}
          onclick={() => scrollToSlide(index)}
        >
          <span>{index + 1}</span>
        </button>
      {/each}
    </div>
  </div>
</section>
