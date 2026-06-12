# `src/lib/data`

Content and navigation data that powers the site.

## Files

- `content.js`: main content model. Contains FAQs, blog posts, services, skills, location pages, URL helpers, slug maps, and relationship maps.
- `navigation.js`: header/mega-menu/footer navigation definitions, route validation helpers, and link builders.

## Common Patterns

- Content entries include slugs and are converted into maps for dynamic routes.
- URL helper functions keep route construction consistent.
- Service pages connect to skills through `serviceSkillMap`.
- Location pages connect to related services, related skills, and nearby locations.
- Blog posts include sections, FAQs, internal links, and related service slugs.

## How It Is Used

Routes import arrays and maps from `content.js`. Dynamic route `+page.js` files look up records by slug and pass the record into the Svelte page. Navigation components import grouped menu data from `navigation.js`.

## How To Extend

- Add a service to `servicePages`, then connect it through navigation, footer, related services, and sitemap output.
- Add a skill to `skillPages`, then connect it through `serviceSkillMap` or related skill arrays.
- Add a blog post with a unique slug, sections, links, and FAQs.
- Add a location with context, tasks, related services, related skills, and nearby slugs.

## Suggested Improvements

- Split this file by content type if it becomes harder to review.
- Add validation for duplicate slugs and broken internal links.
- Add schema helpers for service, FAQ, and article structured data.
