# `src/lib/components`

Reusable Svelte components for the site UI.

## Files

- `CardGrid.svelte`: renders repeated cards from array data. Supports service icons when a slug is passed in the fifth tuple slot.
- `Breadcrumbs.svelte`: reusable breadcrumb navigation rendered after page heroes, with descriptive link titles and a non-clickable current page.
- `ContextualSupport.svelte`: body-level contextual link section used to reinforce page-to-page topical relationships from audit reports without relying only on navigation/card links.
- `CtaBand.svelte`: reusable call-to-action band that links to contact and optional secondary destinations.
- `FaqList.svelte`: accessible FAQ accordion/list component used near the end of pages.
- `Footer.svelte`: global footer with CTA strip, brand block, and grouped internal links.
- `GoogleAnalytics.svelte`: global GA4 loader and interaction tracker for pageviews, links, CTAs, FAQ opens, form field focus, buttons, and scroll depth.
- `Header.svelte`: desktop mega menu and mobile navigation.
- `Hero.svelte`: page hero and contract/rate visual panel.
- `HeroParticles.svelte`: canvas-based hero background particles.
- `InternalLinkCopy.svelte`: renders natural paragraph text with inline internal links and title attributes for body-copy topical support.
- `MotionObserver.svelte`: reveal/animation observer for elements using reveal data attributes.
- `NearbyLocations.svelte`: related local pages for location detail routes.
- `ProofPanel.svelte`: compact dark-gradient proof section used on service, skill, and location pages without adding another card grid.
- `ProofReel.svelte`: lightweight homepage proof carousel using semantic HTML, CSS scroll-snap, accessible controls, and no autoplay.
- `RelatedServices.svelte`: service relationship component.
- `RelatedSkills.svelte`: skill relationship component.
- `SectionHeading.svelte`: reusable eyebrow, heading, and body copy block.
- `Seo.svelte`: page title, description, canonical, and social metadata.
- `ServiceIcon.svelte`: inline SVG icon system for service and skill cards.
- `ServiceNav.svelte`: compact related-service aside used after breadcrumbs on service detail pages.
- `TopicalLinks.svelte`: contextual internal-link panel used for SEO and topical relevance.

## Common Patterns

- Components accept simple props and rely on global classes from `styles.css`.
- Cards typically use tuple arrays: `[title, copy, href, ctaLabel, iconSlug]`.
- Related-link components use slugs from `content.js` and convert them into URLs.
- Icons are inline SVG so site colors, sizing, and card layout can control them.
- `GoogleAnalytics.svelte` mounts once in the root layout and delegates event naming/metadata to `src/lib/analytics.js`.
- Carousel-style proof should stay sparse, below the fold, and implemented without heavy slider libraries.
- Proof panels should stay evidence-focused: real categories of handled work, no invented client names, testimonials, or guaranteed outcomes.

## How It Is Used

Route files import these components to assemble pages. Most components are presentation-focused; content and routing logic usually stays in `src/lib/data` or page `load` functions.

## How To Extend

- Add new card icons in `ServiceIcon.svelte` using existing classes like `icon-line`, `icon-accent`, `icon-ring`, and `icon-label`.
- Add a new repeated section by composing `SectionHeading` and `CardGrid` before creating a new component.
- Keep navigation changes in `Header.svelte`, `Footer.svelte`, and `navigation.js` together.
- Keep analytics changes privacy-conscious: track categories, destinations, and interaction areas rather than raw private form values.

## Suggested Improvements

- Add prop documentation comments for the higher-traffic components.
- Convert tuple-based card data to object data if cards need more fields.
- Add component-level visual snapshots once the design stabilizes.
