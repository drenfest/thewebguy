<script>
  import { page } from "$app/stores";
  import { absoluteUrl, site } from "$lib/config/site.js";
  import { webPageSchema } from "$lib/data/schema.js";

  let { title = "", description = "", canonical = "", schema = [] } = $props();
  const pageUrl = $derived(canonical || absoluteUrl($page.url.pathname));
  const schemaItems = $derived([
    webPageSchema({ title, description, url: pageUrl }),
    ...(Array.isArray(schema) ? schema : [schema])
  ].filter(Boolean));

  function jsonLd(schemaItem) {
    return JSON.stringify(schemaItem).replace(/</g, "\\u003c");
  }
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={pageUrl} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={site.name} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={pageUrl} />
  {#each schemaItems as schemaItem}
    {@html `<script type="application/ld+json">${jsonLd(schemaItem)}</script>`}
  {/each}
</svelte:head>
