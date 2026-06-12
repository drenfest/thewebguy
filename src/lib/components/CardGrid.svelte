<script>
  import ServiceIcon from "./ServiceIcon.svelte";

  let { items = [], className = "card-grid" } = $props();
  const iconSize = $derived(className.includes("compact-grid") ? "sm" : "default");

  function linkTitle(item) {
    const action = item[3] || "Learn more";
    return `${action}: ${item[0]}`;
  }

  function copyFor(item) {
    const copy = item[1] || "";
    return copy
      .replace(/^Use this service page when\b/i, `Use ${item[0]} when`)
      .replace(/^Use this page when\b/i, `Use ${item[0]} when`)
      .replace(/^Use this when\b/i, `Use ${item[0]} when`)
      .replace(/^Use this for\b/i, `Use ${item[0]} for`)
      .replace(/^Use this if\b/i, `Use ${item[0]} if`)
      .replace(/^Use this with\b/i, `Use ${item[0]} with`);
  }
</script>

<div class={className}>
  {#each items as item}
    <article class="card" class:has-icon={!!item[4]}>
      <h3>{item[0]}</h3>
      {#if item[4]}
        <ServiceIcon slug={item[4]} size={iconSize} />
      {/if}
      <p>{copyFor(item)}</p>
      {#if item[2]}
        <a class="text-link" href={item[2]} title={linkTitle(item)}>{item[3] || "Learn more"}</a>
      {/if}
    </article>
  {/each}
</div>
