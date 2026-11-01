<script>
  import { onMount } from "svelte";
  import content from "$lib/data/relevance-article.html?raw";
  import { mountRelevanceEvidence } from "$lib/components/relevance-evidence.js";
  import "$lib/styles/relevance-article.css";

  let root;
  const sections = [...content.matchAll(/<section class="article-section[^>]* id="([^"]+)"[^>]*>\s*<h2[^>]*>([^<]+)<\/h2>/g)]
    .map(([, id, label]) => ({ id, label }));
  onMount(() => mountRelevanceEvidence(root));
</script>

<!-- Reviewed, repository-owned article markup; never supplied by a visitor. -->
<section class="section blog-article relevance-article" bind:this={root}>
  <div class="article-layout">
    <nav class="article-toc" aria-label="Article table of contents">
      <strong>In this guide</strong>
      <ol>
        {#each sections as section}
          <li><a href={`#${section.id}`} title={`Jump to ${section.label} in this guide`}>{section.label}</a></li>
        {/each}
      </ol>
    </nav>
    <div class="article-shell">
      <p class="eyebrow">Technical SEO systems</p>
      <p class="relevance-snapshot">
        Pages examined: <time datetime="2026-10-31">October 31, 2026</time><br />
        Query comparison: four complete weeks, September 28–October 25, 2026<br />
        61 search phrases · 6 pages with queries · 3 without observed queries
      </p>
      {@html content}
    </div>
  </div>
</section>
