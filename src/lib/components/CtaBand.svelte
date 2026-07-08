<script>
  import { page } from "$app/state";
  import { contactHrefWithContext, isContactTarget } from "$lib/contact-context.js";

  let {
    heading = "Send The Web Guy the problem",
    copy = "Include the URL, what is broken or needed, your timeline, and whether this is one-time or ongoing work.",
    label = "Send the Problem",
    secondaryLabel = "",
    secondaryHref = "",
    sourceTitle = heading
  } = $props();

  const primaryHref = $derived(contactHrefWithContext("/contact/", {
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

<section class="section cta-band effect effect-dark-grid effect-medium effect-parallax">
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
