<script>
  import FaqQuestionForm from "./FaqQuestionForm.svelte";

  let { items = [], showLinks = false, askQuestion = true, questionContext = "faq_list" } = $props();
</script>

<div class="faq-block">
  <div class:full-faq={showLinks} class="faq-list">
    {#each items as [question, answer, link]}
      <details>
        <summary>{question}</summary>
        <p>{answer}</p>
        {#if showLinks && link}<a class="text-link" href={link} title={`View the related page for: ${question}`}>Related page</a>{/if}
      </details>
    {/each}
  </div>

  {#if askQuestion}
    <FaqQuestionForm context={questionContext} />
  {/if}
</div>
