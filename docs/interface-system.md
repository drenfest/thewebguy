# Interface System 02

The production SvelteKit interface adapts the [component library](https://thewebguy-component-library.drenfest.chatgpt.site/) and its implementation kit. The reference maps 106 specimens across 206 captured public pages. Current repository content remains the source for copy and data.

## Shared layers

`styles.css` loads the existing layout styles followed by the production interface families in `src/lib/styles/interface/`. The semantic foundation is scoped once with `twg-ui` on the body.

Production family selectors use `body.twg-ui` so component-scoped legacy declarations do not override the adopted design as Svelte loads route styles.

- `00-tokens.css`: self-hosted Inter Tight and IBM Plex Mono, brand colors, surfaces, and reusable primitives.
- `01-elements.css`: semantic HTML defaults, including native field and disclosure states.
- `10-components.css`: application shell, heroes, cards, routing tabs, proof, forms, tables, conversion sections, footer, and page navigation.
- `20-services.css`: service guides, implementation steps, related help, skills, location support, and development review patterns adapted to existing production selectors.
- `30-editorial.css`: article, research evidence, work notes, archive, and asset patterns.
- `40-responsive.css`: viewport adaptations and component integration rules.

The full reference-to-source-selector inventory is in `interface-component-map.json`. Reference specimen labels are not assumed to be Svelte component filenames.

## Component behavior

`EngineeringModel.svelte` provides the homepage layer/assembled control using the supplied SVG artwork. Reduced motion disables its transition.

`Header.svelte` retains the search worker, search ranking, analytics events, and desktop/mobile menu data. Its native search dialog supports the search button, Ctrl/Cmd+K, Escape dismissal, and focus restoration. Structured FAQ descriptions are normalized into plain text before indexing.

`Footer.svelte` keeps the existing directory data and uses five independent native disclosures. All existing destinations remain in the rendered HTML.

`PageNavigator.svelte` indexes actual visible page headings, tracks real document scroll progress, supports previous/next navigation and a section index, and refreshes after client navigation. It does not invent system activity or metrics.

Contact and inline lead forms have numbered field groups. Their existing handlers, names, state bindings, source context, anti-spam fields, validation, and delivery statuses remain in place. No demonstration form handler from the kit is used.

## Local verification

- `npm run check`
- `npm run build`
- `node --test tests/search-index.test.mjs`
- Production preview: 37 page variations reviewed at desktop, tablet, and phone widths, including contrast and interactive states.
- The isolated production candidate passed all 206 sitemap routes, 125 internal targets, metadata, JSON-LD, redirects, unknown-route 404 behavior, and 111 referenced assets. Release-review reports and screenshots are kept locally outside the release checkout.

Live inquiry delivery and production deployment are outside this local interface verification. Existing large-bundle warnings remain visible in the build output.
