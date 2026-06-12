<script>
  let { eyebrow, h2, body = "" } = $props();
</script>

<div class="section-heading">
  {#if eyebrow}<p class="eyebrow">{eyebrow}</p>{/if}
  <h2>{h2}</h2>
  {#if body}<p>{body}</p>{/if}
</div>
