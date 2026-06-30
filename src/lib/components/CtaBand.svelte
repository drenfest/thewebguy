<script>
  let {
    heading = "Send The Web Guy the problem",
    copy = "Include the URL, what is broken or needed, your timeline, and whether this is one-time or ongoing work.",
    label = "Send the Problem",
    secondaryLabel = "",
    secondaryHref = ""
  } = $props();

  function linkTitle(label, href = "") {
    if (href === "/contact/") return "Open the contact request form";
    return `View ${label}`;
  }
</script>

<section class="section cta-band effect effect-dark-grid effect-medium effect-parallax">
  <div>
    <h2>{heading}</h2>
    <p>{copy}</p>
  </div>
  <div class="cta-actions">
    <a class="button button-primary cta-animated cta-animated--primary" href="/contact/" title={linkTitle(label, "/contact/")}>{label}</a>
    {#if secondaryLabel && secondaryHref}
      <a class="button button-secondary cta-animated" href={secondaryHref} title={linkTitle(secondaryLabel, secondaryHref)}>{secondaryLabel}</a>
    {/if}
  </div>
</section>
