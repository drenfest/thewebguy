# Tawk Live Chat On Render

This app loads the tawk.to widget from a client-only Svelte component. Render only needs public widget IDs. No Discord bot, private token, webhook, or backend chat process is required.

## How It Works

- `src/lib/components/TawkLiveChat.svelte` mounts once from the root layout.
- The component reads public SvelteKit runtime variables from Render.
- The widget script is only injected in the browser.
- The Tawk JavaScript API hides the widget before load, reads `getStatus()`, listens for `onStatusChange`, and keeps the widget hidden unless the status is `online`.
- Browser `online`/`offline` events are monitored. If the visitor loses internet, the Tawk iframe is left mounted so Tawk can resync active chat state when the connection returns.
- If the Tawk script fails to load, the loader retries when the browser is online, with capped exponential backoff.
- `PUBLIC_TAWK_ALLOWED_HOSTS` prevents the widget from loading on unexpected hostnames if the public widget IDs are copied elsewhere.
- Tawk's `onPrechatSubmit` event is tracked as a lifecycle event and tagged as `prechat-contact-captured` without logging the submitted name, email, phone, or message contents.
- Chat lifecycle events are sent to the existing analytics helper without message text, names, emails, or chat transcripts.
- The installed public widget script is `https://embed.tawk.to/6a43edcd82c4e81d44ac79af/1jsclhqsd`.

## Tawk Dashboard Setup

1. Create or open the tawk.to property for `thewebguy.app`.
2. In tawk.to, go to `Administration > Chat Widget`.
3. Copy the `Property ID` and `Widget ID`. Tawk also documents where to find both IDs here: https://help.tawk.to/article/where-can-i-find-the-property-and-widget-id
4. In `Widget Behavior > Visibility Settings`, enable:
   - `Hide widget when offline`
   - `Widget offline when all agents offline`
5. In `Availability Restriction`, enable `Domain Restriction` and allow only:
   - `thewebguy.app`
   - `www.thewebguy.app`
6. Configure the required lead gate in `Widget Content > Pre-Chat`:
   - Enable `Pre-Chat`.
   - Add a `Form` body card if one is not already present.
   - Add `Name` and click the star icon so it is required.
   - Add a custom short-text field labeled `Email or phone` and click the star icon so it is required.
   - Do not rely on separate optional Email and Phone fields to enforce this rule unless you are comfortable requiring both.
7. Optional: add separate optional `Email` and `Phone` fields if you want structured contact records in Tawk, but keep the required `Email or phone` field as the enforcement gate.
8. Optional: configure `Country Restriction` if spam starts coming from markets you do not serve.
9. Optional: configure `Widget Scheduler` if chat should only appear during planned hours.
10. Install the tawk.to iOS or Android app and test push notifications before relying on live leads.

The app enforces the same online-only behavior through the Tawk JavaScript API, but the dashboard settings should still be enabled so Tawk's own state matches the site's behavior.

## Required Contact Gate

Tawk supports required fields in the Pre-Chat Form. Their documented control is per field: click the star icon to make a field required. The current Tawk docs do not describe a conditional required rule such as "Email OR Phone" across two separate fields.

Use this field setup to match the requirement:

| Field | Type | Required | Purpose |
| --- | --- | --- | --- |
| `Name` | Built-in Name | Yes | Identifies the lead before chat starts. |
| `Email or phone` | Custom short-text field | Yes | Enforces at least one contact method before chat starts. |
| `Email` | Built-in Email | Optional | Optional structured email storage in Tawk. |
| `Phone` | Built-in Phone | Optional | Optional structured phone storage in Tawk. |

This is the closest exact match to "name, and phone number or email" without requiring both phone and email.

## Connection Handling

The actual chat messages live inside Tawk's widget and service. This site does not read, store, or queue message content.

The site-side integration supports connection loss by:

- leaving the Tawk widget mounted during a browser offline event instead of destroying it;
- showing a short connection notice to visitors while their browser is offline;
- retrying the Tawk embed script when the browser comes back online;
- avoiding host-page analytics that include message text or contact details.

Test this before launch by starting a Tawk chat, disabling network in the browser dev tools or turning off Wi-Fi, typing a message, restoring network, and confirming the conversation catches up in Tawk.

## Spam Protection

Use Tawk's dashboard controls as the primary spam layer:

- Enable `Domain Restriction` so the widget only runs on `thewebguy.app` and `www.thewebguy.app`.
- Use the `Ban` action during a spam chat and choose `Ban IP` for repeat offenders. Tawk documents this here: https://help.tawk.to/article/banning-a-visitor
- Use `Administration > Ban List` to add known bad IPs manually.
- Use `Country Restriction` if repeated spam comes from countries you do not serve. Tawk documents domain/country/platform restrictions here: https://help.tawk.to/article/restricting-your-widget-by-platform-domain-or-country
- Keep offline fallback on the existing `/contact/` form, which already has server-side bot protection.

The code-side `PUBLIC_TAWK_ALLOWED_HOSTS` check is a second layer. It stops this app from loading the public Tawk widget IDs on unapproved hostnames, but it should not replace Tawk's dashboard-level domain restriction.

## Render Environment Variables

Add these variables to the Render web service:

```txt
PUBLIC_TAWK_ENABLED=true
PUBLIC_TAWK_PROPERTY_ID=6a43edcd82c4e81d44ac79af
PUBLIC_TAWK_WIDGET_ID=1jsclhqsd
PUBLIC_TAWK_HIDE_WHEN_OFFLINE=true
PUBLIC_TAWK_ALLOWED_HOSTS=thewebguy.app,www.thewebguy.app
```

Notes:

- These are public client-side IDs, not secrets.
- `PUBLIC_TAWK_WIDGET_ID` must match the widget ID from the Tawk embed script.
- Leave `PUBLIC_TAWK_ENABLED=false` to disable live chat without removing code.
- `PUBLIC_TAWK_ALLOWED_HOSTS` is a comma-separated list. Use production hostnames on Render; include `localhost,127.0.0.1` only for local testing.
- Render must redeploy after these values change because the client bundle needs the public values.

## Local Development

Copy `.env.example` to `.env.local` and add the same public values:

```txt
PUBLIC_TAWK_ENABLED=true
PUBLIC_TAWK_PROPERTY_ID=6a43edcd82c4e81d44ac79af
PUBLIC_TAWK_WIDGET_ID=1jsclhqsd
PUBLIC_TAWK_HIDE_WHEN_OFFLINE=true
PUBLIC_TAWK_ALLOWED_HOSTS=thewebguy.app,www.thewebguy.app,localhost,127.0.0.1
```

The component includes those public IDs as defaults, so local dev can load the real widget unless `PUBLIC_TAWK_ENABLED=false` or the local hostname is removed from `PUBLIC_TAWK_ALLOWED_HOSTS`.

## Verification Checklist

1. Deploy the branch to Render.
2. Open the live site in an incognito browser.
3. Set your Tawk status to `Online`; confirm the chat widget appears.
4. Set your Tawk status to `Invisible` or log out; confirm the widget disappears.
5. Click the widget and confirm Tawk requires `Name` plus `Email or phone` before the chat can start.
6. Start a test chat from the site; confirm the Tawk mobile app receives a push notification.
7. Reply from the app; confirm the visitor browser receives the message.
8. While the chat is open, temporarily disconnect the visitor browser from the network, reconnect, and confirm the chat catches up.
9. Confirm the existing `/contact/` form still works as the offline fallback.
10. Confirm the widget does not load on any unapproved host.

## Troubleshooting

- Widget never appears: confirm both Tawk IDs are correct and the Render service redeployed after changing env vars.
- Widget never appears on a preview URL: add that hostname to `PUBLIC_TAWK_ALLOWED_HOSTS`, redeploy, then remove it before production if it should not keep chat enabled.
- Widget appears while offline: confirm `Hide widget when offline`, `Widget offline when all agents offline`, and `PUBLIC_TAWK_HIDE_WHEN_OFFLINE=true`.
- Widget appears on copied/staging domains: confirm both Tawk dashboard `Domain Restriction` and `PUBLIC_TAWK_ALLOWED_HOSTS`.
- Visitors can start chat without contact details: confirm `Pre-Chat` is enabled and both `Name` and `Email or phone` have the required star active in Tawk.
- Spam chats arrive: ban the visitor/IP in Tawk, then consider country restriction if the pattern repeats.
- Mobile notifications fail: use Tawk's built-in mobile push notification test and confirm OS notification permissions are enabled.
- Widget is disabled locally: confirm `PUBLIC_TAWK_ENABLED=true`, the IDs match the embed script, and the local hostname is allowed.
