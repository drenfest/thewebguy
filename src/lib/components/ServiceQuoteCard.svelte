<script>
  import { page } from "$app/state";
  import { contactHrefWithContext } from "$lib/contact-context.js";

  let { conversion, sourceTitle, className = "" } = $props();
  const href = $derived(contactHrefWithContext("/contact/#request-form", {
    sourcePath: page.url.pathname,
    sourceTitle,
    sourceCta: conversion.label
  }));
</script>

<div class={`rate-callout service-quote-card ${className}`.trim()}>
  <span>{conversion.eyebrow}</span>
  <strong>{conversion.heading}</strong>
  <p>{conversion.copy}</p>
  <a class="service-quote-link" {href} title="Open the contact request form">
    <span>{conversion.label}</span><b aria-hidden="true">→</b>
  </a>
</div>

<style>
  .service-quote-card {
    align-content: center;
    gap: 12px;
  }

  .service-quote-card strong {
    max-width: 15ch;
    margin-top: 0;
    font-size: clamp(1.8rem, 3.2vw, 2.8rem);
    line-height: 1.04;
  }

  .service-quote-card p {
    max-width: 38rem;
    margin: 0;
  }

  .service-quote-link {
    display: inline-flex;
    width: fit-content;
    align-items: center;
    gap: 12px;
    margin-top: 4px;
    justify-self: center;
    padding: 10px 14px;
    border: 1px solid rgba(48, 199, 149, 0.48);
    border-radius: 7px;
    background: rgba(48, 199, 149, 0.1);
    color: #f7fbff;
    text-decoration: none;
    transition: background 160ms ease, border-color 160ms ease, transform 160ms ease;
  }

  .service-quote-link span {
    color: inherit;
    font-size: 0.78rem;
  }

  .service-quote-link b {
    color: var(--accent);
    font-size: 1rem;
  }

  .service-quote-link:hover {
    border-color: rgba(48, 199, 149, 0.82);
    background: rgba(48, 199, 149, 0.18);
    transform: translateY(-1px);
  }

  .service-quote-link:focus-visible {
    outline: 3px solid rgba(48, 199, 149, 0.35);
    outline-offset: 3px;
  }
</style>
