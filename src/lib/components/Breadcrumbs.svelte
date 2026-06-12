<script>
  let { items = [] } = $props();

  const crumbs = $derived(items.filter((item) => item?.label));

  function linkTitle(item) {
    return item.title || `View ${item.label}`;
  }

  function currentTitle(item) {
    return item.title || `Current page: ${item.label}`;
  }
</script>

{#if crumbs.length}
  <nav class="breadcrumb-nav" aria-label="Breadcrumb">
    <ol>
      {#each crumbs as item, index}
        <li>
          {#if item.href && index < crumbs.length - 1}
            <a href={item.href} title={linkTitle(item)}>{item.label}</a>
          {:else}
            <span aria-current={index === crumbs.length - 1 ? "page" : undefined} title={currentTitle(item)}>{item.label}</span>
          {/if}
        </li>
      {/each}
    </ol>
  </nav>
{/if}
