# Local ranking implementation — owner approval package

Review date: 2026-10-01 (America/Chicago)
Implementation status: local only; owner visual approval pending
Deployment status: not authorized and not performed
Held item: RIR-006 / RR-005 through 2026-10-30

## Verification summary

- `npm run check`: PASS — 0 errors and 0 warnings.
- `npm run build`: PASS.
- Targeted route checks: PASS — all five changed pages returned HTTP 200 with the expected title, meta description, H1, canonical, structured data, and internal links.
- Freeport child regression check: PASS — `/locations/freeport-il/` retained its dedicated title, meta description, H1, canonical, content, and intent.
- Protected experiments: PASS — `/services/wordpress-plugin-conflict-help/`, `/services/api-integrations/`, and `/blog/something-broke-on-your-website/` were not modified.
- Console audit: PASS — Lighthouse `errors-in-console` passed for every affected page.
- Indexability: PASS — canonical URLs are present and no page-level `noindex` directive is emitted.
- Supporting asset: **NONE NEEDED**. Existing hero art, proof panels, cards, tables, and link components explain the changes without adding page weight or a new visual system.

## Performance comparison

Lighthouse used the same local development server and default mobile profile before and after. Scores are inherently noisy; CLS was 0 and Accessibility, Best Practices, and SEO scored 100 for every page in both sets.

| RIR | Performance | LCP | TBT | Transfer change | Review |
|---|---:|---:|---:|---:|---|
| RIR-001 | 77 → 80 | 3,399 ms → 3,275 ms | 374 ms → 256 ms | +33.5 KB | No regression. |
| RIR-002 | 86 → 82 median | 3,274 ms → 3,655 ms median | 163 ms → 193 ms median | +49.7 KB | Investigated: two confirming after runs scored 82, one slow outlier scored 65. No JS, image, CSS, or hydration was added; CLS stayed 0 and the transfer increase is under 1% of the existing page. Record as local Lighthouse variance plus the shared text-data increase, not a visual blocker. |
| RIR-003 | 83 → 84 | 3,276 ms → 3,198 ms | 157 ms → 162 ms | +49.3 KB | No meaningful regression. |
| RIR-004 | 82 → 83 | 3,272 ms → 3,272 ms | 216 ms → 156 ms | +49.2 KB | No regression. |
| RIR-005 | 67 → 86 | 6,200 ms → 3,271 ms | 130 ms → 166 ms | +48.3 KB | Improvement illustrates local-run variance; no new asset or script was added. |

## RIR-001 — White-label WordPress Development & Support

- URL: `/services/white-label-wordpress-support/`
- Query family: white-label WordPress support, development, and agency fulfillment
- Approved reason: the former page read mainly as updates/fixes support even though agencies can hand off complete technical web execution.
- Source: `src/lib/data/keyword-services.js`

### Exact copy replaced

- Title: `White Label WordPress Support | The Web Guy` → `White Label WordPress Development & Support | The Web Guy`
- H1: `White Label WordPress Support` → `White Label WordPress Development and Support`
- Meta description: `White-label friendly WordPress support for agencies needing client-site fixes, updates, page edits, plugin troubleshooting, SEO implementation, and QA cleanup.` → `White-label WordPress development and support for agencies needing full builds, themes, plugins, WooCommerce, migrations, integrations, SEO implementation, fixes, and ongoing technical execution.`
- Hero introduction: `Complete behind-the-scenes WordPress execution for agencies: full site builds, themes, plugins, WooCommerce, migrations, landing pages, integrations, fixes, SEO implementation, tracking, performance, and production QA. Work can be one-off or ongoing and delivered under the agency's client-facing brand.`
- Audience copy: `This page is for agencies that own the strategy and client relationship but need a technical delivery partner to build, extend, repair, migrate, optimize, or support WordPress sites. The work can stay fully behind the scenes, with agency-branded reports and deliverables when that is part of the handoff.`

### Copy added and placement

Immediately after the existing proof and planning table, the existing section sequence now contains:

1. **How agencies use white-label WordPress development** — full builds, themes, custom functionality, plugins, WooCommerce, migrations, launches, SEO, tracking, integrations, performance, QA, and one-off/ongoing work organized around agency handoff.
2. **How white-label delivery stays agency-ready** — agency-owned communication, agency-branded reports/deliverables, one-off or ongoing work, review-ready handoff, the technical-execution boundary, and realistic capacity/timing.
3. The existing related-path and handoff sections remain in place.

Links changed: none; existing agency, WordPress, maintenance, and technical SEO routes remain.
Assets added: none.

### Screenshots

| Desktop before | Desktop after |
|---|---|
| ![RIR-001 desktop before](S:/projects/xampp/htdocs/thewebguy/reports/ranking-implementation-review/before/desktop/rir-001-white-label.png) | ![RIR-001 desktop after](S:/projects/xampp/htdocs/thewebguy/reports/ranking-implementation-review/after/desktop/rir-001-white-label.png) |

| Mobile before | Mobile after |
|---|---|
| ![RIR-001 mobile before](S:/projects/xampp/htdocs/thewebguy/reports/ranking-implementation-review/before/mobile/rir-001-white-label.png) | ![RIR-001 mobile after](S:/projects/xampp/htdocs/thewebguy/reports/ranking-implementation-review/after/mobile/rir-001-white-label.png) |

Five-gate review: Brand + UX **PASS**; Content + query fit **PASS**; Placement + flow **PASS**; Facts + scope **PASS**; Performance + mobile **PASS**.
Overall: **PASS — OWNER DECISION**.

## RIR-002 — Janesville technical/on-site implementation

- URL: `/locations/janesville-wi/`
- Query family: Janesville website support and technical/on-site SEO implementation
- Approved reason: define the website-side implementation offer without implying off-site local marketing or a physical Janesville office.
- Source: `src/lib/data/locations.js`

### Exact copy added and placement

The title, meta description, and generated H1 are unchanged. The first two Janesville context paragraphs remain, with remote delivery made explicit. A third Janesville-specific paragraph now appears in the first content section:

> Website-side SEO work can include metadata, headings and page structure, schema, internal linking, crawl and indexability fixes, redirects, service-area or local landing pages, UI/UX, tracking, performance, and implementation from a supplied audit or strategy. The standard service stays focused on implementation rather than Google Business Profile management, citations or listings, backlink campaigns, off-site SEO, or a full local-marketing retainer.

The adjacent task list now exactly covers technical/on-page recommendations; metadata, headings, schema, internal links, redirects, and canonicals; service-area/local pages; crawl/indexability, WordPress, layout, and performance; UI/UX, forms, GA4/GTM, and conversion tracking; ecommerce/product data/feeds; supplied audits and agency task lists; and one-time or ongoing support.

Links changed: none.
Assets added: none.

### Screenshots

| Desktop before | Desktop after |
|---|---|
| ![RIR-002 desktop before](S:/projects/xampp/htdocs/thewebguy/reports/ranking-implementation-review/before/desktop/rir-002-janesville.png) | ![RIR-002 desktop after](S:/projects/xampp/htdocs/thewebguy/reports/ranking-implementation-review/after/desktop/rir-002-janesville.png) |

| Mobile before | Mobile after |
|---|---|
| ![RIR-002 mobile before](S:/projects/xampp/htdocs/thewebguy/reports/ranking-implementation-review/before/mobile/rir-002-janesville.png) | ![RIR-002 mobile after](S:/projects/xampp/htdocs/thewebguy/reports/ranking-implementation-review/after/mobile/rir-002-janesville.png) |

Five-gate review: Brand + UX **PASS**; Content + query fit **PASS**; Placement + flow **PASS**; Facts + scope **PASS**; Performance + mobile **PASS WITH RECORDED LIGHTHOUSE VARIANCE**.
Overall: **PASS — OWNER DECISION**.

## RIR-003 — WordPress emergency operating facts

- URL: `/services/wordpress-emergency-support/`
- Query family: WordPress emergency support, urgent WordPress help, and broken WordPress site support
- Approved reason: emergency visitors needed immediate qualification, intake, response-time, and promise-boundary information.
- Source: `src/lib/data/keyword-services.js`

### Exact copy added and placement

The title, meta description, and H1 are unchanged. The new hero introduction makes the core facts visible before the first scroll:

> 24/7 emergency intake for WordPress outages, white screens, broken checkout, failed forms, update failures, and serious production bugs. Emergency inquiries receive an initial response target within two hours through the contact form or live chat; that response target is not a two-hour repair guarantee.

The first content block defines the audience and what qualifies. The next page sections are:

1. **WordPress problems that qualify for emergency intake** — outages, white screens, broken pages/forms/checkout, conflicts, update or PHP/code/deployment failures, serious bugs, and security/reliability incidents.
2. **Emergency intake and response expectations** — 24/7 intake, two-hour emergency response target, Monday–Friday 9:00 AM–7:00 PM Central standard hours, 24-hour general response target, response-versus-resolution distinction, and repair-path dependencies.
3. **Related urgent WordPress support paths** — the existing relevant service routes, rewritten for emergency triage.
4. **How to request emergency WordPress help** — contact form/live-chat handoff details without requesting passwords in the first message.

Links changed: existing related-service links are retained in the new section structure.
Assets added: none.

### Screenshots

| Desktop before | Desktop after |
|---|---|
| ![RIR-003 desktop before](S:/projects/xampp/htdocs/thewebguy/reports/ranking-implementation-review/before/desktop/rir-003-emergency.png) | ![RIR-003 desktop after](S:/projects/xampp/htdocs/thewebguy/reports/ranking-implementation-review/after/desktop/rir-003-emergency.png) |

| Mobile before | Mobile after |
|---|---|
| ![RIR-003 mobile before](S:/projects/xampp/htdocs/thewebguy/reports/ranking-implementation-review/before/mobile/rir-003-emergency.png) | ![RIR-003 mobile after](S:/projects/xampp/htdocs/thewebguy/reports/ranking-implementation-review/after/mobile/rir-003-emergency.png) |

Five-gate review: Brand + UX **PASS**; Content + query fit **PASS**; Placement + flow **PASS**; Facts + scope **PASS**; Performance + mobile **PASS**.
Overall: **PASS — OWNER DECISION**.

## RIR-004 — WooCommerce flexible engagement model

- URL: `/services/woocommerce-support/`
- Query family: WooCommerce support, development, fixes, and ongoing help
- Approved reason: the former generic support copy did not communicate full store development or one-off, recurring, ongoing, and larger project models.
- Source: `src/lib/data/keyword-services.js`

### Exact copy added and placement

The title, meta description, and H1 are unchanged. The new hero introduction reads:

> Technical WooCommerce help for one-off fixes, recurring support and development, or larger store projects. The work can cover complete store builds and improvements, checkout and cart, products, themes, plugins, custom functionality, integrations, tracking, performance, technical SEO, and production fixes.

The first content block now identifies store owners, agencies, and ecommerce teams and asks whether the need is a single fix, an ongoing workstream, or a larger build. The next page sections are:

1. **Ways to engage for WooCommerce work** — one-off fixes, recurring support/development, larger builds/migrations/improvements, and project-based maintenance/updates.
2. **WooCommerce technical work across the store** — storefront/product experience; cart/checkout/orders; plugins/custom functionality; feeds/APIs/integrations; measurement/search implementation; and performance/production reliability.
3. **Related WooCommerce support paths** — ecommerce, checkout-error, WordPress, and conversion-tracking routes.
4. **How to hand off WooCommerce work** — store path, expected/actual behavior, examples, platform context, and engagement model.

Links changed: existing related-service routes are retained in the new section structure.
Assets added: none.

### Screenshots

| Desktop before | Desktop after |
|---|---|
| ![RIR-004 desktop before](S:/projects/xampp/htdocs/thewebguy/reports/ranking-implementation-review/before/desktop/rir-004-woocommerce.png) | ![RIR-004 desktop after](S:/projects/xampp/htdocs/thewebguy/reports/ranking-implementation-review/after/desktop/rir-004-woocommerce.png) |

| Mobile before | Mobile after |
|---|---|
| ![RIR-004 mobile before](S:/projects/xampp/htdocs/thewebguy/reports/ranking-implementation-review/before/mobile/rir-004-woocommerce.png) | ![RIR-004 mobile after](S:/projects/xampp/htdocs/thewebguy/reports/ranking-implementation-review/after/mobile/rir-004-woocommerce.png) |

Five-gate review: Brand + UX **PASS**; Content + query fit **PASS**; Placement + flow **PASS**; Facts + scope **PASS**; Performance + mobile **PASS**.
Overall: **PASS — OWNER DECISION**.

## RIR-005 — regional Locations hub / Freeport separation

- URL: `/locations/`; regression target `/locations/freeport-il/`
- Query family: website support service areas, regional/local-friendly website support, and Freeport website support
- Approved reason: the general hub led with Freeport even though a dedicated Freeport child already serves that intent.
- Sources: `src/routes/locations/+page.svelte`, `src/lib/data/navigation.js`, `src/lib/data/relationships.js`, `src/lib/data/search-index.js`

### Exact copy replaced

- Title: `Local Website Support Near Freeport, IL | The Web Guy` → `Website Support Service Areas | The Web Guy`
- Meta description: `Explore local-friendly, remote website support across Illinois, Wisconsin, Iowa, and other service areas for WordPress, technical SEO, tracking, ecommerce, and site fixes.`
- H1: `Local Website Support Near Freeport, IL` → `Local-Friendly Website Support by City and Region`
- Hero introduction: `The Web Guy provides local-friendly, remote website support across the listed service areas. Choose the city or region that fits your business, then route the request into the WordPress, website-fix, technical SEO, tracking, ecommerce, or ongoing support service that matches the work.`
- First-section eyebrow: `Freeport-area website support` → `Regional website support`
- First-section heading: `Start with the city or region, then route the website work`
- City-page introduction: `Use these city pages to choose the market that fits your business, then connect the request to the website service that matches the actual work.`

The navigation callout, location relationship label, and search-index entry now describe the general city/region hub. Freeport remains in the city list, Illinois section, table, navigation, and direct child link. The dedicated Freeport page was not rewritten.

Links changed: labels/descriptions only; no destination URL changed.
Assets added: none.

### Screenshots

| Desktop before | Desktop after |
|---|---|
| ![RIR-005 desktop before](S:/projects/xampp/htdocs/thewebguy/reports/ranking-implementation-review/before/desktop/rir-005-locations.png) | ![RIR-005 desktop after](S:/projects/xampp/htdocs/thewebguy/reports/ranking-implementation-review/after/desktop/rir-005-locations.png) |

| Mobile before | Mobile after |
|---|---|
| ![RIR-005 mobile before](S:/projects/xampp/htdocs/thewebguy/reports/ranking-implementation-review/before/mobile/rir-005-locations.png) | ![RIR-005 mobile after](S:/projects/xampp/htdocs/thewebguy/reports/ranking-implementation-review/after/mobile/rir-005-locations.png) |

Five-gate review: Brand + UX **PASS**; Content + query fit **PASS**; Placement + flow **PASS**; Facts + scope **PASS**; Performance + mobile **PASS**.
Overall: **PASS — OWNER DECISION**.

## Owner decision required

No remaining implementation revision is required by the five-gate review. The Janesville Lighthouse variance is recorded above for transparency and does not correspond to a new asset, script, layout shift, or console error.

Please approve the local visual result, request a specific revision, or hold a named RIR item. Do not deploy from this package until explicit owner visual approval is recorded.
