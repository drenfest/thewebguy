# Ranking performance reassessment

Status: RIR-001 through RIR-005 deployed and production-verified; initial classification is **Needs more time**. RIR-006 remains held through 2026-10-30.

## Deployment record

- Deployment commit: `3fdad8bc137971aa3ce762c5a52c55565b0985c3`
- Deployment trigger time: **2026-10-01 11:00:41 PM CDT (UTC-05:00, America/Chicago)**
- Production verification time: **2026-10-01 11:02:42 PM CDT (UTC-05:00, America/Chicago)**
- Measurement timezone: America/Chicago
- Deployment day treatment: exclude 2026-10-01 from both comparison windows
- Equal pre-change window: 2026-09-02 through 2026-09-29 (28 days)
- Equal post-change window: 2026-10-02 through 2026-10-29 (28 days)
- First complete reassessment date: after Search Console contains complete data through 2026-10-29

## Page-query reassessment register

| ID | Deployed page | Primary query family | Related URL or overlap check | Metrics | Initial result |
|---|---|---|---|---|---|
| RIR-001 | `/services/white-label-wordpress-support/` | white label WordPress support; white-label WordPress development; agency fulfillment | `/services/agency-overflow/`; `/services/website-support-for-agencies/` | Impressions, clicks, CTR, average position, query mix, competing URL | Needs more time |
| RIR-002 | `/locations/janesville-wi/` | Janesville website support; Janesville technical SEO; website implementation | `/locations/`; nearby Wisconsin location pages | Impressions, clicks, CTR, average position, query mix, hub/child switching | Needs more time |
| RIR-003 | `/services/wordpress-emergency-support/` | WordPress emergency support; urgent WordPress help; broken WordPress site support | `/services/fix-broken-wordpress-site/`; `/services/wordpress-troubleshooting/` | Impressions, clicks, CTR, average position, query mix, qualified contact or chat starts when available | Needs more time |
| RIR-004 | `/services/woocommerce-support/` | WooCommerce support; WooCommerce development; WooCommerce fixes | `/services/ecommerce-support/`; `/services/woocommerce-checkout-error-fix/` | Impressions, clicks, CTR, average position, query mix, qualified inquiries when available | Needs more time |
| RIR-005 | `/locations/` | website support service areas; regional website support; local-friendly website support | `/locations/freeport-il/` and other location children | Hub and child impressions, clicks, CTR, average position, exact-query association, URL switching | Needs more time |
| RIR-006 | `/blog/something-broke-on-your-website/` | broken website troubleshooting and repair help | Existing metadata observation record | No new measurement window; preserve current experiment through 2026-10-30 | Held |

## Interpretation rules

Classify each deployed item as Improved, Declined, Inconclusive, or Needs more time only after the equal post-change window is complete. Compare page-query pairs rather than sitewide totals, review query and URL switching, and note low-impression volatility. Do not attribute sitewide aggregate movement to this package without page-level support.

Concurrent-change note: an earlier metadata deployment on 2026-10-01 remains under its own observation plan. It did not modify the five RIR page purposes in this package, but it can affect sitewide aggregate reporting. RIR-001 through RIR-005 were deployed together, so shared navigation or crawl effects should be recorded when interpreting any result.
