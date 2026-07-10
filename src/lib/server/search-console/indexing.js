import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { buildIndexablePageCatalog } from '../../search-console/page-catalog.js';
import { buildRecommendation, buildRecommendationId, normalizeIsoTimestamp, SEARCH_CONSOLE_DAILY_SUBMISSION_LIMIT, slugifyKey } from '../../search-console/shared.js';
import {
  getDailySubmissionQuota,
  hasRecentSuccessfulSubmission,
  readDashboardState,
  upsertIndexSubmission
} from './state.js';
import {
  buildIndexingSnapshot,
  nextIndexingTarget,
  syncIndexingCollection,
  updateIndexingCollector,
  updateIndexingPage
} from './indexing-state.js';

const siteOrigin = 'https://thewebguy.app';

export function getDefaultSearchConsoleConfigPath() {
  return path.join(os.homedir(), '.codex', 'automations', 'daily-search-console-seo-report', 'search-console.local.json');
}

export async function hasSearchConsoleConfig(configPath = getDefaultSearchConsoleConfigPath()) {
  try {
    await fs.access(configPath);
    return true;
  } catch {
    return false;
  }
}

export async function loadSearchConsoleConfig(configPath = getDefaultSearchConsoleConfigPath()) {
  return JSON.parse(await fs.readFile(configPath, 'utf8'));
}

export async function refreshSearchConsoleAccessToken(config) {
  const response = await fetch(config.tokenUrl || 'https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: required(config.clientId, 'clientId'),
      client_secret: required(config.clientSecret, 'clientSecret'),
      refresh_token: required(config.refreshToken, 'refreshToken'),
      grant_type: 'refresh_token'
    })
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || !payload.access_token) {
    throw new Error(`Search Console OAuth refresh failed (${response.status}): ${payload.error_description || payload.error || response.statusText}`);
  }
  return payload.access_token;
}

export async function runIndexingAudit({
  configPath = getDefaultSearchConsoleConfigPath(),
  runDate,
  runTimestamp,
  submitQualified = false
} = {}) {
  const config = await loadSearchConsoleConfig(configPath);
  const property = config.siteUrl || config.property || 'sc-domain:thewebguy.app';
  const checkedAt = normalizeIsoTimestamp(runTimestamp);
  await syncIndexingCollection({ property, runTimestamp: checkedAt });
  await ensureIndexingCollector(configPath);

  const snapshot = await buildIndexingSnapshot({
    property,
    checkedAt,
    submissionMode: submitQualified ? 'automatic_when_possible' : 'manual_only'
  });

  return {
    ...snapshot,
    access: {
      inspectionApiAvailable: true,
      submissionUiAvailable: false,
      submissionUiGap: 'Automatic Search Console submission is disabled for this workflow. Submit qualifying non-indexed pages manually.'
    },
    quota: {
      limit: SEARCH_CONSOLE_DAILY_SUBMISSION_LIMIT,
      usedBeforeRun: 0,
      remainingAfterRun: SEARCH_CONSOLE_DAILY_SUBMISSION_LIMIT
    },
    recommendations: snapshot.nonIndexedPages
      .filter((page) => !page.qualification?.qualifies)
      .map((page) => buildRecommendation({
        kind: 'indexing_qualification_fix',
        targetType: 'page',
        targetId: page.path,
        title: `Strengthen ${page.path} before another indexing request`,
        rationale: `${page.path} is not indexed, and the local page data still fails qualification checks: ${page.qualification.blockers.join(' ')}`,
        expectedEffect: 'Improve the page so a future indexing request points to a clearer, richer, better-linked asset.',
        confidence: 'high',
        executionType: 'codex',
        actionPrompt: buildQualificationPrompt(page)
      }))
  };
}

export async function collectNextIndexingPage(configPath = getDefaultSearchConsoleConfigPath()) {
  const target = await nextIndexingTarget();
  if (!target) return null;

  const config = await loadSearchConsoleConfig(configPath);
  const property = config.siteUrl || config.property || 'sc-domain:thewebguy.app';
  const accessToken = await refreshSearchConsoleAccessToken(config);

  await updateIndexingPage(target.path, {
    status: 'running',
    inspectionError: null
  });

  try {
    const inspection = await inspectUrl({
      accessToken,
      property,
      url: target.url
    });
    await updateIndexingPage(target.path, {
      status: 'completed',
      inspection,
      inspectionError: null,
      lastCheckedAt: new Date().toISOString()
    });
    return { path: target.path, status: 'completed' };
  } catch (error) {
    await updateIndexingPage(target.path, {
      status: 'error',
      inspectionError: error.message,
      lastCheckedAt: new Date().toISOString()
    });
    return { path: target.path, status: 'error', error: error.message };
  }
}

export async function ensureIndexingCollector(configPath = getDefaultSearchConsoleConfigPath()) {
  const { spawn } = await import('node:child_process');
  const collectorState = await buildIndexingSnapshot({
    checkedAt: new Date().toISOString(),
    submissionMode: 'manual_only'
  });
  const activePid = collectorState.collector?.pid;
  if (collectorState.collector?.active && isPidRunning(activePid)) {
    return activePid;
  }
  const child = spawn('node', ['tools/process-search-console-indexing-collector.mjs', '--config', configPath], {
    cwd: process.cwd(),
    detached: true,
    stdio: 'ignore',
    windowsHide: true
  });
  child.unref();
  await updateIndexingCollector({
    active: true,
    pid: child.pid,
    startedAt: new Date().toISOString()
  });
  return child.pid;
}

export async function submitIndexingUrl({
  configPath = getDefaultSearchConsoleConfigPath(),
  url,
  property,
  recommendationId,
  requestedAt = new Date().toISOString()
}) {
  const config = await loadSearchConsoleConfig(configPath);
  const executablePath = resolveBrowserExecutable(config);
  const userDataDir = config.browserUserDataDir ? path.resolve(config.browserUserDataDir) : null;
  const submissionId = `submit-${slugifyKey(url)}-${requestedAt.replaceAll(':', '-').replaceAll('.', '-')}`;

  if (!executablePath || !userDataDir) {
    const blocked = {
      id: submissionId,
      recommendationId,
      url,
      property,
      requestedAt,
      status: 'blocked_missing_ui',
      reason: 'Missing browserUserDataDir or browser executable path in local Search Console config.'
    };
    await upsertIndexSubmission(blocked);
    return blocked;
  }

  const queued = {
    id: submissionId,
    recommendationId,
    url,
    property,
    requestedAt,
    status: 'queued',
    reason: 'Queued for Search Console UI submission.'
  };
  await upsertIndexSubmission(queued);

  const { chromium } = await import('playwright-core');
  const context = await chromium.launchPersistentContext(userDataDir, {
    executablePath,
    headless: config.browserHeadless ?? true
  });
  const page = context.pages()[0] || await context.newPage();

  try {
    await upsertIndexSubmission({ ...queued, status: 'running', reason: 'Submitting through Search Console UI.' });
    await page.goto(`https://search.google.com/search-console?resource_id=${encodeURIComponent(property)}`, {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });
    if (/accounts\.google\.com/i.test(page.url())) {
      const blocked = {
        ...queued,
        status: 'blocked_login_required',
        reason: 'The configured Chrome profile is not signed into Search Console.'
      };
      await upsertIndexSubmission(blocked);
      return blocked;
    }

    const inspectInput = page.locator('input[aria-label^="Inspect any URL"]');
    await inspectInput.waitFor({ state: 'visible', timeout: 30000 });
    await inspectInput.fill(url);
    await page.locator('button[aria-label="Search"]').click();
    await page.waitForURL(/\/inspect\?/, { timeout: 60000 });
    await page.waitForTimeout(6000);

    const requestButton = page.locator('[aria-label*="Request indexing"]');
    if (!await requestButton.count()) {
      const noButton = {
        ...queued,
        status: 'no_request_button',
        reason: 'The URL inspection page did not expose a request indexing control for this URL.'
      };
      await upsertIndexSubmission(noButton);
      return noButton;
    }

    await requestButton.first().click();
    let confirmed = false;
    try {
      await page.getByText('Indexing requested').waitFor({ state: 'visible', timeout: 30000 });
      confirmed = true;
    } catch {
      try {
        await page.getByText('Requesting indexing').waitFor({ state: 'visible', timeout: 15000 });
        confirmed = true;
      } catch {
        confirmed = false;
      }
    }

    const result = {
      ...queued,
      status: confirmed ? 'submitted' : 'attempted_no_confirmation',
      reason: confirmed
        ? 'Search Console confirmed the indexing request.'
        : 'The request was attempted, but the UI did not expose a confirmation string before timeout.'
    };
    await upsertIndexSubmission(result);
    return result;
  } finally {
    await context.close().catch(() => {});
  }
}

async function inspectUrl({ accessToken, property, url }) {
  const response = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${accessToken}`,
      'content-type': 'application/json'
    },
    signal: AbortSignal.timeout(30000),
    body: JSON.stringify({
      inspectionUrl: url,
      siteUrl: property
    })
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(`URL Inspection API failed for ${url}: ${payload.error?.message || response.statusText}`);
  }
  return payload.inspectionResult?.indexStatusResult || {};
}

function buildQualificationPrompt(page) {
  const blockers = page.qualification.blockers.join(' ');
  return [
    `Review ${page.path} and improve it until it clearly qualifies for indexing submission.`,
    `Current blockers: ${blockers}`,
    'Focus on substantive content, better structure, and explicit internal links from strong parent pages.',
    'Do not create a thin child page just to chase indexing.'
  ].join(' ');
}

function resolveBrowserExecutable(config) {
  const configured = config.browserExecutablePath;
  if (configured) return configured;
  const candidates = [
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
  ];
  return candidates.find((candidate) => existsSync(candidate)) || null;
}

function required(value, name) {
  if (!value) throw new Error(`Missing "${name}" in the local Search Console config.`);
  return value;
}

function isPidRunning(pid) {
  if (!pid) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}
