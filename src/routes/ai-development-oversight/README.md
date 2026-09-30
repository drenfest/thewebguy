# AI Development Oversight

The dedicated hub is rendered by `+page.svelte`. The existing data-driven detail-route convention is extended in `[slug]/+page.server.js` and `[slug]/+page.svelte`.

Canonical service copy lives in `src/lib/data/ai-development.js`; navigation, footer, search, contact selection, LLM discovery, and sitemap generation consume that same data. Unknown child slugs return 404.

The canonical hub is `/ai-development-oversight/`; child slugs are `ai-code-review`, `ai-production-oversight`, `ai-website-qa`, and `ai-development-guardrails`. The same data file owns the legacy URL mapping, applied as direct 301 redirects in `src/hooks.server.js` with query strings preserved. Keep old published URLs working when changing slugs.

Use the established Hero, Breadcrumbs, FaqList, CtaBand, Seo, and schema helpers. The Hero `panel` snippet supports service-specific media without a duplicate hero component. Editorial styles stay in `40-cards-panels.css`, scoped under `.ai-editorial`; retain the shared checklist alignment rule used by other pages.

Compose each page around its service: hub chooser and seven-stage workflow; code diff, annotation, and review handoff; production decision gate, timeline, and responsibility table; QA visitor journey, coverage disclosures, and issue ticket; guardrail failure process, before/after structure, and response map. Avoid returning them to a repeated card-grid/checklist sequence. Service-specific contents links and native disclosures help visitors navigate the detail.

Media lives in `static/images/ai-services/`. The hub uses responsive WebP editorial artwork. Technical illustrations are small original SVGs with separate mobile compositions selected by `<picture>` at 700px. Keep meaningful alt text and illustrative labels: these examples are not client evidence. A free quote remains separate from paid engineering review. The existing report records the image-generation prompt and review evidence.

Run `npm run check`, `npm run build`, `node scripts/verify-lead-flow.mjs`, and `node scripts/verify-quote-routes.mjs <local-origin>` after substantive changes. Avoid concurrent dev/build generation in the same `.svelte-kit` directory.
