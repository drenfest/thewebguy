<script>
  let {
    eyebrow = "Next step",
    heading = "Pages that clarify the work",
    intro = "",
    items = []
  } = $props();

  function linkTitle(item) {
    return item.titleAttr || `View ${item.title}`;
  }
</script>

{#if items.length}
  <section class="section contextual-support-section section-effect section-effect--signals section-effect--low">
    <div class="contextual-support-panel">
      <div class="section-heading">
        <p class="eyebrow">{eyebrow}</p>
        <h2>{heading}</h2>
        {#if intro}<p>{intro}</p>{/if}
      </div>

      <div class="contextual-support-list">
        {#each items as item}
          <p>
            <a href={item.href} title={linkTitle(item)}>{item.title}</a>
            <span>{item.copy}</span>
          </p>
        {/each}
      </div>
    </div>
  </section>
{/if}
