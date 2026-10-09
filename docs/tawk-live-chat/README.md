# Tawk Live Chat On Render

This app loads the tawk.to widget from a client-only Svelte component. Render only needs public widget IDs. No Discord bot, private token, webhook, or backend chat process is required.

## How It Works

- `src/lib/components/TawkLiveChat.svelte` mounts once from the root layout.
- The component reads public SvelteKit runtime variables from Render.
- The widget script is only injected in the browser after the visitor completes the site-owned chat intake.
- The conditional intake requires only a name by default. Visitors can request follow-up and choose Email, Phone, or Both; only the selected contact fields appear and become required.
- The validated visitor details are assigned to `Tawk_API.visitor` before the hosted widget script downloads, then Tawk is started and opened.
- Browser `online`/`offline` events are monitored. If the visitor loses internet, the Tawk iframe is left mounted so Tawk can resync active chat state when the connection returns.
- If the Tawk script fails to load, the loader retries when the browser is online, with capped exponential backoff.
- `PUBLIC_TAWK_ALLOWED_HOSTS` prevents the widget from loading on unexpected hostnames if the public widget IDs are copied elsewhere.
- Tawk lifecycle events are tracked without logging submitted names, email addresses, phone numbers, or message contents.
- Tawk JavaScript API callbacks are wired for load, status, window state, chat lifecycle, offline/pre-chat forms, messages, agent activity, satisfaction, file uploads, tag updates, and unread counts. Message text, visitor names, email addresses, phone numbers, uploaded file URLs, and transcripts are not sent to site analytics.
- Tawk `customStyle` is configured before the embed script loads so the widget sits bottom right and below the site menu layers.
- Chat lifecycle events are sent to the existing analytics helper without message text, names, emails, or chat transcripts.
- The installed public widget script is `https://embed.tawk.to/6a43edcd82c4e81d44ac79af/1jsclhqsd`.

## Tawk Dashboard Setup

1. Create or open the tawk.to property for `thewebguy.app`.
2. In tawk.to, go to `Administration > Chat Widget`.
3. Copy the `Property ID` and `Widget ID`. Tawk also documents where to find both IDs here: https://help.tawk.to/article/where-can-i-find-the-property-and-widget-id
4. In `Widget Behavior > Visibility Settings`, enable `Widget offline when all agents offline`. The site-owned intake can still open the offline widget after the visitor asks for follow-up.
5. In `Availability Restriction`, enable `Domain Restriction` and allow only:
   - `thewebguy.app`
   - `www.thewebguy.app`
6. In `Widget Content > Pre-Chat`, disable Tawk's hosted Pre-Chat form. The site-owned intake replaces it, and leaving both enabled would ask visitors for the same details twice.
7. Keep the Tawk Offline form available so unavailable chats can still accept a message after the site-owned intake supplies the visitor's selected follow-up details.
8. Optional: configure `Country Restriction` if spam starts coming from markets you do not serve.
9. Optional: configure `Widget Scheduler` if chat should only appear during planned hours.
10. Install the tawk.to iOS or Android app and test push notifications before relying on live leads.

The app enforces the same online-only behavior through the Tawk JavaScript API, but the dashboard settings should still be enabled so Tawk's own state matches the site's behavior.

## Conditional Contact Gate

Tawk's hosted form supports fields that are independently required, but it does not expose conditional visibility or conditional required rules. The site therefore owns the conditional gate and passes the completed details to Tawk before loading the widget.

| Field | Type | Required | Purpose |
| --- | --- | --- | --- |
| `Name` | Text | Always | The only field required for an ordinary chat. |
| `If no one is available, contact me` | Checkbox | No | Reveals the follow-up controls when selected. |
| `Email / Phone / Both` | Radio group | Only after follow-up is selected | Determines which contact fields appear. |
| `Email` | Email | For Email or Both | Passed to Tawk before chat starts. |
| `Phone` | Telephone | For Phone or Both | Passed to Tawk before chat starts. |

The form is intentionally not submitted to the site's contact endpoint. The selected details are handed directly to Tawk as visitor data and are not included in site analytics.

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
PUBLIC_TAWK_AUTO_START=true
PUBLIC_TAWK_CUSTOM_INTAKE=true
PUBLIC_TAWK_PROPERTY_ID=6a43edcd82c4e81d44ac79af
PUBLIC_TAWK_WIDGET_ID=1jsclhqsd
PUBLIC_TAWK_HIDE_WHEN_OFFLINE=true
PUBLIC_TAWK_ALLOWED_HOSTS=thewebguy.app,www.thewebguy.app
PUBLIC_TAWK_Z_INDEX=70
PUBLIC_TAWK_DESKTOP_POSITION=br
PUBLIC_TAWK_DESKTOP_X_OFFSET=18
PUBLIC_TAWK_DESKTOP_Y_OFFSET=18
PUBLIC_TAWK_MOBILE_POSITION=br
PUBLIC_TAWK_MOBILE_X_OFFSET=12
PUBLIC_TAWK_MOBILE_Y_OFFSET=12
```

Notes:

- These are public client-side IDs, not secrets.
- `PUBLIC_TAWK_CUSTOM_INTAKE=true` delays the Tawk script until the visitor completes the conditional intake, then starts and opens the widget automatically.
- `PUBLIC_TAWK_AUTO_START` is ignored while the custom intake is enabled.
- `PUBLIC_TAWK_WIDGET_ID` must match the widget ID from the Tawk embed script.
- `PUBLIC_TAWK_Z_INDEX=70` keeps the widget above the page content but below the mobile navigation overlay.
- `PUBLIC_TAWK_*_POSITION` must be one of `br`, `bl`, `cr`, `cl`, `tr`, or `tl`.
- Leave `PUBLIC_TAWK_ENABLED=false` to disable live chat without removing code.
- `PUBLIC_TAWK_ALLOWED_HOSTS` is a comma-separated list. Use production hostnames on Render; include `localhost,127.0.0.1` only for local testing.
- Render must redeploy after these values change because the client bundle needs the public values.

## Local Development

Copy `.env.example` to `.env.local` and add the same public values:

```txt
PUBLIC_TAWK_ENABLED=true
PUBLIC_TAWK_AUTO_START=true
PUBLIC_TAWK_CUSTOM_INTAKE=true
PUBLIC_TAWK_PROPERTY_ID=6a43edcd82c4e81d44ac79af
PUBLIC_TAWK_WIDGET_ID=1jsclhqsd
PUBLIC_TAWK_HIDE_WHEN_OFFLINE=true
PUBLIC_TAWK_ALLOWED_HOSTS=thewebguy.app,www.thewebguy.app,localhost,127.0.0.1
PUBLIC_TAWK_Z_INDEX=70
PUBLIC_TAWK_DESKTOP_POSITION=br
PUBLIC_TAWK_DESKTOP_X_OFFSET=18
PUBLIC_TAWK_DESKTOP_Y_OFFSET=18
PUBLIC_TAWK_MOBILE_POSITION=br
PUBLIC_TAWK_MOBILE_X_OFFSET=12
PUBLIC_TAWK_MOBILE_Y_OFFSET=12
```

The component includes those public IDs as defaults, so local dev can load the real widget unless `PUBLIC_TAWK_ENABLED=false` or the local hostname is removed from `PUBLIC_TAWK_ALLOWED_HOSTS`.

## Verification Checklist

1. Deploy the branch to Render.
2. Open the live site in an incognito browser.
3. Confirm the site-owned Live chat launcher appears without downloading the Tawk widget script first.
4. Open it with follow-up unchecked. Confirm Name is the only required field.
5. Select follow-up, then verify Email, Phone, and Both reveal and require the correct fields.
6. Submit each path with test details and confirm the Tawk widget opens without showing a second Pre-Chat form.
7. Start a test chat from the site; confirm the Tawk mobile app receives a push notification.
8. Reply from the app; confirm the visitor browser receives the message.
9. While the chat is open, temporarily disconnect the visitor browser from the network, reconnect, and confirm the chat catches up.
10. Confirm the existing `/contact/` form still works as a separate fallback.
11. Confirm the widget does not load on any unapproved host.

## Troubleshooting

- Widget never appears: confirm both Tawk IDs are correct and the Render service redeployed after changing env vars.
- Widget never appears on a preview URL: add that hostname to `PUBLIC_TAWK_ALLOWED_HOSTS`, redeploy, then remove it before production if it should not keep chat enabled.
- Widget appears while offline: confirm `Hide widget when offline`, `Widget offline when all agents offline`, and `PUBLIC_TAWK_HIDE_WHEN_OFFLINE=true`.
- Widget appears on copied/staging domains: confirm both Tawk dashboard `Domain Restriction` and `PUBLIC_TAWK_ALLOWED_HOSTS`.
- Visitors see a second form: disable Tawk's hosted Pre-Chat form; the conditional intake already supplies visitor details before the widget loads.
- Spam chats arrive: ban the visitor/IP in Tawk, then consider country restriction if the pattern repeats.
- Mobile notifications fail: use Tawk's built-in mobile push notification test and confirm OS notification permissions are enabled.
- Widget is disabled locally: confirm `PUBLIC_TAWK_ENABLED=true`, the IDs match the embed script, and the local hostname is allowed.
