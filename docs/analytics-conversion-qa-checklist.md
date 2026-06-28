# Analytics and Conversion QA Checklist

Use this checklist before shipping analytics, CTA, contact form, or conversion-path changes.

## Page And CTA QA

- Confirm changed pages render on desktop and mobile.
- Confirm primary and secondary CTAs point to the expected URLs.
- Confirm CTA labels describe the next action clearly.
- Confirm title tags and meta descriptions are unique, readable, and match the page intent.
- Confirm no URL changes were introduced unless redirects were intentionally planned.

## GA4 Event QA

- Confirm `page_view` includes page type, page topic, landing page type, and landing page topic.
- Confirm UTM test links preserve `session_utm_source`, `session_utm_medium`, and `session_utm_campaign`.
- Confirm organic, social, referral, internal, and direct referrers are classified generically.
- Confirm no names, email addresses, message text, phone numbers, or other PII are sent as event parameters.

## Contact Funnel QA

- `contact_intent` fires when a visitor chooses a contact action or arrives with request context.
- `contact_form_start` fires once, only after real form focus, input, or submit.
- `form_submit_click` fires when the visitor attempts to submit.
- `contact_form_success` and `generate_lead` fire only after a successful form response.
- `contact_form_abandon` fires only after a form start and never after a successful submission.
- `abandon_reason` uses generic values such as `left_page`, `form_blur`, `timeout`, or `navigation`.

## Manual GA4 Checks

- Register the custom dimensions listed in `docs/ga4-custom-dimensions.md`.
- Check Realtime or DebugView after a UTM test visit.
- Check the contact funnel after one abandoned form start and one successful test lead.
- Confirm `generate_lead` is the key event used for lead reporting.

## Release Notes

- Record changed files and updated pages.
- Note whether performance pages were differentiated or consolidated.
- Note any redirects added.
- Note any known data limitations or follow-up reporting checks.
