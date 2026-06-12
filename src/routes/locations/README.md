# `src/routes/locations`

Location index and dynamic local-service route namespace.

## Files

- `+page.svelte`: service-area hub at `/locations/`. Groups local pages by region and positions the work as local-friendly but remote-ready.

## Directories

- `[slug]/`: dynamic local landing pages.

## Common Patterns

- Locations are generated from `locationPages` in `content.js`.
- Region sections are derived from unique `region` values.
- Location cards use service-style icons and link to detail pages.

## How It Is Used

The location hub supports local search intent around Freeport, IL and nearby areas while still making remote support clear.

## How To Extend

- Add a location record in `content.js`.
- Give it region, context, tasks, related services, related skills, and nearby locations.
- Confirm the new location appears in sitemap and footer/navigation if desired.

## Suggested Improvements

- Add unique local proof only when real/local examples are available.
- Add a map or region grouping only if it helps users scan faster.
