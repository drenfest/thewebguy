# `src/routes/locations/[slug]`

Dynamic local service page route at `/locations/:slug/`.

## Files

- `+page.js`: loads a location from `locationMap` and returns a 404 for unknown slugs.
- `+page.svelte`: renders local hero copy, local context, common tasks, relevant services, related skills, nearby locations, topical links, CTA, and final FAQ.

## Common Patterns

- Local pages share the same layout while using city-specific content.
- Related services and skills keep each location connected to the broader service graph.
- FAQs include location-specific questions generated from the location record.

## How It Is Used

These pages target local intent for nearby cities while keeping the work remote-friendly and hourly.

## How To Extend

- Add a new location record with unique city context.
- Avoid doorway-page copy; include practical local business needs and relevant tasks.
- Keep nearby location links accurate.

## Suggested Improvements

- Add local business category examples where they are genuinely useful.
- Add structured local business/service schema if SEO strategy calls for it.
- Validate nearby slugs before build.
