# `src/lib/data`

Content and navigation data that powers the site.

## Files

- `content.js`: compatibility barrel that re-exports the domain modules and composes `servicePages`, `serviceMap`, and `mainPages`.
- `services.js`: core service page records and service URL helpers.
- `keyword-services.js`: keyword landing page specs and generated keyword service pages.
- `blog.js`: blog posts, practical examples, blog maps, and blog URL helpers.
- `skills.js`: technical skill pages, skill maps, skill URL helpers, and `serviceSkillMap`.
- `locations.js`: location page records, location maps, and location URL helpers.
- `faqs.js`: global FAQ entries.
- `relationships.js`: shared link builders, slug resolvers, and related/topical/contextual page helper functions.
- `llm-context.js`: generates `/llms.txt` and `/llms-full.txt` from the canonical content model, including AI-facing positioning, route maps, service summaries, skill summaries, blog summaries, local pages, and usage guardrails.
- `navigation.js`: header/mega-menu/mobile navigation definitions that use shared link builders from `relationships.js`.
- `proof.js`: proof/evidence copy for service, skill, location, and hub pages. Keeps proof claims centralized and tied to real categories of work.
- `schema.js`: structured data helpers for WebPage, ProfessionalService, Service, BlogPosting, FAQPage, and BreadcrumbList JSON-LD.

## Common Patterns

- Domain content entries include slugs and are converted into maps for dynamic routes.
- URL helper functions keep route construction consistent.
- Service pages connect to skills through `serviceSkillMap`.
- Location pages connect to related services, related skills, and nearby locations.
- Blog posts include sections, FAQs, internal links, and related service slugs.
- Proof entries use an eyebrow, heading, intro, and compact evidence items so templates can add trust without creating more card grids.
- AI/LLM context should be generated from existing content arrays so service, blog, skill, and location changes do not drift across multiple files.

## How It Is Used

Routes can keep importing arrays and maps from `content.js`, which preserves a stable public surface while the data lives in smaller domain modules. Dynamic route `+page.js` files look up records by slug and pass the record into the Svelte page. Navigation components import grouped menu data from `navigation.js`.

The `llms.txt` and `llms-full.txt` endpoints import `llm-context.js` so answer engines and AI assistants can parse the site's offer, route taxonomy, and guardrails without scraping every page first.

## How To Extend

- Add a core service in `services.js`, or a keyword/generated service in `keyword-services.js`, then connect it through navigation, related services, and sitemap output.
- Add a skill in `skills.js`, then connect it through `serviceSkillMap` or related skill arrays.
- Add a blog post in `blog.js` with a unique slug, sections, links, and FAQs.
- Add a location in `locations.js` with context, tasks, related services, related skills, and nearby slugs.
- Add proof copy in `proof.js` when a service, skill, or location page needs a stronger evidence section.
- Update `llm-context.js` when AI-facing guidance changes, such as citation preferences, rate/positioning rules, or new machine-discovery files.

## Suggested Improvements

- Add validation for duplicate slugs and broken internal links.
- Extend schema helpers when new page types need richer structured data.
