export const SEARCH_CONSOLE_DAILY_SUBMISSION_LIMIT = 10;

export function normalizeIsoTimestamp(value, fallback = new Date().toISOString()) {
  const parsed = new Date(value || fallback);
  if (Number.isNaN(parsed.getTime())) {
    return new Date(fallback).toISOString();
  }
  return parsed.toISOString();
}

export function toRunId(timestamp) {
  return normalizeIsoTimestamp(timestamp).replaceAll(':', '-').replaceAll('.', '-');
}

export function slugifyKey(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 120);
}

export function buildRecommendationId({ kind, targetType = 'site', targetId = 'global', detail = '' }) {
  return [kind, targetType, targetId, detail]
    .map(slugifyKey)
    .filter(Boolean)
    .join('__');
}

export function buildRecommendation(item) {
  return {
    id: buildRecommendationId(item),
    targetType: 'site',
    executionType: 'codex',
    statusHint: null,
    ...item
  };
}

export function dedupeRecommendations(recommendations) {
  const latest = new Map();
  for (const recommendation of recommendations || []) {
    if (!recommendation?.id) continue;
    const existing = latest.get(recommendation.id);
    if (!existing || String(recommendation.runTimestamp || '') >= String(existing.runTimestamp || '')) {
      latest.set(recommendation.id, recommendation);
    }
  }
  return Array.from(latest.values());
}

export function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export function shiftIsoDate(isoDate, deltaDays) {
  const date = new Date(`${isoDate}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + deltaDays);
  return date.toISOString().slice(0, 10);
}
