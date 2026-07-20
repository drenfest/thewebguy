import net from "node:net";
import tls from "node:tls";
import { json } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

const MIN_FORM_AGE_MS = 2500;
const MAX_FORM_AGE_MS = 12 * 60 * 60 * 1000;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const DUPLICATE_WINDOW_MS = 2 * 60 * 1000;
const DEFAULT_SOURCE_PATH = "/contact/";
const DEFAULT_SOURCE_TITLE = "Contact request form";
const DEFAULT_SOURCE_TYPE = "contact_page";
const DEFAULT_SOURCE_CTA = "direct_form_submit";
const rateBuckets = new Map();
const duplicateBuckets = new Map();

function clean(value, limit = 4000) {
  return String(value || "").trim().slice(0, limit);
}

function cleanHeader(value) {
  return clean(value, 500).replace(/[\r\n]+/g, " ");
}

function escapeHtml(value) {
  return clean(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function extractEmail(value) {
  const text = clean(value, 500);
  const bracketed = text.match(/<([^<>@\s]+@[^<>\s]+)>/);
  if (bracketed) return bracketed[1];
  const plain = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  return plain ? plain[0] : "";
}

function getClientKey(request, getClientAddress) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwardedFor || getClientAddress?.() || "unknown";
}

function pruneBuckets(map, now) {
  for (const [key, value] of map.entries()) {
    if (value.expiresAt <= now) map.delete(key);
  }
}

function rateLimitExceeded(key) {
  const now = Date.now();
  pruneBuckets(rateBuckets, now);

  const current = rateBuckets.get(key);
  if (!current) {
    rateBuckets.set(key, { count: 1, expiresAt: now + RATE_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > MAX_REQUESTS_PER_WINDOW;
}

function duplicateSubmission(key) {
  const now = Date.now();
  pruneBuckets(duplicateBuckets, now);

  if (duplicateBuckets.has(key)) return true;
  duplicateBuckets.set(key, { expiresAt: now + DUPLICATE_WINDOW_MS });
  return false;
}

function releaseDuplicate(key) {
  duplicateBuckets.delete(key);
}

function hashValue(value) {
  let hash = 5381;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 33) ^ value.charCodeAt(index);
  }
  return (hash >>> 0).toString(36);
}

function botCheck(payload) {
  const honeypot = clean(payload.websiteCompany || payload.companyWebsite || payload._gotcha, 500);
  if (honeypot) return { blocked: true, silent: true, reason: "honeypot" };

  const loadedAt = Number(payload.formLoadedAt);
  const age = Date.now() - loadedAt;
  if (!Number.isFinite(loadedAt) || age < MIN_FORM_AGE_MS) {
    return { blocked: true, status: 400, message: "Please wait a moment, then submit the request again.", reason: "too_fast" };
  }

  if (age > MAX_FORM_AGE_MS) {
    return { blocked: true, status: 400, message: "Please reload the contact form and try again.", reason: "stale_form" };
  }

  return { blocked: false };
}

function displayValue(value, fallback = "Not provided") {
  const cleaned = clean(value);
  return cleaned || fallback;
}

function normalizeWebsiteUrl(value) {
  const cleaned = clean(value, 2000);
  if (!cleaned) return "";
  if (/^https?:\/\//i.test(cleaned)) return cleaned;
  if (/^[a-z0-9.-]+\.[a-z]{2,}(\/.*)?$/i.test(cleaned)) return `https://${cleaned}`;
  return "";
}

function buildSourcePageUrl(value) {
  const cleaned = clean(value, 400);
  if (!cleaned) return "";
  if (/^https?:\/\//i.test(cleaned)) return cleaned;
  if (cleaned.startsWith("/")) return `https://thewebguy.app${cleaned}`;
  return "";
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#96;");
}

function buildFieldRows(fields) {
  return fields.map(({ label, value, href }) => {
    const safeLabel = escapeHtml(label);
    const safeValue = escapeHtml(value);
    const valueHtml = href
      ? `<a href="${escapeAttribute(href)}" style="color:#0f766e;text-decoration:none;font-weight:600;">${safeValue}</a>`
      : safeValue;
    return `<tr><td style="padding:10px 0 6px;vertical-align:top;width:180px;color:#52606d;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;">${safeLabel}</td><td style="padding:10px 0 6px;color:#17212b;font-size:15px;line-height:1.5;">${valueHtml}</td></tr>`;
  }).join("");
}

function buildTextEmail(request) {
  const websiteUrl = normalizeWebsiteUrl(request.url);
  const sourceUrl = buildSourcePageUrl(request.sourcePagePath);
  const lines = [
    "Website work request for The Web Guy",
    "",
    `From: ${displayValue(request.name)}`,
    `Reply email: ${displayValue(request.email)}`,
    `Company or agency: ${displayValue(request.company)}`,
    `Website URL: ${displayValue(request.url)}`,
    `Service fit: ${displayValue(request.service)}`,
    `Skill area: ${displayValue(request.skill)}`,
    `City or location: ${displayValue(request.location)}`,
    `Timeline: ${displayValue(request.timeline)}`,
    `Work type: ${displayValue(request.workType)}`,
    `Approximate monthly hours: ${displayValue(request.hours)}`,
    "",
    "Quick links:",
    `Reply: mailto:${request.email}`,
    `Website: ${websiteUrl || "Not provided"}`,
    `Source page: ${sourceUrl || displayValue(request.sourcePagePath)}`,
    "",
    "Source context:",
    `Source page label: ${displayValue(request.sourcePageTitle)}`,
    `Source path: ${displayValue(request.sourcePagePath)}`,
    `Source type: ${displayValue(request.sourcePageType)}`,
    `Source CTA: ${displayValue(request.sourceCta)}`,
    "",
    "What needs help:",
    request.details
  ];
  return lines.join("\n");
}

function buildHtmlEmail(request, subjectText) {
  const websiteUrl = normalizeWebsiteUrl(request.url);
  const sourceUrl = buildSourcePageUrl(request.sourcePagePath);
  const serviceLabel = displayValue(request.service);
  const timelineLabel = displayValue(request.timeline);
  const workTypeLabel = displayValue(request.workType);
  const intro = request.company
    ? `${request.name} from ${request.company} sent a new website work request.`
    : `${request.name} sent a new website work request.`;
  const actionLinks = [
    {
      label: `Reply to ${request.name}`,
      href: `mailto:${request.email}`,
      background: "#0f766e",
      color: "#ffffff"
    },
    websiteUrl ? {
      label: "Open website",
      href: websiteUrl,
      background: "#e6fffb",
      color: "#115e59"
    } : null,
    sourceUrl ? {
      label: "Open source page",
      href: sourceUrl,
      background: "#eff6ff",
      color: "#1d4ed8"
    } : null
  ].filter(Boolean);

  const contactRows = buildFieldRows([
    { label: "Name", value: displayValue(request.name) },
    { label: "Email", value: displayValue(request.email), href: `mailto:${request.email}` },
    { label: "Company or agency", value: displayValue(request.company) },
    { label: "Website URL", value: displayValue(request.url), href: websiteUrl || null },
    { label: "Service fit", value: serviceLabel },
    { label: "Skill area", value: displayValue(request.skill) },
    { label: "City or location", value: displayValue(request.location) },
    { label: "Timeline", value: timelineLabel },
    { label: "Work type", value: workTypeLabel },
    { label: "Approximate monthly hours", value: displayValue(request.hours) }
  ]);

  const sourceRows = buildFieldRows([
    { label: "Source page", value: displayValue(request.sourcePageTitle), href: sourceUrl || null },
    { label: "Source path", value: displayValue(request.sourcePagePath), href: sourceUrl || null },
    { label: "Source type", value: displayValue(request.sourcePageType) },
    { label: "Source CTA", value: displayValue(request.sourceCta) }
  ]);

  const actionButtons = actionLinks.map((link) => `<a href="${escapeAttribute(link.href)}" style="display:inline-block;margin:0 10px 10px 0;padding:12px 16px;border-radius:999px;background:${link.background};color:${link.color};font-size:14px;font-weight:700;text-decoration:none;">${escapeHtml(link.label)}</a>`).join("");

  return `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:24px;background:#eef2f7;color:#17212b;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:760px;margin:0 auto;">
      <div style="background:linear-gradient(135deg,#0f766e 0%,#155e75 100%);border-radius:24px;padding:28px 28px 24px;color:#ffffff;box-shadow:0 18px 50px rgba(15,23,42,0.16);">
        <div style="display:inline-block;padding:7px 12px;border-radius:999px;background:rgba(255,255,255,0.16);font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">Website Work Request</div>
        <h1 style="margin:18px 0 8px;font-size:30px;line-height:1.15;">${escapeHtml(subjectText)}</h1>
        <p style="margin:0;font-size:16px;line-height:1.6;color:rgba(255,255,255,0.92);">${escapeHtml(intro)}</p>
        <div style="margin-top:20px;">${actionButtons}</div>
        <table role="presentation" style="width:100%;border-collapse:separate;border-spacing:12px;margin-top:12px;">
          <tr>
            <td style="padding:14px 16px;border-radius:18px;background:rgba(255,255,255,0.14);">
              <div style="font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:rgba(255,255,255,0.75);">Service Fit</div>
              <div style="margin-top:6px;font-size:18px;font-weight:700;color:#ffffff;">${escapeHtml(serviceLabel)}</div>
            </td>
            <td style="padding:14px 16px;border-radius:18px;background:rgba(255,255,255,0.14);">
              <div style="font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:rgba(255,255,255,0.75);">Timeline</div>
              <div style="margin-top:6px;font-size:18px;font-weight:700;color:#ffffff;">${escapeHtml(timelineLabel)}</div>
            </td>
            <td style="padding:14px 16px;border-radius:18px;background:rgba(255,255,255,0.14);">
              <div style="font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:rgba(255,255,255,0.75);">Work Type</div>
              <div style="margin-top:6px;font-size:18px;font-weight:700;color:#ffffff;">${escapeHtml(workTypeLabel)}</div>
            </td>
          </tr>
        </table>
      </div>

      <div style="background:#ffffff;border-radius:22px;padding:24px 28px;margin-top:18px;box-shadow:0 10px 30px rgba(15,23,42,0.08);">
        <h2 style="margin:0 0 16px;font-size:20px;line-height:1.3;color:#0f172a;">Contact and Request Details</h2>
        <table role="presentation" style="width:100%;border-collapse:collapse;">${contactRows}</table>
      </div>

      <div style="background:#ffffff;border-radius:22px;padding:24px 28px;margin-top:18px;box-shadow:0 10px 30px rgba(15,23,42,0.08);">
        <h2 style="margin:0 0 14px;font-size:20px;line-height:1.3;color:#0f172a;">What Needs Help</h2>
        <div style="padding:18px 20px;border-radius:18px;background:#f8fafc;border:1px solid #dbe5ef;color:#17212b;font-size:16px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(request.details)}</div>
      </div>

      <div style="background:#ffffff;border-radius:22px;padding:24px 28px;margin-top:18px;box-shadow:0 10px 30px rgba(15,23,42,0.08);">
        <h2 style="margin:0 0 16px;font-size:20px;line-height:1.3;color:#0f172a;">Source Context</h2>
        <table role="presentation" style="width:100%;border-collapse:collapse;">${sourceRows}</table>
      </div>
    </div>
  </body>
</html>`;
}

function dotStuff(value) {
  return value.replace(/\r?\n/g, "\r\n").replace(/^\./gm, "..");
}

function smtpSecureEnabled() {
  return ["1", "true", "yes", "on"].includes(clean(env.SMTP_SECURE).toLowerCase());
}

function smtpStartTlsEnabled(port, secure) {
  const configured = clean(env.SMTP_STARTTLS).toLowerCase();
  if (["0", "false", "no", "off"].includes(configured)) return false;
  if (["1", "true", "yes", "on"].includes(configured)) return true;
  return !secure && Number(port) !== 25;
}

function buildMessage({ from, to, replyTo, subject, text, html }) {
  const boundary = `webguy-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const safeSubject = cleanHeader(subject);
  const safeFrom = cleanHeader(from);
  const safeTo = cleanHeader(to);
  const safeReplyTo = extractEmail(replyTo);

  const headers = [
    `From: ${safeFrom}`,
    `To: ${safeTo}`,
    safeReplyTo ? `Reply-To: ${safeReplyTo}` : "",
    `Subject: ${safeSubject}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${Date.now()}.${Math.random().toString(36).slice(2)}@thewebguy.app>`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`
  ].filter(Boolean);

  return [
    ...headers,
    "",
    `--${boundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: 8bit",
    "",
    text,
    "",
    `--${boundary}`,
    'Content-Type: text/html; charset="UTF-8"',
    "Content-Transfer-Encoding: 8bit",
    "",
    html,
    "",
    `--${boundary}--`,
    ""
  ].join("\r\n");
}

function base64Url(value) {
  return Buffer.from(value)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

async function getGmailAccessToken({ clientId, clientSecret, refreshToken }) {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token"
    })
  });
  const result = await response.json().catch(() => ({}));

  if (!response.ok || !result.access_token) {
    throw new Error(`Gmail OAuth token request failed (${response.status}): ${result.error_description || result.error || "Unknown error"}`);
  }

  return result.access_token;
}

async function sendGmailApiMail({ clientId, clientSecret, refreshToken, userId, from, to, replyTo, subject, text, html }) {
  if (!clientId || !clientSecret || !refreshToken || !from || !to) {
    throw new Error("Gmail API is missing required configuration.");
  }

  const message = buildMessage({ from, to, replyTo, subject, text, html });
  const accessToken = await getGmailAccessToken({ clientId, clientSecret, refreshToken });
  const response = await fetch(`https://gmail.googleapis.com/gmail/v1/users/${encodeURIComponent(userId || "me")}/messages/send`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${accessToken}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({ raw: base64Url(message) })
  });
  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    const errorMessage = result.error?.message || result.error_description || "Unknown error";
    throw new Error(`Gmail API send failed (${response.status}): ${errorMessage}`);
  }

  return result;
}

async function sendSmtpMail({ host, port, secure, startTls, username, password, from, to, replyTo, subject, text, html }) {
  const envelopeFrom = extractEmail(from);
  const envelopeTo = extractEmail(to);

  if (!host || !port || !username || !password || !envelopeFrom || !envelopeTo) {
    throw new Error("SMTP is missing required configuration.");
  }

  const message = buildMessage({ from, to, replyTo, subject, text, html });
  let socket;
  let buffer = "";

  function connectSocket(useTls, existingSocket = null) {
    return new Promise((resolve, reject) => {
      const onReady = () => resolve(nextSocket);
      const onError = (error) => reject(error);
      const nextSocket = useTls
        ? tls.connect({ host, port, servername: host, socket: existingSocket || undefined, rejectUnauthorized: true }, onReady)
        : net.connect({ host, port }, onReady);

      nextSocket.setEncoding("utf8");
      nextSocket.setTimeout(15000, () => nextSocket.destroy(new Error("SMTP connection timed out.")));
      nextSocket.once("error", onError);
    });
  }

  function readResponse() {
    return new Promise((resolve, reject) => {
      const onData = (chunk) => {
        buffer += chunk;
        const lines = buffer.split(/\r?\n/);
        const lastComplete = lines.length > 1 ? lines[lines.length - 2] : "";

        if (/^\d{3} /.test(lastComplete)) {
          socket.off("data", onData);
          socket.off("error", onError);
          const response = buffer.trimEnd();
          buffer = "";
          const code = Number(lastComplete.slice(0, 3));
          resolve({ code, response });
        }
      };
      const onError = (error) => {
        socket.off("data", onData);
        reject(error);
      };
      socket.on("data", onData);
      socket.once("error", onError);
    });
  }

  async function expect(command, expectedCodes) {
    if (command) socket.write(`${command}\r\n`);
    const result = await readResponse();
    const expected = Array.isArray(expectedCodes) ? expectedCodes : [expectedCodes];
    if (!expected.includes(result.code)) {
      throw new Error(`SMTP command failed (${result.code}): ${result.response}`);
    }
    return result;
  }

  try {
    socket = await connectSocket(secure);
    await expect("", 220);
    await expect(`EHLO ${clean(env.SMTP_EHLO_DOMAIN) || "thewebguy.app"}`, 250);

    if (startTls) {
      await expect("STARTTLS", 220);
      socket.removeAllListeners("data");
      socket = await connectSocket(true, socket);
      await expect(`EHLO ${clean(env.SMTP_EHLO_DOMAIN) || "thewebguy.app"}`, 250);
    }

    const auth = Buffer.from(`\u0000${username}\u0000${password}`).toString("base64");
    await expect(`AUTH PLAIN ${auth}`, 235);
    await expect(`MAIL FROM:<${envelopeFrom}>`, 250);
    await expect(`RCPT TO:<${envelopeTo}>`, [250, 251]);
    await expect("DATA", 354);
    socket.write(`${dotStuff(message)}\r\n.\r\n`);
    await expect("", 250);
    await expect("QUIT", [221, 250]);
  } finally {
    socket?.destroy();
  }
}

function gmailApiConfig() {
  return {
    clientId: clean(env.GMAIL_CLIENT_ID, 1000),
    clientSecret: clean(env.GMAIL_CLIENT_SECRET, 1000),
    refreshToken: clean(env.GMAIL_REFRESH_TOKEN, 2000),
    userId: clean(env.GMAIL_USER_ID, 500) || "me",
    from: clean(env.CONTACT_FROM_EMAIL, 500),
    to: clean(env.CONTACT_TO_EMAIL, 500)
  };
}

function gmailApiConfigured(config) {
  return Boolean(config.clientId && config.clientSecret && config.refreshToken && config.from && config.to);
}

function missingConfigKeys(config, keyMap) {
  return Object.entries(keyMap)
    .filter(([, configKey]) => !config[configKey])
    .map(([envKey]) => envKey);
}

function smtpConfig() {
  const secure = smtpSecureEnabled();
  const port = Number(clean(env.SMTP_PORT) || (secure ? 465 : 587));

  return {
    host: clean(env.SMTP_HOST, 255),
    port,
    secure,
    startTls: smtpStartTlsEnabled(port, secure),
    username: clean(env.SMTP_USER, 500),
    password: clean(env.SMTP_PASSWORD || env.SMTP_PASS, 1000),
    from: clean(env.CONTACT_FROM_EMAIL, 500),
    to: clean(env.CONTACT_TO_EMAIL, 500)
  };
}

function smtpConfigured(config) {
  return Boolean(config.to && config.from && config.host && config.username && config.password);
}

function preferredProvider() {
  const provider = clean(env.CONTACT_EMAIL_PROVIDER, 40).toLowerCase();
  if (["gmail", "gmail-api", "google"].includes(provider)) return "gmail";
  if (["smtp", "mail"].includes(provider)) return "smtp";
  return "";
}

export async function POST({ request, getClientAddress }) {
  const payload = await request.json().catch(() => null);
  if (!payload) {
    return json({ message: "Invalid request body." }, { status: 400 });
  }

  const botResult = botCheck(payload);
  if (botResult.blocked) {
    if (!botResult.silent) console.warn("Contact request blocked by bot protection", botResult.reason);
    return json(
      botResult.silent ? { ok: true, mode: "filtered" } : { message: botResult.message || "The request could not be sent." },
      { status: botResult.status || 200 }
    );
  }

  const clientKey = getClientKey(request, getClientAddress);
  if (rateLimitExceeded(clientKey)) {
    console.warn("Contact request rate limited", clientKey);
    return json({ message: "Too many requests from this connection. Please try again later." }, { status: 429 });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const details = clean(payload.details);

  if (!name || !email || !details) {
    return json({ message: "Name, email, and project details are required." }, { status: 400 });
  }

  const sourcePagePath = clean(payload.sourcePagePath, 300) || DEFAULT_SOURCE_PATH;
  const normalized = {
    name,
    email,
    company: clean(payload.company),
    url: clean(payload.url),
    service: clean(payload.service),
    skill: clean(payload.skill),
    location: clean(payload.location),
    timeline: clean(payload.timeline),
    workType: clean(payload.workType),
    hours: clean(payload.hours),
    details,
    sourcePagePath,
    sourcePageTitle: clean(payload.sourcePageTitle, 220) || (sourcePagePath === DEFAULT_SOURCE_PATH ? DEFAULT_SOURCE_TITLE : sourcePagePath),
    sourcePageType: clean(payload.sourcePageType, 80) || DEFAULT_SOURCE_TYPE,
    sourceCta: clean(payload.sourceCta, 160) || DEFAULT_SOURCE_CTA
  };

  const duplicateKey = `${clientKey}:${normalized.email.toLowerCase()}:${hashValue(`${normalized.url}|${normalized.service}|${normalized.details}`)}`;
  if (duplicateSubmission(duplicateKey)) {
    return json({ message: "This request was already received. Please wait before sending it again." }, { status: 409 });
  }

  const subjectContext = normalized.sourcePageTitle || normalized.service || normalized.skill || normalized.location || "The Web Guy";
  const subjectText = `Website work request - ${cleanHeader(subjectContext).slice(0, 96)}`;
  const bodyText = buildTextEmail(normalized);
  const bodyHtml = buildHtmlEmail(normalized, subjectText);
  const gmailConfig = gmailApiConfig();
  const config = smtpConfig();
  const provider = preferredProvider();

  if (provider === "gmail" || (!provider && gmailApiConfigured(gmailConfig))) {
    if (!gmailApiConfigured(gmailConfig)) {
      releaseDuplicate(duplicateKey);
      const missing = missingConfigKeys(gmailConfig, {
        CONTACT_TO_EMAIL: "to",
        CONTACT_FROM_EMAIL: "from",
        GMAIL_CLIENT_ID: "clientId",
        GMAIL_CLIENT_SECRET: "clientSecret",
        GMAIL_REFRESH_TOKEN: "refreshToken"
      });
      console.error("Contact Gmail API email is not configured.", {
        provider: provider || "(auto)",
        missing
      });
      return json({ message: "The contact form email is not configured yet." }, { status: 503 });
    }

    try {
      await sendGmailApiMail({
        ...gmailConfig,
        replyTo: normalized.email,
        subject: subjectText,
        text: bodyText,
        html: bodyHtml
      });

      return json({
        ok: true,
        mode: "gmail-api-email",
        request: normalized
      });
    } catch (error) {
      releaseDuplicate(duplicateKey);
      console.error("Contact Gmail API delivery failed", error);
      return json({ message: "The request could not be sent. Please try again in a moment." }, { status: 502 });
    }
  }

  if (!smtpConfigured(config)) {
    releaseDuplicate(duplicateKey);
    const missing = missingConfigKeys(config, {
      CONTACT_TO_EMAIL: "to",
      CONTACT_FROM_EMAIL: "from",
      SMTP_HOST: "host",
      SMTP_USER: "username",
      SMTP_PASSWORD: "password"
    });
    console.error("Contact SMTP email is not configured.", {
      provider: provider || "(auto)",
      missing
    });
    return json({ message: "The contact form email is not configured yet." }, { status: 503 });
  }

  try {
    await sendSmtpMail({
      ...config,
      replyTo: normalized.email,
      subject: subjectText,
      text: bodyText,
      html: bodyHtml
    });

    return json({
      ok: true,
      mode: "smtp-email",
      request: normalized
    });
  } catch (error) {
    releaseDuplicate(duplicateKey);
    console.error("Contact SMTP delivery failed", error);
    return json({ message: "The request could not be sent. Please try again in a moment." }, { status: 502 });
  }
}
