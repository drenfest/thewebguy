# AI Development Oversight

The dedicated hub is rendered by `+page.svelte`. The existing data-driven detail-route convention is extended in `[slug]/+page.server.js` and `[slug]/+page.svelte`.

Canonical service copy lives in `src/lib/data/ai-development.js`; navigation, footer, search, contact selection, LLM discovery, and sitemap generation consume that same data. Unknown child slugs return 404.

The canonical hub is `/ai-development-oversight/`; child slugs are `ai-code-review`, `ai-production-oversight`, `ai-website-qa`, and `ai-development-guardrails`. The same data file owns the legacy URL mapping, applied as direct 301 redirects in `src/hooks.server.js` with query strings preserved. Keep old published URLs working when changing slugs.

Use the established Hero, Breadcrumbs, SectionHeading, CardGrid, FaqList, CtaBand, Seo, and schema helpers. The Hero `panel` snippet supports the illustrative review and deliverables panels without a duplicate hero component. Styles stay in the existing numbered CSS files and are scoped under `.ai-development`.

The hub and code-review page have the deepest content. Production oversight, website QA, and guardrails have distinct deliverables, explanatory content, FAQs, and contextual quote CTAs. Keep representative scenarios labeled as illustrative until real, authorized case studies are available. A free quote is separate from paid engineering review.

Run `npm run check`, `npm run build`, `node scripts/verify-lead-flow.mjs`, and `node scripts/verify-quote-routes.mjs <local-origin>` after substantive changes. Avoid concurrent dev/build generation in the same `.svelte-kit` directory.
