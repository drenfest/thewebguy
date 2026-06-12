# `src/lib/data`

Content and navigation data that powers the site.

## Files

- `content.js`: main content model. Contains FAQs, blog posts, services, skills, location pages, URL helpers, slug maps, and relationship maps.
- `llm-context.js`: generates `/llms.txt` and `/llms-full.txt` from the canonical content model, including AI-facing positioning, route maps, service summaries, skill summaries, blog summaries, local pages, and usage guardrails.
- `navigation.js`: header/mega-menu/footer navigation definitions, route validation helpers, and link builders.
- `proof.js`: proof/evidence copy for service, skill, location, and hub pages. Keeps proof claims centralized and tied to real categories of work.
- `schema.js`: structured data helpers for WebPage, ProfessionalService, Service, BlogPosting, FAQPage, and BreadcrumbList JSON-LD.

## Common Patterns

- Content entries include slugs and are converted into maps for dynamic routes.
- URL helper functions keep route construction consistent.
- Service pages connect to skills through `serviceSkillMap`.
- Location pages connect to related services, related skills, and nearby locations.
- Blog posts include sections, FAQs, internal links, and related service slugs.
- Proof entries use an eyebrow, heading, intro, and compact evidence items so templates can add trust without creating more card grids.
- AI/LLM context should be generated from existing content arrays so service, blog, skill, and location changes do not drift across multiple files.

## How It Is Used

Routes import arrays and maps from `content.js`. Dynamic route `+page.js` files look up records by slug and pass the record into the Svelte page. Navigation components import grouped menu data from `navigation.js`.

The `llms.txt` and `llms-full.txt` endpoints import `llm-context.js` so answer engines and AI assistants can parse the site's offer, route taxonomy, and guardrails without scraping every page first.

## How To Extend

- Add a service to `servicePages`, then connect it through navigation, footer, related services, and sitemap output.
- Add a skill to `skillPages`, then connect it through `serviceSkillMap` or related skill arrays.
- Add a blog post with a unique slug, sections, links, and FAQs.
- Add a location with context, tasks, related services, related skills, and nearby slugs.
- Add proof copy in `proof.js` when a service, skill, or location page needs a stronger evidence section.
- Update `llm-context.js` when AI-facing guidance changes, such as citation preferences, rate/positioning rules, or new machine-discovery files.

## Suggested Improvements

- Split this file by content type if it becomes harder to review.
- Add validation for duplicate slugs and broken internal links.
- Extend schema helpers when new page types need richer structured data.
