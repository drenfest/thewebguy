<script>
  import { page } from "$app/state";
  import { contactHrefWithContext, isContactTarget } from "$lib/contact-context.js";

  let {
    heading = "Get a Free Quote for the Work You Need",
    copy = "Send the problem or project goal and your timeline. I will confirm scope and cost before paid work begins.",
    label = "Get a Free Quote",
    secondaryLabel = "",
    secondaryHref = "",
    sourceTitle = heading,
    sectionId = undefined
  } = $props();

  const primaryHref = $derived(contactHrefWithContext("/contact/#request-form", {
    sourcePath: page.url.pathname,
    sourceTitle,
    sourceCta: label
  }));
  const contextualSecondaryHref = $derived(contactHrefWithContext(secondaryHref, {
    sourcePath: page.url.pathname,
    sourceTitle,
    sourceCta: secondaryLabel
  }));

  function linkTitle(label, href = "") {
    if (isContactTarget(href)) return "Open the contact request form";
    return `View ${label}`;
  }
</script>

<section class="section cta-band effect effect-dark-grid effect-medium effect-parallax" id={sectionId}>
  <div>
    <h2>{heading}</h2>
    <p>{copy}</p>
  </div>
  <div class="cta-actions">
    <a class="button button-primary cta-animated cta-animated--primary" href={primaryHref} title={linkTitle(label, primaryHref)}>{label}</a>
    {#if secondaryLabel && secondaryHref}
      <a class="button button-secondary cta-animated" href={contextualSecondaryHref} title={linkTitle(secondaryLabel, contextualSecondaryHref)}>{secondaryLabel}</a>
    {/if}
  </div>
</section>
