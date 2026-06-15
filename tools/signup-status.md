# Signup Status

Last updated: 2026-06-13

## Completed / Awaiting Platform Review

- Yelp for Business: claimed and verified by SMS. Public URL shown in dashboard: `https://yelp.com/biz/the-web-guy-freeport`. Yelp warns that the page will not appear publicly until moderators approve it. Profile is 94% complete with address, phone, website, category/services, hours, and specialties saved. Yelp also says email verification was sent to `drenfest@gmail.com`.
- Alignable: signup completed by owner after reCAPTCHA.
- IndexNow: submitted the The Web Guy URL list to Bing IndexNow and received HTTP `202`.

## In Progress

- Clutch: account creation reached email verification for `drenfest@gmail.com`. Code `883017` was rejected after the registration flow restarted. Needs the newest 6-digit Clutch email code.
- MerchantCircle: signup form prefilled but not submitted. Submit text includes consent to receive email, telephone, or text communications from MerchantCircle, including automated/prerecorded calls/messages, so this needs explicit approval before clicking `Create my account`.
- Hotfrog: registration submitted for Gary Hunt at `drenfest@gmail.com`. Hotfrog sent a confirmation email; needs the email confirmation link to continue adding the business.
- Manta: add-company form filled with business name and Freeport address, but the required service-area control is not exposed as a normal input/button and `Add my company` remains disabled.
- ChamberOfCommerce.com: add-business form prefilled with business/account details, but the ZIP lookup did not populate city/state for `61032` and the page requires CAPTCHA. Submit also signs the account up for Chamber updates, member offers, and promotions.
- Cylex US: signup started with `drenfest@gmail.com`; moved to account creation, but blocked by CAPTCHA before registration can finish.
- EZlocal: free listing form filled with business, contact, website, description, and `Web Design` category, but submit is blocked by CAPTCHA with `Please indicate that you are not a robot`.
- Brownbook: business listing details filled and advanced to `Confirm changes (step 2 of 2)`. Completion requires creating a Brownbook account and solving a CAPTCHA iframe.
- Fyple: current add-company path redirects to login, and registration page is in maintenance mode with `We'll be back soon`; no listing can be submitted until registration returns.
- ShowMeLocal: homepage immediately displayed an anti-bot `Complete this quick check` page before any registration or add-business form was accessible.
- Lacartes: free account form filled for Gary Hunt / `drenfest@gmail.com`, but `Create Account` is blocked by reCAPTCHA and email verification before a business page can be created.
- Cybo: business details entered and duplicate check passed as non-matches. Cybo requires sign-in to finish; a magic login link was sent to `drenfest@gmail.com`.
- Foursquare: searched Freeport, IL for `The Web Guy`; no existing match appeared and `List my business` led to Foursquare Studio login/signup with a CAPTCHA iframe.

## Blocked

- GoodFirms: rejected `drenfest@gmail.com` with `Please use your business email address.` Needs a domain email such as `gary@thewebguy.app` or `hello@thewebguy.app`.
- DesignRush: rejected `drenfest@gmail.com` with `Please use a valid business email`. Needs a domain email.
- Gmail API code reader: `tools/read-gmail-codes.mjs` was added, but `.env.local` has empty `GMAIL_CLIENT_ID`, `GMAIL_CLIENT_SECRET`, and `GMAIL_REFRESH_TOKEN`. Needs Gmail OAuth credentials with read access, such as `https://www.googleapis.com/auth/gmail.readonly`.

## Not Started Yet

- Google Business Profile
- Bing Places
- LinkedIn Company Page
- Apple Business Connect
- Crunchbase

## Account Details Used

- Owner: Gary Hunt
- Business: The Web Guy
- Email/login attempted: `drenfest@gmail.com`
- Phone: `8152756717`
- Address: `1135 Lacresta Dr, Freeport, IL 61032`
- Website: `https://thewebguy.app`
- Year founded: 2026
- Team size: 1
- Business hours: Monday-Friday, 9:00 AM-5:00 PM Central
- Logo: `static/icons/webguy-icon-512.png`
