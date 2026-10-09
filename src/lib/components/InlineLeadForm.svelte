<script>
  import { onMount } from "svelte";
  import { journeySnapshot, trackContactEvent, trackEvent } from "$lib/analytics.js";

  let {
    id = "inline-inquiry-form",
    eyebrow = "Start here",
    heading = "Tell me what you need",
    intro = "Share the useful details and I will follow up with the next step.",
    sourcePath = "/contact/",
    sourceTitle = heading,
    sourceType = "conversion_page",
    sourceCta = "inline_form_submit",
    service = "Website support",
    workType = "Project inquiry",
    detailsLabel = "What would you like to discuss?",
    detailsPlaceholder = "Describe the project, question, or outcome you have in mind.",
    urlLabel = "Website or project URL (optional)",
    urlPlaceholder = "https://example.com",
    timelineLabel = "Timeline (optional)",
    timelinePlaceholder = "ASAP, this month, flexible",
    submitText = "Send My Request",
    successText = "Your request was submitted. I will review the details and follow up about the next step.",
    note = "Do not send passwords, API keys, payment information, or private customer data."
  } = $props();

  let form = $state({ name: "", email: "", url: "", details: "", timeline: "" });
  let botTrap = $state("");
  let formLoadedAt = $state("");
  let status = $state({ type: "idle", message: "" });
  let started = false;

  const locked = $derived(status.type === "loading" || status.type === "success");
  const buttonLabel = $derived(status.type === "loading" ? "Sending..." : status.type === "success" ? "Request Sent" : submitText);

  function trackingPayload() {
    return {
      form_id: id,
      selected_service: service,
      work_type: workType,
      has_website_url: Boolean(form.url),
      has_timeline: Boolean(form.timeline),
      source_page_type: sourceType,
      source_page_path: sourcePath,
      source_cta: sourceCta
    };
  }

  function startForm() {
    if (started) return;
    started = true;
    const payload = { ...trackingPayload(), ...journeySnapshot() };
    trackEvent("contact_form_start", payload);
    trackContactEvent("contact_form_start", payload);
  }

  onMount(() => {
    formLoadedAt = String(Date.now());
    trackContactEvent("contact_form_view", { ...trackingPayload(), is_form_fill: false });
  });

  async function submit(event) {
    event.preventDefault();
    if (locked) return;

    startForm();
    status = { type: "loading", message: "Sending your request..." };
    const payload = {
      ...form,
      service,
      workType,
      websiteCompany: botTrap,
      formLoadedAt,
      sourcePagePath: sourcePath,
      sourcePageTitle: sourceTitle,
      sourcePageType: sourceType,
      sourceCta
    };
    const analytics = { ...trackingPayload(), ...journeySnapshot() };
    trackEvent("contact_form_submit", analytics);
    trackContactEvent("contact_form_submit", analytics);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || "Request failed.");
      if (result.mode === "filtered") {
        status = { type: "success", message: "Request received." };
        return;
      }
      if (!result.ok || !["gmail-api-email", "smtp-email"].includes(result.mode)) {
        throw new Error("Delivery could not be confirmed. Please try again.");
      }

      status = { type: "success", message: successText };
      trackEvent("contact_form_success", analytics);
      trackContactEvent("contact_form_success", analytics);
      trackEvent("generate_lead", analytics);
    } catch (error) {
      status = {
        type: "error",
        message: error?.message || "Your request could not be submitted. Your details are still here, so you can try again."
      };
      trackEvent("contact_form_error", analytics);
      trackContactEvent("contact_form_error", analytics);
    }
  }
</script>

<section class="section inline-lead-section" {id}>
  <div class="inline-lead-copy">
    <p class="eyebrow">{eyebrow}</p>
    <h2>{heading}</h2>
    <p>{intro}</p>
    <div class="inline-lead-context">
      <span>Request context</span>
      <strong>{sourceTitle}</strong>
      <p>This page will be included with your request.</p>
    </div>
  </div>

  <form class="contact-form contact-form--tight inline-lead-form" onsubmit={submit} onfocusin={startForm}>
    <div class="form-row">
      <label>Name<input bind:value={form.name} name="name" type="text" autocomplete="name" placeholder="Your name" required /></label>
      <label>Email<input bind:value={form.email} name="email" type="email" autocomplete="email" placeholder="you@example.com" required /></label>
    </div>
    <label>{urlLabel}<input bind:value={form.url} name="url" type="url" placeholder={urlPlaceholder} /></label>
    <label>{detailsLabel}<textarea bind:value={form.details} name="details" rows="6" placeholder={detailsPlaceholder} required></textarea></label>
    <label>{timelineLabel}<input bind:value={form.timeline} name="timeline" type="text" placeholder={timelinePlaceholder} /></label>
    <label class="bot-field" aria-hidden="true" tabindex="-1">Leave this field blank<input bind:value={botTrap} name="websiteCompany" type="text" autocomplete="off" tabindex="-1" /></label>
    <input type="hidden" name="formLoadedAt" value={formLoadedAt} />
    <p class="form-note">{note} <a href="/privacy/">How your request is handled</a>.</p>
    <div role="status" aria-live="polite" aria-atomic="true">
      {#if status.message}<p class={`form-status ${status.type}`}>{status.message}</p>{/if}
    </div>
    <button class="button button-primary cta-animated cta-animated--primary" type="submit" disabled={locked} aria-disabled={locked}>{buttonLabel}</button>
  </form>
</section>

<style>
  .inline-lead-section {
    display: grid;
    grid-template-columns: minmax(0, 0.82fr) minmax(340px, 1.18fr);
    gap: clamp(2rem, 5vw, 4.5rem);
    align-items: center;
    scroll-margin-top: 96px;
  }

  .inline-lead-copy {
    display: grid;
    gap: 1rem;
    align-content: center;
  }

  .inline-lead-copy h2,
  .inline-lead-copy p,
  .inline-lead-context p {
    margin: 0;
  }

  .inline-lead-copy h2 {
    font-size: clamp(2rem, 4vw, 3.8rem);
    line-height: 0.98;
  }

  .inline-lead-copy > p:not(.eyebrow) {
    color: var(--ink-muted);
    font-size: 1.05rem;
    line-height: 1.65;
  }

  .inline-lead-context {
    display: grid;
    gap: 0.35rem;
    padding: 1rem 1.05rem;
    border-left: 4px solid var(--accent);
    background: rgba(48, 199, 149, 0.08);
  }

  .inline-lead-context span {
    color: var(--accent-dark);
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .inline-lead-context p {
    color: var(--ink-muted);
    font-size: 0.9rem;
  }

  .inline-lead-form button {
    justify-self: start;
  }

  @media (max-width: 820px) {
    .inline-lead-section {
      grid-template-columns: 1fr;
      align-items: start;
    }

    .form-row {
      grid-template-columns: 1fr;
    }

    .inline-lead-form button {
      width: 100%;
      justify-content: center;
    }
  }
</style>
