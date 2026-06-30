<script>
  let { items = [], className = "summary-link-grid" } = $props();

  function linkTitle(item) {
    return item.titleAttr || `View ${item.title}`;
  }

  function bulletsFor(item) {
    return (item.bullets || []).slice(0, 5);
  }
</script>

{#if items.length}
  <div class={className}>
    {#each items as item}
      <article class="summary-link-card">
        {#if item.label}<span>{item.label}</span>{/if}
        <h3>{item.title}</h3>
        {#if item.copy}<p>{item.copy}</p>{/if}
        {#if bulletsFor(item).length}
          <ul>
            {#each bulletsFor(item) as bullet}
              <li>{bullet}</li>
            {/each}
          </ul>
        {/if}
        {#if item.href}
          <a class="text-link" href={item.href} title={linkTitle(item)}>{item.linkLabel || "View details"}</a>
        {/if}
      </article>
    {/each}
  </div>
{/if}
