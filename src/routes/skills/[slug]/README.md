# `src/routes/skills/[slug]`

Dynamic skill detail route at `/skills/:slug/`.

## Files

- `+page.js`: loads a skill from `skillMap` and returns a 404 for unknown slugs.
- `+page.svelte`: renders a skill hero, problems solved, task list, service connections, related skills, topical links, CTA, and final FAQ.

## Common Patterns

- Skills are rendered from structured data.
- Service connection cards help turn technical capability into recognizable buying intent.
- Final FAQs clarify the practical scope of the skill.

## How It Is Used

These pages support specific technical searches such as GA4/GTM measurement integrity, performance engineering, REST API/webhook integrations, schema, Shopify Liquid, and Cloudflare/DNS/SSL.

## How To Extend

- Add new problems, tasks, connection copy, related services, related skills, and FAQs in `content.js`.
- Keep the page grounded in actual implementation work.
- Link skills to services and blog posts when the topic needs broader context.

## Suggested Improvements

- Add examples of tools used per skill.
- Add structured data or breadcrumbs.
- Validate related slug references before deployment.
