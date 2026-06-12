# `src`

Main SvelteKit application source. This folder contains the app shell, global imports, route tree, shared library code, and client/server entry templates.

## Files

- `app.css`: imports the root `styles.css` file. This keeps SvelteKit's app-level CSS entry small while the design system lives at the project root.
- `app.html`: SvelteKit HTML template. It includes `%sveltekit.head%` and `%sveltekit.body%` placeholders, favicon/PWA metadata, and global font preloads.
- `service-worker.js`: SvelteKit service worker entry. It precaches build, font, favicon, and app icon assets, avoids `/api/` requests, and runtime-caches visited pages/assets for lightweight offline support.

## Directories

- `lib/`: shared components, content data, site config, and client state.
- `routes/`: SvelteKit routes, pages, dynamic routes, and server endpoints.

## Common Patterns

- App-level assets and route code stay under `src`; public static assets stay under `static`.
- Most visual styling is global rather than component-scoped.
- Route components import shared components from `$lib`.

## How It Is Used

SvelteKit compiles this folder into the server and client bundles. Route files define URLs, `lib` files support route rendering, and `app.html` wraps every rendered page.

## How To Extend

- Add shared code under `src/lib` when it is used by multiple routes.
- Add page-specific code under `src/routes`.
- Keep global app concerns in `app.html` or `app.css`.
- Keep offline and installability behavior in `service-worker.js`; avoid caching form submissions or other non-GET API behavior.

## Suggested Improvements

- Add a small route testing setup once more server endpoints exist.
- Split global styles into documented sections if `styles.css` grows much larger.
- Consider colocated component styles only for highly isolated interactive components.
