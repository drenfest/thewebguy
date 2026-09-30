# The Web Guy — Project Description, Competitive-Overlap Audit, and Demo Plan

Prepared September 8, 2026 from the current `main` branch of the local project and SurMarketing's public website.

> This document is a product and content-scope audit, not legal advice and not a conclusion about whether any particular page or contract violates an agreement. The agreement's exact definitions, governing law, customer restrictions, geographic scope, and written employer guidance control. A page can be noncompetitive while the actual engagement is competitive, and removing a page does not by itself make an engagement permissible.

## 1. Short employer-facing description

The Web Guy (`thewebguy.app`) is a pre-existing, independently developed personal website and lead-intake system for one-person hourly contract web work. Its public offer is direct technical help at $90 per hour rather than a multi-person agency package. The project began on June 11, 2026 and, as of September 8, 2026, has 50 Git commits on its primary branch.

The current site is intentionally broad. It markets website troubleshooting, WordPress support, technical SEO implementation, landing pages, page-speed work, analytics and conversion tracking, ecommerce support, API and webhook integrations, hosting/security/reliability help, internal tools, automation, front-end development, and ongoing webmaster or agency-overflow support. It also contains educational troubleshooting articles, anonymized work notes, regional service pages, and a catalog for separately built website/app assets.

The application is a custom SvelteKit/Node website, not a resale of SurMarketing software or client materials. It uses a content-first architecture to generate service, skill, article, work-note, taxonomy, and location pages from structured JavaScript records. It includes a responsive component system, structured data, sitemap and crawler endpoints, AI-discovery text endpoints, on-site search, GA4 interaction tracking, a server-side contact workflow, optional live chat, responsive image generation, and Render deployment configuration.

There is material public-offer overlap with SurMarketing's current services. The overlap is strongest in local and technical SEO, city/service-area landing pages, contractor-oriented website creation, conversion-focused web work, site speed/Core Web Vitals, analytics/reporting, ongoing optimization, agency/white-label support, and the HammerNest home-service website asset. Before continued commercial use, the proposed approach is to disclose the pre-existing project, obtain a written service boundary, pause or redirect the direct-overlap routes, and reposition permitted contract work around genuinely non-marketing technical work for non-home-service clients.

## 2. Ownership, history, and current state

- Project/domain: The Web Guy / `thewebguy.app`
- Commercial model: single-operator contract work billed at $90/hour
- Repository start: June 11, 2026 (`43576be`, “Initial The Web Guy Commit”)
- Audited revision: September 8, 2026 (`8e8a3fd`, “Update contract rate to $90/hr”)
- Repository state at audit: clean working tree on `main`, matching `origin/main`
- Repository scale: 639 tracked files, including 173 source/text/configuration files and approximately 30,863 lines across those text files
- Visual assets: 430 tracked files under `static/`, including responsive JPEG/WebP hero sets, PNG screenshots, brand marks, icons, and local fonts
- Hosting: SvelteKit Node adapter on Render, Node 20, with a custom Node HTTP entry point and immutable caching for static assets
- Application stack: Svelte 5, SvelteKit 2, Vite 6, JavaScript, CSS, Node.js, and Sharp image processing

This repository contains The Web Guy marketing application and listing content for the HammerNest and ModeMind assets. It does not, by itself, appear to contain the complete standalone HammerNest or ModeMind product repositories.

## 3. What the application does

### Public presentation and conversion flow

The site routes visitors from problem-oriented content into a direct request form. Visitors can enter through a broad homepage, a service or skill page, an educational guide, a short “Fix Note,” or a city page. Reusable cards, contextual links, breadcrumbs, comparison tables, proof panels, FAQs, and CTA bands connect those entry points to service detail and contact routes.

The contact page carries source-page context into the form, can infer the service/skill/location from the entry route, and tracks the visitor's path without sending names, email addresses, URLs, or free-text messages to GA4. The server sends requests through the Gmail API or SMTP and supports text and HTML messages. It includes a honeypot, minimum/maximum form-age checks, an in-memory per-client request limit, duplicate-submission suppression, input length limits, output escaping, and reply-to handling.

Tawk live chat is optional and loads client-side. It is configured to remain hidden while agents are offline, records operational chat events without reading or storing transcript content in the site, survives temporary network loss, and falls back to the contact form.

### Content and page-generation system

The public HTML surface currently resolves to 181 routes:

| Page family | Count | Purpose |
| --- | ---: | --- |
| Static hubs, primary pages, and legal pages | 13 | Home, service/content hubs, rate, about, FAQ, contact, privacy, and terms |
| Service detail pages | 41 | 14 broad services plus 27 search-intent variations |
| Technical skill pages | 12 | Platform, debugging, measurement, SEO, integration, and infrastructure capabilities |
| Blog articles | 18 | Long-form troubleshooting and implementation guides |
| Blog category/tag archives | 33 | Six category and 27 tag landing pages |
| Fix Note detail pages | 40 | Short anonymized examples of completed technical work |
| Fix Note category archives | 12 | Work examples grouped by service type |
| Location detail pages | 10 | Regional website-support landing pages |
| Asset detail pages | 2 | HammerNest for sale and a sold ModeMind archive |

The sitemap currently lists 178 URLs. The three Sites For Sale routes (the hub and two detail pages) are public and searchable inside the site but are not included in the sitemap.

Separate non-HTML endpoints provide `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt`, contact/FAQ submission APIs, and protected Gmail OAuth setup. A local-only Search Console reporting page and action endpoint support internal analysis rather than public marketing.

### Search, analytics, and technical SEO

- Canonical URLs and consistent trailing-slash handling
- Per-page titles/descriptions and reusable JSON-LD for organization, website, service, article, FAQ, breadcrumb, item-list, location-service, and catalog entities
- XML sitemap with route-specific last-modified data
- `robots.txt`, IndexNow verification, and AI-oriented `llms.txt`/`llms-full.txt`
- Internal search index spanning pages, services, articles, tags, notes, skills, locations, listings, and FAQs; work is delegated to a browser Web Worker
- Manual GA4 page views for SvelteKit navigation plus CTA, button, internal-link, outbound-link, FAQ, scroll-depth, form, and contact-journey events
- Responsive hero images generated in JPEG and WebP sizes by a Sharp-based build script
- PWA manifest and service worker using precache, network-first navigation, and stale-while-revalidate asset strategies
- Archived Lighthouse reports for three tested mobile pages showed 100 in Performance, Accessibility, Best Practices, and SEO on July 8, 2026; these are historical test artifacts, not a guarantee of current live scores
- Archived Search Console and GA4 exports show that the site has already been indexed and has received impressions, clicks, sessions, and contact-form conversions; they should be treated as private business records rather than included in a routine employer disclosure

### Main commercial service inventory

The 14 primary service records are:

1. WordPress support
2. Technical SEO implementation
3. Landing-page development
4. Site speed and performance cleanup
5. Website fixes
6. AI-built website cleanup
7. Agency-overflow web support
8. Ecommerce website support
9. Analytics and tracking support
10. API, webhook, form, and CRM integration help
11. Website security, hosting, and reliability support
12. Web-services automation and internal tools
13. Ongoing webmaster support
14. React and static-site help

The 27 additional service pages restate those offers for narrower searches, including WordPress repair/emergency terms, WooCommerce and Shopify support, SEO-audit implementation, technical SEO development, schema, GA4/GTM, conversion tracking, automation, and agency/white-label support.

### Portfolio, proof, and assets

The Skills section provides deeper technical capability pages. The Blog publishes educational guides. Fix Notes provide short proof-of-work records covering WordPress, security, performance, debugging, tracking, SEO, APIs, internal tools, ecommerce, and landing pages.

The Sites For Sale section describes two external assets:

- HammerNest Handyman: an in-progress, live local home-service website offered for acquisition, with service and area pages, estimate intake, CRM fields, UTM/event tracking, and local SEO architecture. This is the project's closest audience-and-deliverable match to SurMarketing.
- ModeMind: a sold, local-first private workflow app retained only as a product-depth archive. Its core use case is personal/internal workflow rather than marketing.

## 4. SurMarketing's currently advertised scope

This comparison is based on SurMarketing's public site as reviewed September 8, 2026, not on internal knowledge or an interpretation of the employment agreement.

SurMarketing currently presents itself as a local SEO agency for home-service contractors. Its public scope includes:

- Local SEO across Google Maps, organic search, and AI-driven results
- Google Business Profile work, citations/NAP consistency, reviews/reputation, keyword/market research, on-page optimization, content strategy, backlinks, and monthly performance reporting
- Technical SEO, technical audits/fixes, Core Web Vitals/site-speed optimization, and hyper-local city/service pages
- Website design and development for contractors, including branding, custom design, development, copywriting, conversion-focused layouts, galleries/case studies, review integrations, and ongoing optimization/support
- Spotlight, which turns completed jobs into Google Business Profile updates, an interactive project map, local proof, review requests, and local-search activity signals
- Home-service audiences including HVAC/plumbing/electrical, moving, roofing/gutters, landscaping/tree work, remodelers/home builders/pool builders, and pest control
- A white-label SEO route linked from the company's own site, which makes The Web Guy's agency/white-label pages especially important to review even though the public page did not expose usable text during this audit

Primary official references:

- [SurMarketing home page](https://surmarketing.io/)
- [SurMarketing services overview](https://surmarketing.io/services)
- [Website design and development](https://surmarketing.io/services/website-design-development/)
- [Spotlight](https://surmarketing.io/services/spotlight/)
- [Pricing and included SEO work](https://surmarketing.io/pricing)
- [White-label SEO route](https://surmarketing.io/white-label-seo/)

## 5. Competitive-overlap screen

### How to read the classifications

- **Direct / hold:** the page sells substantially the same outcome or targets the same type of buyer. Pause solicitation through it until the employer has given written guidance.
- **Conditional / rewrite:** the service can have a noncompetitive technical use, but the current page is broad enough to include website-development, optimization, conversion, or marketing work SurMarketing also sells.
- **Lower-overlap candidate:** more naturally separable from SurMarketing's public offer, provided the actual client, industry, outcome, and engagement are also outside the restricted scope.
- **Administrative:** privacy, terms, and purely internal tooling. These do not make the rest of the commercial offer compliant.

This is intentionally conservative. SurMarketing's “Website Design / Development” and “Ongoing Optimization & Support” language is broad, so the agreement or a written carve-out is needed before treating general web development as automatically safe.

### A. Mixed sitewide pages that require a coordinated rewrite

These pages promote or route visitors into both direct-overlap and potentially permissible work:

- `/`
- `/services/`
- `/skills/`
- `/blog/`
- `/fix-notes/`
- `/locations/`
- `/sites-for-sale/`
- `/rate/`
- `/about/`
- `/faq/`
- `/contact/`

Changing detail pages alone is not enough. The global navigation, footer, contact options, schema catalogs, internal search, sitemap, LLM files, contextual links, and contact-form service choices all repeat the current broad offer.

### B. Direct-overlap service pages — hold pending written approval

Primary services:

- `/services/technical-seo-implementation/`
- `/services/landing-pages/`
- `/services/site-speed-performance/`
- `/services/agency-overflow/`
- `/services/analytics-tracking/`
- `/services/ongoing-webmaster-support/`
- `/services/react-static-sites/`

Search-intent service pages:

- `/services/seo-audit-implementation/`
- `/services/technical-seo-developer/`
- `/services/schema-implementation-service/`
- `/services/ga4-gtm-setup-help/`
- `/services/conversion-tracking-troubleshooting/`
- `/services/agency-overflow-developer/`
- `/services/white-label-wordpress-support/`
- `/services/website-maintenance-for-agencies/`
- `/services/website-support-for-agencies/`

Why: these pages directly sell SEO implementation, ranking support, service/local/campaign pages, Core Web Vitals, measurement, web builds, ongoing optimization, or agency/white-label fulfillment.

### C. Conditional service pages — preserve only with a real scope restriction

Primary services:

- `/services/wordpress-support/`
- `/services/website-fixes/`
- `/services/ai-built-website-cleanup/`
- `/services/ecommerce-support/`
- `/services/api-integrations/`
- `/services/security-hosting-reliability/`
- `/services/automation-internal-tools/`

All 18 remaining narrow service pages:

- `/services/wordpress-help/`
- `/services/wordpress-website-support/`
- `/services/wordpress-maintenance/`
- `/services/wordpress-troubleshooting/`
- `/services/fix-wordpress-issue/`
- `/services/fix-broken-wordpress-site/`
- `/services/wordpress-emergency-support/`
- `/services/wordpress-white-screen-of-death-fix/`
- `/services/woocommerce-checkout-error-fix/`
- `/services/contact-form-not-working-wordpress/`
- `/services/elementor-layout-broken/`
- `/services/wordpress-plugin-conflict-help/`
- `/services/wordpress-developer-for-small-tasks/`
- `/services/hourly-wordpress-developer/`
- `/services/website-integration-help/`
- `/services/web-services-automation/`
- `/services/shopify-liquid-support/`
- `/services/woocommerce-support/`

Why: break/fix, security, APIs, internal tools, and ecommerce operations can be distinguished from local marketing, but the current pages often mention SEO, lead generation, tracking, landing pages, agencies, or ongoing website support. A safe version would define both allowed outcomes and excluded client/work categories.

### D. Direct-overlap skill pages

- `/skills/wordpress-theme-development/`
- `/skills/performance-engineering/`
- `/skills/ga4-gtm-measurement-integrity/`
- `/skills/programmatic-seo/`
- `/skills/schema-structured-data/`
- `/skills/crawl-analysis-internal-linking/`

Conditional skill pages:

- `/skills/shopify-plus-liquid/`
- `/skills/wordpress-plugin-development/`
- `/skills/production-debugging/`
- `/skills/rest-api-webhook-integrations/`
- `/skills/google-merchant-center-product-data/`
- `/skills/cloudflare-dns-ssl/`

The latter group is a plausible base for a non-marketing technical offer, but only if it is no longer promoted as a path to SEO, local visibility, conversion optimization, or contractor lead generation.

### E. Direct-overlap blog pages

- `/blog/seo-audit-done-now-implement-it/`
- `/blog/need-a-page-live-fast/`
- `/blog/website-data-systems-not-connecting/`
- `/blog/tracking-scripts-pixels-broken/`
- `/blog/gtm-form-tracking-ga4/`
- `/blog/google-ads-conversion-tracking-not-working/`
- `/blog/topological-relevance-vector-seo/`

The remaining 11 troubleshooting articles are lower-overlap as educational material, but they currently sit inside a commercial funnel with paid-service CTAs and related links. Keeping an article while removing or narrowing solicitation is materially different from continuing to sell the service through it.

Direct-overlap blog taxonomies include, at minimum:

- `/blog/category/seo-pages-ai/`
- `/blog/category/forms-tracking-data/`
- `/blog/tag/technical-seo/`
- `/blog/tag/seo-audit/`
- `/blog/tag/internal-links/`
- `/blog/tag/crawl-analysis/`
- `/blog/tag/landing-pages/`
- `/blog/tag/ga4-gtm/`
- `/blog/tag/conversion-tracking/`
- `/blog/tag/analytics-tracking/`
- `/blog/tag/site-speed/`
- `/blog/tag/automation/`

Every category/tag page should inherit the strictest treatment of the commercial posts it aggregates.

### F. Direct-overlap Fix Notes

These proof pages demonstrate deliverables that SurMarketing publicly sells or that are very close to its website/Spotlight/local-SEO workflow:

- `/fix-notes/built-admin-only-wordpress-crm-estimate-intake/`
- `/fix-notes/rebuilt-wordpress-site-from-crawl-into-reusable-blocks/`
- `/fix-notes/optimized-shopify-theme-page-speed-core-web-vitals/`
- `/fix-notes/added-floating-click-to-call-review-badge-support/`
- `/fix-notes/built-static-site-lead-handler-contact-popup-flow/`
- `/fix-notes/updated-static-promotion-page-chat-script/`
- `/fix-notes/repaired-custom-permalinks-location-based-service-pages/`
- `/fix-notes/reviewed-builder-based-site-performance-design-constraints/`
- `/fix-notes/prepared-bulk-location-page-imports-elementor-templates/`
- `/fix-notes/uploaded-structured-blog-posts-schema-output/`
- `/fix-notes/added-location-specific-proof-content-service-pages/`
- `/fix-notes/cleaned-up-wordpress-assets-slowing-down-service-page/`
- `/fix-notes/cleaned-up-crawl-paths-google-slow-to-index/`
- `/fix-notes/improved-internal-links-service-pages-supporting-content/`
- `/fix-notes/fixed-lead-tracking-contact-form-hard-to-measure/`
- `/fix-notes/cleaned-up-mobile-page-too-many-competing-sections/`

Associated category archives requiring a hold or rewrite:

- `/fix-notes/category/page-speed/`
- `/fix-notes/category/technical-seo/`
- `/fix-notes/category/tracking-analytics/`
- `/fix-notes/category/landing-pages/`

The other Fix Notes are better candidates for a portfolio-only archive, especially security recovery, production debugging, API data repair, and internal-tool examples. They should not retain related-service CTAs that put them back into a prohibited sales funnel.

### G. All location pages — direct local-search overlap

- `/locations/freeport-il/`
- `/locations/rockford-il/`
- `/locations/monroe-wi/`
- `/locations/beloit-wi/`
- `/locations/janesville-wi/`
- `/locations/dixon-il/`
- `/locations/sterling-il/`
- `/locations/galena-il/`
- `/locations/dubuque-ia/`
- `/locations/madison-wi/`

These are city landing pages selling WordPress, technical SEO, landing pages, tracking, ecommerce, and ongoing web support. SurMarketing expressly advertises hyper-local service-area pages and serves home-service brands nationally, so different named cities should not be assumed to create a safe boundary.

### H. Asset listings

- **Direct / hold:** `/sites-for-sale/hammernest-handyman/`. It targets a handyman/home-service market and includes local SEO architecture, service/area pages, lead intake, CRM tracking, conversion events, and ongoing expansion—the closest match in the project to SurMarketing's audience and website/Spotlight outcomes.
- **Lower overlap:** `/sites-for-sale/modemind/`. It is a sold private workflow-app archive. Keep it noncommercial and do not offer to clone the sold product.

### I. Lower-overlap contract categories worth proposing as a carve-out

Subject to the agreement and written employer approval, the clearest separable categories are:

- Emergency production debugging and restoration of existing applications
- Malware cleanup, backups, account review, security hardening, DNS, SSL, hosting, and Cloudflare incident work
- API/webhook data repair and non-marketing system integrations
- Private internal dashboards, workflow utilities, import/export tools, and operational automation that do not publish marketing content or manage local-search activity
- Ecommerce platform repair limited to store operations, templates, checkout failures, feed/data integrity, and integrations—not organic growth, paid acquisition, content strategy, or local SEO
- Accessibility/remediation, reliability, and software maintenance for clients outside SurMarketing's protected customer category
- Educational or historical portfolio material with no CTA for restricted services

Client and outcome restrictions matter. “API integration” for an accounting workflow may be separable; an API that automates Google Business Profile posts for a roofing company is functionally close to Spotlight and should be excluded.

## 6. Recommended disclosure and remediation plan

### Phase 0 — preserve an honest pre-employment record

1. Preserve the current Git history and create a dated tag or archival branch before edits.
2. Save the current public sitemap and representative screenshots.
3. Record the domain, existing assets, pre-existing source code, and current public offers in a simple pre-existing-IP schedule.
4. Do not rewrite history or imply that competitive pages never existed. The goal is to stop or narrow future solicitation, not conceal the prior project.

### Phase 1 — request a written boundary

Provide the short description in section 1 plus these explicit proposed exclusions:

- No local SEO, SEO campaign management, Google Business Profile/Maps work, citations, backlinks, reviews/reputation marketing, SEO content strategy, or ranking reporting
- No new websites, service-area pages, lead-generation pages, or conversion programs for home-service contractors
- No Spotlight-like job check-in, project-map, automated GBP-posting, review-request, or neighborhood-proof product
- No agency/white-label SEO fulfillment
- No work for SurMarketing clients, prospects, or protected customer categories; no use of employer time, systems, data, templates, methods, leads, or confidential information

Ask the employer to confirm the affirmative allowed list as well—ideally specific services, client categories, and examples—not merely “anything noncompetitive.” Have counsel review the final wording if the restriction is important to income or employment.

### Phase 2 — choose a site mode

Recommended order of safety:

1. **Temporary portfolio hold:** disable new-work solicitation and display a concise review notice while written scope is pending. Preserve the content privately or as a noncommercial archive.
2. **Technical carve-out site:** keep lead intake only for the written allowed list. Retire SEO/local/contractor marketing pages and add industry/outcome screening.
3. **Minimal page removal:** retire only the most obvious pages while leaving broad website-development and WordPress offers. This is the weakest option because SurMarketing publicly sells broad website design/development and ongoing support.

### Phase 3 — implement the technical carve-out

1. Replace sitewide positioning with a precise allowed statement, such as: “Technical rescue, application reliability, security recovery, and internal web systems for organizations outside the home-service marketing sector.” Use only after the employer confirms that scope.
2. Remove restricted services from navigation, footer, homepage cards, rate/about/FAQ copy, search index, schema catalogs, LLM files, sitemap, related-content blocks, and contact choices.
3. Retire direct-overlap pages with a deliberate HTTP/SEO policy:
   - Use `410 Gone` for an offer that is permanently discontinued with no legitimate replacement.
   - Use a `301` only when there is a genuinely equivalent permitted replacement.
   - Do not rely on `noindex` while continuing to solicit the work; invisibility to Google is not a business-scope restriction.
4. Convert useful articles/Fix Notes to an education or historical-portfolio mode by removing paid CTAs, service schema, offer language, and links back to restricted intake routes.
5. Place HammerNest in a nonpublic archive or suspend the sale. Preserve ownership and history without continuing to market it to a home-service buyer.
6. Add contact-form eligibility fields for industry and desired outcome. Reject or refer requests involving restricted industries/services before access or scoping begins.
7. Add a plain business-scope notice: “Not accepting SEO, advertising, local-search, contractor-marketing, or lead-generation website engagements.” This should describe operations, not claim legal compliance.
8. Add one source-of-truth restriction configuration so navigation, search, sitemap, structured data, LLM endpoints, related links, and contact options cannot drift apart.
9. Add automated route/content tests that fail when retired services reappear in commercial surfaces.
10. Rebuild, run Svelte checks, verify redirects/410s, crawl the result, inspect schema and sitemap output, and submit removals/changes through normal search-engine channels.

### Phase 4 — operating controls after launch

- Use a one-page intake checklist covering client industry, requested outcome, current vendor/employer relationship, SEO/marketing component, and potential conflict.
- Keep separate equipment, accounts, credentials, files, time records, and invoicing for permitted contract work.
- Do not accept a project first and decide whether it is competitive later.
- Recheck SurMarketing's published scope and the written agreement when services change; public website wording alone does not amend the agreement.
- Keep a dated log of employer approvals and declined leads.

## 7. Suggested employer demo

A concise review meeting can follow this sequence:

1. **Origin and ownership (2 minutes):** show the repository's June 11, 2026 start date, current domain, and that it predates employment.
2. **Current project map (3 minutes):** explain the SvelteKit site, structured content system, 181-page surface, contact workflow, and asset catalog.
3. **Overlap disclosure (5 minutes):** show the exact direct-overlap route groups above, including all location pages and HammerNest.
4. **Proposed boundaries (5 minutes):** demonstrate the difference between prohibited marketing work and proposed technical carve-out examples.
5. **Proposed site behavior (5 minutes):** show the new homepage positioning, retired-route behavior, restricted contact form, cleaned sitemap/search/schema, and portfolio-only content.
6. **Written decision (remainder):** capture approved services, prohibited services, clients/industries, edge cases, referral rules, and the effective date.

Useful demo scenarios:

- “Local SEO for a roofing company” → unavailable/rejected.
- “New service-area website for an HVAC company” → unavailable/rejected.
- “Automate GBP posts from field check-ins” → unavailable/rejected as Spotlight-adjacent.
- “Recover a compromised nonprofit WordPress installation” → proposed permitted category, subject to approval.
- “Repair a webhook between an internal inventory tool and accounting system” → proposed permitted category, subject to approval.
- “Fix a Shopify checkout bug for a retailer” → conditional; confirm whether general web/ecommerce development is inside the restriction.

## 8. What to share—and what not to share by default

Share this document or a shortened disclosure derived from it. Do not send the entire working directory merely to explain the project.

Exclude unless specifically required and safely reviewed:

- `.env.local` and all credentials/tokens
- Gmail OAuth setup values, Render API keys, contact mailbox configuration, and private recipient addresses
- Raw Search Console/GA4 exports and search-history files
- Client-identifying screenshots, attachments, work notes, invoices, or artifacts
- Any separate HammerNest/ModeMind source repository or buyer information not contained in this project
- Unrelated binaries or local tooling under reports/tools

The disclosure should be transparent about the commercial scope and pre-existing history without exposing secrets, analytics, customer information, or unrelated intellectual property.

## 9. Decision needed before editing

The next implementation should be based on one of two written outcomes:

- **Employer approves a defined technical carve-out:** rebuild The Web Guy around the allowed categories and retire the direct-overlap routes.
- **Employer does not approve or the agreement remains ambiguous:** keep the project as a noncommercial private/portfolio archive and pause lead intake until counsel resolves the boundary.

Editing can then be performed as a separate, reviewable change set without deleting the pre-employment history.
