# `src/routes/services`

Services index and dynamic service-detail route namespace.

## Files

- `+page.svelte`: service hub at `/services/`. Lists all services, pain-based chooser cards, broken-site posts, agency/business-owner positioning, and ecommerce/platform support.

## Directories

- `[slug]/`: dynamic service detail pages.

## Common Patterns

- Service cards are generated from `servicePages` in `content.js`.
- Pain cards route users to relevant blog posts when the user knows the symptom before the service name.
- Service CTAs focus on sending the problem rather than overusing rate language.
- FAQs are last on detail pages.

## How It Is Used

The services index is the primary commercial hub. It helps visitors identify the kind of work they need and routes them to a specific service or article.

## How To Extend

- Add new service entries in `content.js`.
- Add the service to header/footer navigation when it should be public navigation.
- Add a matching `ServiceIcon` branch if it appears in cards.

## Suggested Improvements

- Add service group filters if the service list gets longer.
- Add richer examples once real project samples can be shown.
