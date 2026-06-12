<script>
  import { page } from "$app/stores";
  import { site } from "$lib/config/site.js";

  let { title = "", description = "", canonical = "" } = $props();
  const origin = import.meta.env.PUBLIC_SITE_URL || "https://thewebguy.app";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical || `${origin}${$page.url.pathname}`} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={site.name} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical || `${origin}${$page.url.pathname}`} />
</svelte:head>
