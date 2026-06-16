import { json } from "@sveltejs/kit";

const MIN_FORM_AGE_MS = 2500;
const MAX_FORM_AGE_MS = 30 * 60 * 1000;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 8;
const DUPLICATE_WINDOW_MS = 10 * 60 * 1000;
const rateBuckets = new Map();
const duplicateBuckets = new Map();

function clean(value, limit = 1000) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, limit);
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

function hashValue(value) {
  let hash = 5381;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 33) ^ value.charCodeAt(index);
  }
  return (hash >>> 0).toString(36);
}

function botCheck(payload) {
  const honeypot = clean(payload.websiteUrl || payload.companyWebsite || payload._gotcha, 500);
  if (honeypot) return { blocked: true, silent: true, reason: "honeypot" };

  const loadedAt = Number(payload.formLoadedAt);
  const age = Date.now() - loadedAt;
  if (!Number.isFinite(loadedAt) || age < MIN_FORM_AGE_MS) {
    return { blocked: true, status: 400, message: "Please wait a moment, then send the question again.", reason: "too_fast" };
  }

  if (age > MAX_FORM_AGE_MS) {
    return { blocked: true, status: 400, message: "Please reload the page and try again.", reason: "stale_form" };
  }

  const expectedAnswer = Number(payload.challengeA) + Number(payload.challengeB);
  if (!Number.isFinite(expectedAnswer) || Number(payload.challengeAnswer) !== expectedAnswer) {
    return { blocked: true, status: 400, message: "Please answer the quick bot check and try again.", reason: "challenge_failed" };
  }

  return { blocked: false };
}

export async function POST({ request, getClientAddress }) {
  const payload = await request.json().catch(() => null);
  if (!payload) {
    return json({ message: "Invalid request body." }, { status: 400 });
  }

  const botResult = botCheck(payload);
  if (botResult.blocked) {
    if (!botResult.silent) console.warn("FAQ question blocked by bot protection", botResult.reason);
    return json(
      botResult.silent ? { ok: true, mode: "filtered" } : { message: botResult.message || "The question could not be sent." },
      { status: botResult.status || 200 }
    );
  }

  const clientKey = getClientKey(request, getClientAddress);
  if (rateLimitExceeded(clientKey)) {
    console.warn("FAQ question rate limited", clientKey);
    return json({ message: "Too many questions from this connection. Please try again later." }, { status: 429 });
  }

  const normalized = {
    question: clean(payload.question, 500),
    pagePath: clean(payload.pagePath, 300),
    pageTitle: clean(payload.pageTitle, 160),
    pageUrl: clean(payload.pageUrl, 500),
    pageSection: clean(payload.pageSection, 120),
    pageType: clean(payload.pageType, 80)
  };

  if (normalized.question.length < 8) {
    return json({ message: "Please ask a little more of the question." }, { status: 400 });
  }

  const duplicateKey = `${clientKey}:${normalized.pagePath}:${hashValue(normalized.question.toLowerCase())}`;
  if (duplicateSubmission(duplicateKey)) {
    return json({ message: "This question was already received. Please wait before sending it again." }, { status: 409 });
  }

  console.info("FAQ question accepted", {
    pagePath: normalized.pagePath,
    pageType: normalized.pageType,
    questionHash: hashValue(normalized.question.toLowerCase())
  });

  return json({
    ok: true,
    question: normalized
  });
}
