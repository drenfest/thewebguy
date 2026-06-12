<script>
  let { items = [], showLinks = false } = $props();
</script>

<div class:full-faq={showLinks} class="faq-list">
  {#each items as [question, answer, link]}
    <details>
      <summary>{question}</summary>
      <p>{answer}</p>
      {#if showLinks && link}<a class="text-link" href={link} title={`View the related page for: ${question}`}>Related page</a>{/if}
    </details>
  {/each}
</div>
