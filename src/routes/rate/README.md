# `src/routes/rate`

The existing `/rate/` URL is retained as the **How Quotes Work** page.

- `+page.svelte` explains the free quote, agreed scope and cost, separately scoped paid diagnostics, approval, and handoff.
- Reuses Hero, Breadcrumbs, SectionHeading, CardGrid, FaqList, CtaBand, and the existing metadata/schema helpers.
- Keep the distinction between requesting a free quote and commissioning paid engineering work explicit.
- Do not add numeric prices or guarantees without an approved offer.
