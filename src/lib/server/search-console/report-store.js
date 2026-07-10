import fs from 'node:fs/promises';
import path from 'node:path';

import { dedupeRecommendations, normalizeIsoTimestamp, toRunId } from '../../search-console/shared.js';
import { buildIndexingSnapshot } from './indexing-state.js';
import { getLatestRecommendationActions, readDashboardState } from './state.js';

const root = process.cwd();
const reportsDir = path.join(root, 'reports');
const historyDir = path.join(reportsDir, 'search-history');

export async function readSearchConsoleRuns() {
  const runs = [];
  const historyEntries = await fs.readdir(historyDir, { withFileTypes: true }).catch(() => []);
  for (const entry of historyEntries) {
    if (!entry.isDirectory()) continue;
    const insightsPath = path.join(historyDir, entry.name, 'insights.json');
    const snapshotPath = path.join(historyDir, entry.name, 'snapshot.json');
    const [report, snapshot] = await Promise.all([
      readJson(insightsPath),
      readJson(snapshotPath)
    ]);
    if (!report) continue;
    runs.push(normalizeRun(report, insightsPath, snapshot));
  }

  if (!runs.length) {
    const legacyEntries = await fs.readdir(reportsDir, { withFileTypes: true }).catch(() => []);
    for (const entry of legacyEntries) {
      if (!entry.isFile()) continue;
      if (!/^search-insights-\d{4}-\d{2}-\d{2}\.json$/.test(entry.name)) continue;
      const reportPath = path.join(reportsDir, entry.name);
      const report = await readJson(reportPath);
      if (!report) continue;
      const legacyDate = entry.name.replace('search-insights-', '').replace('.json', '');
      const legacySnapshotPath = path.join(reportsDir, `search-terms-${legacyDate}.json`);
      const snapshot = await readJson(legacySnapshotPath);
      runs.push(normalizeRun(report, reportPath, snapshot));
    }
  }

  return runs.sort((left, right) => String(right.runTimestamp).localeCompare(String(left.runTimestamp)));
}

export async function buildDashboardModel() {
  const [runs, state] = await Promise.all([
    readSearchConsoleRuns(),
    readDashboardState()
  ]);
  const latestActions = getLatestRecommendationActions(state);
  const annotatedRuns = runs.map((run) => ({
    ...run,
    recommendations: (run.recommendations || []).map((recommendation) => ({
      ...recommendation,
      latestAction: latestActions.get(recommendation.id) || null
    }))
  }));

  const latestRecommendations = annotatedRuns[0]?.recommendations || [];
  const activeRecommendations = dedupeRecommendations(
    latestRecommendations.map((recommendation) => ({
      ...recommendation,
      runId: annotatedRuns[0]?.runId || null,
      runTimestamp: annotatedRuns[0]?.runTimestamp || null,
      reportPath: annotatedRuns[0]?.reportPath || null
    }))
  ).filter((recommendation) => recommendation.latestAction?.action !== 'ignore');

  const latestRun = annotateLatestRunWithPageChanges(annotatedRuns[0] || null, annotatedRuns, state);
  if (latestRun) {
    annotatedRuns[0] = latestRun;
  }

  return {
    runs: annotatedRuns,
    latestRun,
    activeRecommendations,
    state,
    indexingCollection: await buildIndexingSnapshot({
      checkedAt: new Date().toISOString(),
      submissionMode: 'manual_only'
    })
  };
}

function normalizeRun(report, reportPath, fullSnapshot) {
  const runTimestamp = normalizeIsoTimestamp(report.runTimestamp || report.generatedAt);
  return {
    runId: report.runId || toRunId(runTimestamp),
    runTimestamp,
    reportPath,
    date: report.date,
    snapshot: fullSnapshot || report.snapshot || null,
    analytics: report.analytics || null,
    journey: report.journey || null,
    opportunityBoard: report.opportunityBoard || null,
    highlights: report.highlights || null,
    comparisons: report.comparisons || null,
    pageComparisons: Array.isArray(report.pageComparisons) ? report.pageComparisons : [],
    queryComparisons: Array.isArray(report.queryComparisons) ? report.queryComparisons : [],
    indexingGaps: report.indexingGaps || null,
    recommendations: Array.isArray(report.recommendations) ? report.recommendations : [],
    confidence: report.confidence || null,
    reportStatus: report.reportStatus || null,
    decisionCriteria: report.decisionCriteria || null,
    watchedSignals: Array.isArray(report.watchedSignals) ? report.watchedSignals : [],
    contentGapAssessment: report.contentGapAssessment || null
  };
}

async function readJson(filePath) {
  try {
    return JSON.parse(await fs.readFile(filePath, 'utf8'));
  } catch {
    return null;
  }
}

function annotateLatestRunWithPageChanges(latestRun, runs, state) {
  if (!latestRun?.snapshot?.pages?.length) return latestRun;
  const pageChangeMap = buildPageChangeMap(runs, state);
  return {
    ...latestRun,
    snapshot: {
      ...latestRun.snapshot,
      pages: latestRun.snapshot.pages.map((page) => ({
        ...page,
        changeHistory: pageChangeMap.get(page.path) || []
      }))
    }
  };
}

function buildPageChangeMap(runs, state) {
  const explicitEvents = Array.isArray(state.pageChangeEvents) ? state.pageChangeEvents : [];
  const derivedEvents = buildDerivedPageChangeEvents(runs, state);
  const combined = [...explicitEvents, ...derivedEvents];
  const deduped = new Map();

  for (const event of combined) {
    if (!event?.pagePath) continue;
    const dedupeKey = event.jobId
      || `${event.runId || 'no-run'}:${event.recommendationId || 'no-rec'}:${event.pagePath}:${event.prompt || ''}`;
    if (!deduped.has(dedupeKey)) {
      deduped.set(dedupeKey, event);
    }
  }

  const map = new Map();
  for (const event of deduped.values()) {
    const enriched = enrichPageChangeEvent(event, runs);
    if (!map.has(enriched.pagePath)) {
      map.set(enriched.pagePath, []);
    }
    map.get(enriched.pagePath).push(enriched);
  }

  for (const events of map.values()) {
    events.sort((left, right) => String(getEventTimestamp(right)).localeCompare(String(getEventTimestamp(left))));
  }

  return map;
}

function buildDerivedPageChangeEvents(runs, state) {
  const recommendationLookup = new Map();
  for (const run of runs) {
    for (const recommendation of run.recommendations || []) {
      recommendationLookup.set(recommendation.id, {
        recommendation,
        runId: run.runId,
        runTimestamp: run.runTimestamp
      });
    }
  }

  const collapsedActions = new Map();
  for (const action of state.recommendationActions || []) {
    const key = `${action.runId || 'no-run'}:${action.recommendationId}:${action.action || 'run'}`;
    const existing = collapsedActions.get(key);
    if (!existing || String(action.updatedAt || '') >= String(existing.updatedAt || '')) {
      collapsedActions.set(key, action);
    }
  }

  return [...collapsedActions.values()]
    .map((action) => {
      const matched = recommendationLookup.get(action.recommendationId);
      const recommendation = matched?.recommendation;
      if (!recommendation || recommendation.targetType !== 'page' || !String(recommendation.targetId || '').startsWith('/')) {
        return null;
      }
      return {
        id: `derived-${action.id || `${action.recommendationId}-${action.updatedAt}`}`,
        recommendationId: action.recommendationId,
        runId: action.runId || matched?.runId || null,
        pagePath: recommendation.targetId,
        title: recommendation.title,
        kind: recommendation.kind,
        action: action.action,
        status: action.status,
        prompt: action.prompt || null,
        queuedAt: action.updatedAt || matched?.runTimestamp || null,
        expectedEffect: recommendation.expectedEffect || null,
        rationale: recommendation.rationale || null,
        watchFor: Array.isArray(recommendation.watchFor) ? recommendation.watchFor : [],
        ownerSummary: recommendation.ownerSummary || null,
        derived: true
      };
    })
    .filter(Boolean);
}

function enrichPageChangeEvent(event, runs) {
  const effectiveAt = event.completedAt || event.startedAt || event.queuedAt || event.createdAt || event.updatedAt || null;
  return {
    ...event,
    timestamp: effectiveAt,
    impact: summarizeEventImpact(event, runs, effectiveAt)
  };
}

function summarizeEventImpact(event, runs, effectiveAt) {
  if (!effectiveAt) {
    return {
      status: 'unavailable',
      summary: 'No reliable timestamp was saved for this change event yet.'
    };
  }

  if (event.status === 'failed') {
    return {
      status: 'failed',
      summary: 'This queued change did not complete, so there is no impact to measure yet.'
    };
  }

  if (!['completed', 'running'].includes(event.status)) {
    return {
      status: 'pending',
      summary: 'Waiting for the change to finish and for a later saved report to show its effect.'
    };
  }

  const observedRun = runs.find((run) => String(run.runTimestamp || '') > String(effectiveAt));
  if (!observedRun) {
    return {
      status: 'pending',
      summary: 'No later saved report exists yet, so this change is still in the watch window.',
      watchFor: event.watchFor || []
    };
  }

  const baselineRun = [...runs]
    .filter((run) => String(run.runTimestamp || '') <= String(effectiveAt))
    .sort((left, right) => String(right.runTimestamp || '').localeCompare(String(left.runTimestamp || '')))[0];

  const observedPage = findPageForRun(observedRun, event.pagePath);
  if (!observedPage) {
    return {
      status: 'unavailable',
      summary: 'A later report exists, but this page was not present in that saved snapshot.'
    };
  }

  const baselinePage = baselineRun ? findPageForRun(baselineRun, event.pagePath) : null;
  if (!baselineRun || !baselinePage) {
    return {
      status: 'observed_partial',
      summary: `A later report on ${observedRun.runTimestamp} exists, but there was no clean pre-change baseline saved for this page.`,
      observedRunTimestamp: observedRun.runTimestamp,
      current: summarizePageTotals(observedPage)
    };
  }

  const delta = {
    impressions: numberDelta(observedPage.totals?.impressions, baselinePage.totals?.impressions),
    clicks: numberDelta(observedPage.totals?.clicks, baselinePage.totals?.clicks),
    ctr: numberDelta(observedPage.totals?.ctr, baselinePage.totals?.ctr, 1),
    position: numberDelta(observedPage.totals?.position, baselinePage.totals?.position, 1)
  };

  return {
    status: 'observed',
    baselineRunTimestamp: baselineRun.runTimestamp,
    observedRunTimestamp: observedRun.runTimestamp,
    baseline: summarizePageTotals(baselinePage),
    current: summarizePageTotals(observedPage),
    delta,
    summary: `Since the nearest pre-change run, this page moved ${formatDelta(delta.impressions, 'impression')}, ${formatDelta(delta.clicks, 'click')}, ${formatDelta(delta.ctr, 'CTR point')}, and ${formatPositionDelta(delta.position)}.`
  };
}

function findPageForRun(run, pagePath) {
  return run?.snapshot?.pages?.find((page) => page.path === pagePath) || null;
}

function summarizePageTotals(page) {
  return {
    impressions: Number(page?.totals?.impressions || 0),
    clicks: Number(page?.totals?.clicks || 0),
    ctr: Number(page?.totals?.ctr || 0),
    position: Number(page?.totals?.position || 0)
  };
}

function numberDelta(currentValue, previousValue, digits = 0) {
  return Number((Number(currentValue || 0) - Number(previousValue || 0)).toFixed(digits));
}

function formatDelta(value, noun) {
  const count = Number(value || 0);
  if (count === 0) return `no ${noun} change`;
  return `${count > 0 ? '+' : ''}${count} ${noun}${Math.abs(count) === 1 ? '' : 's'}`;
}

function formatPositionDelta(value) {
  const numeric = Number(value || 0);
  if (numeric === 0) return 'no average-position change';
  return `${numeric > 0 ? '+' : ''}${numeric} average-position points`;
}

function getEventTimestamp(event) {
  return event.timestamp || event.completedAt || event.startedAt || event.queuedAt || event.createdAt || event.updatedAt || '';
}
