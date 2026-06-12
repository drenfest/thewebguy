<script>
  let { proof } = $props();
</script>

{#if proof}
  <section class="section proof-panel-section section-effect section-effect--signals section-effect--low">
    <div class="proof-panel">
      <div class="proof-panel-copy">
        <p class="eyebrow">{proof.eyebrow}</p>
        <h2>{proof.heading}</h2>
        {#if proof.intro}<p>{proof.intro}</p>{/if}
      </div>
      <ul class="proof-panel-list">
        {#each proof.items as item}
          <li>
            <strong>{item.label}</strong>
            <span>{item.copy}</span>
          </li>
        {/each}
      </ul>
    </div>
  </section>
{/if}
