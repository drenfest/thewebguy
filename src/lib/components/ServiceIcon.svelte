<script>
  let { slug = "", size = "default" } = $props();

  const topologySlugs = ["technical-seo-implementation", "schema-structured-data", "crawl-analysis-internal-linking"];
  const isTopologyIcon = $derived(topologySlugs.includes(slug));
</script>

<span class="icon-wrap service-icon" class:icon-wrap-sm={size === "sm"} class:service-icon-topology={isTopologyIcon} aria-hidden="true">
  <svg viewBox={isTopologyIcon ? "0 0 96 64" : "0 0 64 64"} focusable="false">
    <rect class="icon-tile" x="6" y="6" width="52" height="52" rx="12" />
    {#if slug === "wordpress-support" || slug === "wordpress-plugin-development" || slug === "wordpress-theme-development"}
      <g transform="translate(7 7) scale(0.408)">
        <path class="icon-fill" d="m8.708 61.26c0 20.802 12.089 38.779 29.619 47.298l-25.069-68.686c-2.916 6.536-4.55 13.769-4.55 21.388z" />
        <path class="icon-fill" d="m96.74 58.608c0-6.495-2.333-10.993-4.334-14.494-2.664-4.329-5.161-7.995-5.161-12.324 0-4.831 3.664-9.328 8.825-9.328.233 0 .454.029.681.042-9.35-8.566-21.807-13.796-35.489-13.796-18.36 0-34.513 9.42-43.91 23.688 1.233.037 2.395.063 3.382.063 5.497 0 14.006-.667 14.006-.667 2.833-.167 3.167 3.994.337 4.329 0 0-2.847.335-6.015.501l19.138 56.925 11.501-34.493-8.188-22.434c-2.83-.166-5.511-.501-5.511-.501-2.832-.166-2.5-4.496.332-4.329 0 0 8.679.667 13.843.667 5.496 0 14.006-.667 14.006-.667 2.835-.167 3.168 3.994.337 4.329 0 0-2.853.335-6.015.501l18.992 56.494 5.242-17.517c2.272-7.269 4.001-12.49 4.001-16.989z" />
        <path class="icon-fill" d="m62.184 65.857-15.768 45.819c4.708 1.384 9.687 2.141 14.846 2.141 6.12 0 11.989-1.058 17.452-2.979-.141-.225-.269-.464-.374-.724z" />
        <path class="icon-fill" d="m107.376 36.046c.226 1.674.354 3.471.354 5.404 0 5.333-.996 11.328-3.996 18.824l-16.053 46.413c15.624-9.111 26.133-26.038 26.133-45.426.001-9.137-2.333-17.729-6.438-25.215z" />
        <path class="icon-fill-accent" d="m61.262 0c-33.779 0-61.262 27.481-61.262 61.26 0 33.783 27.483 61.263 61.262 61.263 33.778 0 61.265-27.48 61.265-61.263-.001-33.779-27.487-61.26-61.265-61.26zm0 119.715c-32.23 0-58.453-26.223-58.453-58.455 0-32.23 26.222-58.451 58.453-58.451 32.229 0 58.45 26.221 58.45 58.451 0 32.232-26.221 58.455-58.45 58.455z" />
      </g>
    {:else if slug === "technical-seo-implementation" || slug === "schema-structured-data" || slug === "crawl-analysis-internal-linking"}
      <path class="icon-line icon-topology-line" d="M48 27v8M48 35H27M48 35h21M27 35v8M69 35v8" />
      <circle class="icon-dot" cx="48" cy="35" r="2" />
      <rect class="icon-node-fill icon-node-fill-accent" x="31" y="11" width="34" height="16" rx="8" />
      <text class="icon-label icon-label-accent" x="48" y="19">Pillar</text>
      <rect class="icon-node-fill" x="9" y="43" width="36" height="15" rx="7.5" />
      <text class="icon-label" x="27" y="50.5">Topic A</text>
      <rect class="icon-node-fill" x="51" y="43" width="36" height="15" rx="7.5" />
      <text class="icon-label" x="69" y="50.5">Topic B</text>
    {:else if slug === "landing-pages"}
      <rect class="icon-line" x="18" y="17" width="28" height="32" rx="3" />
      <path class="icon-accent" d="M24 25h16M24 32h11M24 40h18" />
    {:else if slug === "site-speed-performance" || slug === "performance-engineering"}
      <path class="icon-line" d="M18 39a15 15 0 1 1 28 0" />
      <path class="icon-accent" d="M32 37l11-13" />
      <circle class="icon-dot" cx="32" cy="39" r="3" />
    {:else if slug === "website-fixes" || slug === "production-debugging"}
      <rect class="icon-line" x="14" y="17" width="34" height="24" rx="3" />
      <path class="icon-line" d="M24 48h14M31 41v7" />
      <circle class="icon-accent" cx="44" cy="42" r="6" />
      <path class="icon-accent" d="M44 32v4M44 48v4M34 42h4M50 42h4M37 35l3 3M48 46l3 3M37 49l3-3M48 38l3-3" />
      <circle class="icon-dot" cx="44" cy="42" r="2.2" />
    {:else if slug === "agency-overflow"}
      <rect class="icon-line" x="17" y="20" width="14" height="14" rx="2" />
      <rect class="icon-line" x="33" y="20" width="14" height="14" rx="2" />
      <rect class="icon-accent" x="25" y="36" width="14" height="8" rx="2" />
    {:else if slug === "ecommerce-support" || slug === "shopify-plus-liquid" || slug === "google-merchant-center-product-data"}
      <rect class="icon-line" x="15" y="17" width="34" height="29" rx="4" />
      <path class="icon-line" d="M15 26h34M21 21h2M27 21h2" />
      <path class="icon-accent" d="M21 32h5l3 9h14l3-7H30" />
      <circle class="icon-accent" cx="32" cy="45" r="2.4" />
      <circle class="icon-accent" cx="43" cy="45" r="2.4" />
      <path class="icon-line" d="M36 21h7M40 21v-4M44 17h4" />
    {:else if slug === "analytics-tracking" || slug === "ga4-gtm-measurement-integrity"}
      <rect class="icon-line" x="15" y="17" width="34" height="30" rx="4" />
      <path class="icon-line" d="M15 27h34M25 27v20M20 22h2M26 22h2" />
      <path class="icon-accent" d="M21 40l8-7 7 4 8-10" />
      <circle class="icon-accent" cx="21" cy="40" r="2.2" />
      <circle class="icon-accent" cx="29" cy="33" r="2.2" />
      <circle class="icon-accent" cx="36" cy="37" r="2.2" />
      <circle class="icon-accent" cx="44" cy="27" r="2.2" />
      <path class="icon-line" d="M31 43h12" />
    {:else if slug === "api-integrations" || slug === "rest-api-webhook-integrations" || slug === "api-workflow"}
      <path class="icon-line" d="M24 25h-3a7 7 0 0 0 0 14h3M40 25h3a7 7 0 0 1 0 14h-3" />
      <path class="icon-accent" d="M27 32h10" />
    {:else if slug === "security-hosting-reliability" || slug === "cloudflare-dns-ssl"}
      <path class="icon-line" d="M32 17l15 6v10c0 10-7 15-15 18-8-3-15-8-15-18V23z" />
      <path class="icon-accent" d="M25 33l5 5 10-12" />
    {:else if slug === "crawler-checker"}
      <circle class="icon-ring" cx="28" cy="28" r="10" />
      <path class="icon-line" d="M36 36l9 9M21 25h10M21 31h7" />
      <path class="icon-accent" d="M38 22l4 4 7-8" />
    {:else if slug === "seo-qa"}
      <path class="icon-line" d="M18 43h28M23 43V30M32 43V23M41 43V34" />
      <path class="icon-accent" d="M22 21h15M22 27h9M38 25l4 4 7-8" />
    {:else if slug === "reporting-helper"}
      <rect class="icon-line" x="20" y="17" width="24" height="32" rx="3" />
      <path class="icon-accent" d="M26 39v-8M32 39V25M38 39v-5" />
      <path class="icon-line" d="M26 22h12" />
    {:else if slug === "dashboard-tool"}
      <rect class="icon-line" x="18" y="19" width="28" height="26" rx="3" />
      <path class="icon-line" d="M18 28h28M27 28v17" />
      <path class="icon-accent" d="M33 38l5-5 5 5" />
    {:else if slug === "cron-job"}
      <circle class="icon-ring" cx="32" cy="32" r="15" />
      <path class="icon-line" d="M32 23v10l7 4" />
      <path class="icon-accent" d="M21 20l-4 7h8M43 44l4-7h-8" />
    {:else if slug === "automation-internal-tools" || slug === "automation-dashboards-reporting"}
      <path class="icon-line" d="M32 17v8M32 39v8M17 32h8M39 32h8" />
      <circle class="icon-ring" cx="32" cy="32" r="9" />
      <path class="icon-accent" d="M38 20l6 6M20 44l6-6" />
    {:else if slug === "ongoing-webmaster-support"}
      <path class="icon-line" d="M19 22h26v18H19zM25 46h14" />
      <path class="icon-accent" d="M24 29h8M24 35h16" />
    {:else if slug === "react-static-sites" || slug === "php-javascript-node"}
      <path class="icon-line" d="M20 22h24v20H20z" />
      <path class="icon-accent" d="M27 30l-5 4 5 4M37 30l5 4-5 4M34 28l-4 12" />
    {:else if slug === "programmatic-seo"}
      <path class="icon-line" d="M18 23h10v10H18zM36 23h10v10H36zM18 41h10v6H18zM36 41h10v6H36z" />
      <path class="icon-accent" d="M28 28h8M28 44h8M32 33v8" />
    {:else}
      <path class="icon-line" d="M20 22h24v20H20z" />
      <path class="icon-accent" d="M25 30h14M25 36h9" />
    {/if}
  </svg>
</span>
