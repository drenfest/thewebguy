<script>
  let { proof } = $props();
</script>

{#if proof}
  <section class="section proof-panel-section section-effect section-effect--signals section-effect--low">
    <div class="proof-panel">
      <div class="proof-panel-copy">
        {#if proof.eyebrow}<p class="eyebrow">{proof.eyebrow}</p>{/if}
        <h2>{proof.heading}</h2>
        {#if proof.intro}<p>{proof.intro}</p>{/if}
      </div>
      <ul class="proof-panel-list">
        {#each proof.items as item}
          <li class:proof-subsection={proof.subsections}>
            {#if proof.subsections}
              <h3>{item.label}</h3>
              <p>{item.copy}</p>
            {:else}
              <strong>{item.label}</strong>
              <span>{item.copy}</span>
            {/if}
          </li>
        {/each}
      </ul>
    </div>
  </section>
{/if}

<style>
  .proof-panel-list li.proof-subsection {
    grid-template-columns: minmax(0, 1fr);
    gap: 10px;
  }

  .proof-subsection h3 {
    margin: 0;
    color: var(--accent);
    font-size: clamp(1.05rem, 1.5vw, 1.25rem);
    line-height: 1.35;
  }

  .proof-subsection p {
    margin: 0;
    color: rgba(236, 246, 242, 0.86);
    line-height: 1.58;
  }
</style>
