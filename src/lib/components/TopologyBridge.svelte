<script>
  import { page } from "$app/state";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import { topologyBridgeMap } from "$lib/data/toporank-remediation.js";

  function normalizePath(pathname = "/") {
    if (pathname === "/") return pathname;
    return pathname.endsWith("/") ? pathname : `${pathname}/`;
  }

  const links = $derived(topologyBridgeMap[normalizePath(page.url.pathname)] || []);
</script>

{#if links.length}
  <section class="section topology-bridge-section section-effect section-effect--traces section-effect--low">
    <SectionHeading
      eyebrow="TopoRank support path"
      h2="Related pages that reinforce this topic"
      body="TopoRank marked these nearby pages as useful contextual routes. They help connect this page to the parts of the site that share its real technical meaning."
    />
    <div class="topology-bridge-list">
      {#each links as link}
        <p>
          <a href={link.href} title={`View ${link.title}`}>{link.anchor}</a>
          <span>{link.title}</span>
        </p>
      {/each}
    </div>
  </section>
{/if}
