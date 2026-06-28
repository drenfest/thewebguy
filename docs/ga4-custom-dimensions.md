# GA4 Custom Dimensions

After deploy, register these GA4 event-scoped custom dimensions manually so the custom event parameters can be used in explorations and reports.

GA4 path:

```text
Admin -> Data display -> Custom definitions -> Create custom dimension
```

Create each dimension with scope `Event`.

| Dimension name | Event parameter | Scope | Notes |
| --- | --- | --- | --- |
| Landing page type | `landing_page_type` | Event | Page family captured at the first landing page in the session |
| Landing page topic | `landing_page_topic` | Event | Topic inferred from the landing page route |
| Session referrer type | `session_referrer_type` | Event | `direct`, `organic_search`, `organic_social`, `referral`, `internal`, or `unknown` |
| Session UTM source | `session_utm_source` | Event | Source from the landing URL UTM values |
| Session UTM medium | `session_utm_medium` | Event | Medium from the landing URL UTM values |
| Session UTM campaign | `session_utm_campaign` | Event | Campaign from the landing URL UTM values |
| Abandon reason | `abandon_reason` | Event | Generic contact form abandonment reason |

## Recommended Explorations

Create or update GA4 explorations around:

- Channel quality: default channel group, sessions, engaged sessions, engagement rate, average engagement time, key events, and session key event rate.
- Landing page quality: landing page, landing page type, landing page topic, sessions, engagement rate, contact intent, form starts, generate leads.
- Contact funnel: `contact_intent`, `contact_form_start`, `form_submit_click`, `contact_form_success`, `generate_lead`, and `contact_form_abandon`.
- UTM performance: session UTM source, medium, campaign, content, sessions, engagement, contact intent, and leads.

## Notes

- GA4 custom dimensions are not retroactive. They begin filling after registration.
- Keep event parameter names exactly as listed above.
- Mark `generate_lead` as the lead key event. Keep submit-click events as diagnostic events, not leads.
