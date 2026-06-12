# `src/routes/services/[slug]`

Dynamic service detail route at `/services/:slug/`.

## Files

- `+page.js`: looks up the service in `serviceMap` and returns a 404 for unknown slugs.
- `+page.svelte`: renders the service hero, service nav, audience section, detail sections, no-overpromise section, related services, related skills, topical links, CTA, and final FAQ.

## Common Patterns

- Service pages are data-driven from `content.js`.
- Related services and skills are resolved from slug arrays.
- Section effects rotate through shared visual variants.
- Each service page repeats the hourly rate in the body but keeps CTA copy task-focused.

## How It Is Used

This route creates high-intent landing pages for specific services like WordPress support, technical SEO implementation, website fixes, analytics tracking, and ecommerce support.

## How To Extend

- Add fields to the service object only if multiple services need the same pattern.
- Add related services and skills to improve internal linking.
- Keep FAQ content practical and specific to the service.

## Suggested Improvements

- Add service-specific schema.
- Add optional proof/result blocks when real case examples are ready.
- Validate that every related slug resolves before build.
