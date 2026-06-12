<script>
  let { paragraphs = [], className = "" } = $props();

  function partsFor(paragraph) {
    return Array.isArray(paragraph) ? paragraph.filter(Boolean) : [paragraph].filter(Boolean);
  }

  function linkTitle(part) {
    return part.title || `View ${part.text || part.label}`;
  }

  function linkText(part) {
    return part.text || part.label;
  }
</script>

{#if paragraphs.length}
  <div class={["internal-link-copy", className].filter(Boolean).join(" ")}>
    {#each paragraphs as paragraph}
      <p>
        {#each partsFor(paragraph) as part}
          {#if typeof part === "string"}
            {part}
          {:else}
            <a href={part.href} title={linkTitle(part)}>{linkText(part)}</a>
          {/if}
        {/each}
      </p>
    {/each}
  </div>
{/if}
