<script>
  import FaqQuestionForm from "./FaqQuestionForm.svelte";

  let { items = [], showLinks = false, askQuestion = true, questionContext = "faq_list" } = $props();

  function answerParts(answer) {
    return Array.isArray(answer) ? answer.filter(Boolean) : [answer].filter(Boolean);
  }

  function answerLinkTitle(part) {
    return part.title || `View ${part.text || part.label}`;
  }
</script>

<div class="faq-block">
  <div class:full-faq={showLinks} class="faq-list">
    {#each items as [question, answer, link]}
      <details>
        <summary>{question}</summary>
        <p>
          {#each answerParts(answer) as part}
            {#if typeof part === "string"}
              {part}
            {:else}
              <a class="text-link" href={part.href} title={answerLinkTitle(part)}>{part.text || part.label}</a>
            {/if}
          {/each}
        </p>
        {#if showLinks && link}<a class="text-link" href={link} title={`View the related page for: ${question}`}>Related page</a>{/if}
      </details>
    {/each}
  </div>

  {#if askQuestion}
    <FaqQuestionForm context={questionContext} />
  {/if}
</div>
