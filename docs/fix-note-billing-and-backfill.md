# Historical charges and anonymized fix-note backfill

Updated October 21, 2026.

The fix-note library now includes historical billed amounts matched to itemized work. The archive grew from 59 to 163 notes: 43 existing notes gained matched prices, and 104 additional notes describe previously unrepresented work. There are 147 priced notes and 16 older notes without a reliable itemized match. Missing amounts are explicitly left unverified.

## Accounting scope

- Reviewed nine invoice files containing 167 line items.
- Assigned 166 labor entries once each, with combined entries clearly identified as bundled work.
- Excluded one hosting reimbursement from technical-fix pricing.
- Used the recorded line amounts, preserving cents; did not substitute current rates, estimate missing charges, divide bundle totals into invented task prices, or infer payment collection.
- The historical charges are examples of the described scope, not current quotes.
- Some bundles cover separate sites or several support tasks. Their scope text discloses this.

The private source-to-note reconciliation and supporting invoice details are in an ignored local directory. They are not imported into the application or included in public note objects. Public billing fields are restricted to amount in cents, currency, scope and itemized/bundle classification.

## Editorial and privacy treatment

The backfill uses generic technical descriptions. It omits client names, domains, personal contact details, account and submission IDs, private paths, invoice numbers, proprietary article titles, branded product names and client screenshots. Client-industry wording and distinctive counts/measurement fingerprints were generalized in the affected older notes. New note dates are publication dates, not disclosed work dates.

Draft themes, credential-blocked forwarding, unmerged publication requests, investigation awaiting access, provider-subscription requirements and pending external approvals remain explicitly pending. The notes do not turn a completed implementation into a claim of verified live publication or delivery.

## Implementation

- `src/lib/data/fix-note-billing.js`: public historical amounts and currency formatting.
- `src/lib/data/additional-fix-notes.js`: anonymized backfill content.
- `src/lib/data/fix-notes.js`: attaches public billing, includes the additional notes and resolves retired service aliases.
- Fix-note details show a scoped **What I charged** section. Cards show the billed amount and identify bundles.
- The archive explains historical pricing and publication dates. The full text discovery endpoint includes the same charge scope and limitations.
- Publication/update registry and sitemap dates include the new and changed notes.

## Verification

The pre-edit library and representative desktop/mobile page captures were preserved locally before the public source edits. The baseline had no charge section; the candidate displays the matched amount with its scope. The actual local invoice reconciliation balances every included labor line to one public amount.

Executed checks include the focused billing/data tests, Svelte diagnostics, a credential-free verification build, HTTP checks of every fix-note route, canonical/H1/charge/quote checks, sitemap and full-discovery inclusion, and responsive browser checks of priced, bundled, pending and unmatched examples at 360, 390, 768 and 1440 pixels. The archive is checked at those widths, and the quote navigation is exercised. Scoped axe checks cover the new price panel; they do not certify the entire site.

The first private-provenance regex incorrectly matched the `s:/` portion of `https://` on every page. Inspection confirmed the false positive. The corrected matcher requires the private drive/project path; no application change was needed to resolve that check.

This is local implementation and automated/self-reviewed evidence. The separate independent review workflow has not been recorded as approved, and no deployment is claimed.
