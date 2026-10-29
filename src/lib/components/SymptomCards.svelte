<script>
  let { items = [] } = $props();
</script>

<div class="card-grid symptom-grid">
  {#each items as item}
    <article class="card">
      <h3>{item.heading}</h3>
      <p><strong>Symptoms:</strong> {item.symptoms}</p>
      <p><strong>Possible issues:</strong> {item.possibleIssues}</p>
    </article>
  {/each}
</div>

<style>
  .symptom-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 760px) {
    .symptom-grid {
      grid-template-columns: minmax(0, 1fr);
    }
  }
</style>
