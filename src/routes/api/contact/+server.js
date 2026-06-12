import net from "node:net";
import tls from "node:tls";
import { json } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

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

function buildHtml(lines) {
  const rows = lines.map((line) => (line ? escapeHtml(line) : "")).join("\n");
  return `<pre style="font-family: ui-monospace, SFMono-Regular, Consolas, monospace; font-size: 14px; line-height: 1.55; white-space: pre-wrap;">${rows}</pre>`;
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

export async function POST({ request }) {
  const payload = await request.json().catch(() => null);
  if (!payload) {
    return json({ message: "Invalid request body." }, { status: 400 });
  }

  const email = clean(payload.email);
  const details = clean(payload.details);

  if (!email || !details) {
    return json({ message: "Email and project details are required." }, { status: 400 });
  }

  const normalized = {
    name: clean(payload.name),
    email,
    company: clean(payload.company),
    url: clean(payload.url),
    service: clean(payload.service),
    skill: clean(payload.skill),
    location: clean(payload.location),
    timeline: clean(payload.timeline),
    workType: clean(payload.workType),
    hours: clean(payload.hours),
    details
  };

  const lines = [
    "Request for The Web Guy",
    "",
    `Name: ${normalized.name}`,
    `Email: ${normalized.email}`,
    `Company or agency: ${normalized.company}`,
    `Website URL: ${normalized.url}`,
    `Service fit: ${normalized.service}`,
    `Skill area: ${normalized.skill}`,
    `City/location: ${normalized.location}`,
    `Timeline: ${normalized.timeline}`,
    `One-time or ongoing: ${normalized.workType}`,
    `Approximate monthly hours: ${normalized.hours}`,
    "",
    "What needs help:",
    normalized.details
  ];

  const subjectText = "Website work request - The Web Guy";
  const bodyText = lines.join("\n");
  const config = smtpConfig();

  if (!config.to || !config.from || !config.host || !config.username || !config.password) {
    console.error("Contact email is not configured. Set CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL, SMTP_HOST, SMTP_USER, and SMTP_PASSWORD.");
    return json({ message: "The contact form email is not configured yet." }, { status: 503 });
  }

  try {
    await sendSmtpMail({
      ...config,
      replyTo: normalized.email,
      subject: subjectText,
      text: bodyText,
      html: buildHtml(lines)
    });

    return json({
      ok: true,
      mode: "smtp-email",
      request: normalized
    });
  } catch (error) {
    console.error("Contact SMTP delivery failed", error);
    return json({ message: "The request could not be sent. Please try again in a moment." }, { status: 502 });
  }
}
