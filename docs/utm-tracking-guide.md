# UTM Tracking Guide

Use UTM links when a visitor is coming from a profile, directory listing, social post, email, partner link, or another off-site placement that should be readable in GA4.

## Naming Rules

Use lowercase values with hyphens only when a value has multiple words. Keep the same spelling every time.

| Parameter | Use |
| --- | --- |
| `utm_source` | Platform, site, or sender name, such as `facebook`, `yelp`, `linkedin`, or `newsletter` |
| `utm_medium` | One of `organic_social`, `directory`, `referral`, `email`, or `profile` |
| `utm_campaign` | One of `brand_visibility`, `lead_generation`, or `local_seo` |
| `utm_content` | Specific link location, such as `bio-link`, `profile-button`, `footer-link`, or `june-update` |

Optional: use `utm_term` only for paid search or a controlled keyword test.

## Examples

Facebook profile:

```text
https://thewebguy.app/?utm_source=facebook&utm_medium=organic_social&utm_campaign=brand_visibility&utm_content=profile-link
```

Yelp directory listing:

```text
https://thewebguy.app/?utm_source=yelp&utm_medium=directory&utm_campaign=local_seo&utm_content=profile-button
```

Email signature:

```text
https://thewebguy.app/contact/?utm_source=email-signature&utm_medium=email&utm_campaign=lead_generation&utm_content=primary-contact-link
```

## QA Notes

- Check that the final URL loads without redirecting away from the UTM parameters unless the redirect preserves them.
- Use GA4 Realtime or DebugView to confirm `session_utm_source`, `session_utm_medium`, and `session_utm_campaign` are present.
- Do not put names, emails, phone numbers, or private client details in UTM values.
- Do not invent one-off mediums. If a new medium is needed, add it here first.
