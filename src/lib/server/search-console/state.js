import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

import { SEARCH_CONSOLE_DAILY_SUBMISSION_LIMIT } from '../../search-console/shared.js';

export const automationId = 'daily-search-console-seo-report';
export const automationLocalDir = path.join(os.homedir(), '.codex', 'automations', automationId);
export const dashboardStatePath = path.join(automationLocalDir, 'dashboard-state.json');
export const codexRunDir = path.join(automationLocalDir, 'codex-runs');

export async function ensureAutomationLocalDir() {
  await fs.mkdir(automationLocalDir, { recursive: true });
  await fs.mkdir(codexRunDir, { recursive: true });
}

export async function readDashboardState() {
  await ensureAutomationLocalDir();
  try {
    const parsed = JSON.parse(await fs.readFile(dashboardStatePath, 'utf8'));
    return normalizeState(parsed);
  } catch {
    return normalizeState({});
  }
}

export async function writeDashboardState(state) {
  await ensureAutomationLocalDir();
  const next = normalizeState(state);
  next.updatedAt = new Date().toISOString();
  await fs.writeFile(dashboardStatePath, JSON.stringify(next, null, 2) + '\n', 'utf8');
  return next;
}

export async function mutateDashboardState(mutator) {
  const state = await readDashboardState();
  const nextState = await mutator(structuredClone(state));
  return writeDashboardState(nextState || state);
}

export function getLatestRecommendationActions(state) {
  const map = new Map();
  for (const action of state.recommendationActions || []) {
    const existing = map.get(action.recommendationId);
    if (!existing || String(action.updatedAt || '') >= String(existing.updatedAt || '')) {
      map.set(action.recommendationId, action);
    }
  }
  return map;
}

export function getDailySubmissionCount(state, isoDate) {
  return (state.indexSubmissions || []).filter((entry) => {
    if (!entry.requestedAt?.startsWith(isoDate)) return false;
    return ['queued', 'submitted', 'succeeded', 'attempted_no_confirmation'].includes(entry.status);
  }).length;
}

export function getDailySubmissionQuota(state, isoDate) {
  const used = getDailySubmissionCount(state, isoDate);
  return {
    limit: SEARCH_CONSOLE_DAILY_SUBMISSION_LIMIT,
    used,
    remaining: Math.max(SEARCH_CONSOLE_DAILY_SUBMISSION_LIMIT - used, 0)
  };
}

export function hasRecentSuccessfulSubmission(state, url, lookbackDays = 14) {
  const cutoff = Date.now() - (lookbackDays * 24 * 60 * 60 * 1000);
  return (state.indexSubmissions || []).some((entry) => (
    entry.url === url
    && ['submitted', 'succeeded', 'attempted_no_confirmation'].includes(entry.status)
    && new Date(entry.requestedAt || 0).getTime() >= cutoff
  ));
}

export async function appendRecommendationAction(action) {
  return mutateDashboardState((state) => {
    state.recommendationActions.push({
      id: `action-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      updatedAt: new Date().toISOString(),
      ...action
    });
    return state;
  });
}

export async function upsertPageChangeEvent(entry) {
  return mutateDashboardState((state) => {
    const index = state.pageChangeEvents.findIndex((item) => (
      item.id === entry.id
      || (entry.jobId && item.jobId === entry.jobId)
    ));
    if (index >= 0) {
      state.pageChangeEvents[index] = {
        ...state.pageChangeEvents[index],
        ...entry,
        updatedAt: new Date().toISOString()
      };
    } else {
      state.pageChangeEvents.push({
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        ...entry
      });
    }
    return state;
  });
}

export async function upsertCodexRun(runRecord) {
  return mutateDashboardState((state) => {
    const index = state.codexRuns.findIndex((run) => run.id === runRecord.id);
    if (index >= 0) {
      state.codexRuns[index] = { ...state.codexRuns[index], ...runRecord, updatedAt: new Date().toISOString() };
    } else {
      state.codexRuns.push({ updatedAt: new Date().toISOString(), ...runRecord });
    }
    return state;
  });
}

export async function upsertIndexSubmission(entry) {
  return mutateDashboardState((state) => {
    const index = state.indexSubmissions.findIndex((item) => item.id === entry.id);
    if (index >= 0) {
      state.indexSubmissions[index] = { ...state.indexSubmissions[index], ...entry, updatedAt: new Date().toISOString() };
    } else {
      state.indexSubmissions.push({ updatedAt: new Date().toISOString(), ...entry });
    }
    return state;
  });
}

export async function enqueueJob(job) {
  return mutateDashboardState((state) => {
    const existing = state.jobQueue.find((entry) => entry.id === job.id);
    if (existing) {
      Object.assign(existing, job, { updatedAt: new Date().toISOString() });
      return state;
    }
    state.jobQueue.push({
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: 'queued',
      ...job
    });
    return state;
  });
}

export async function updateJob(jobId, patch) {
  return mutateDashboardState((state) => {
    const entry = state.jobQueue.find((job) => job.id === jobId);
    if (!entry) return state;
    Object.assign(entry, patch, { updatedAt: new Date().toISOString() });
    return state;
  });
}

export async function updateWorkerState(worker) {
  return mutateDashboardState((state) => {
    state.worker = {
      ...(state.worker || {}),
      ...worker,
      updatedAt: new Date().toISOString()
    };
    return state;
  });
}

function normalizeState(state) {
  return {
    version: 2,
    updatedAt: state.updatedAt || null,
    recommendationActions: Array.isArray(state.recommendationActions) ? state.recommendationActions : [],
    pageChangeEvents: Array.isArray(state.pageChangeEvents) ? state.pageChangeEvents : [],
    codexRuns: Array.isArray(state.codexRuns) ? state.codexRuns : [],
    indexSubmissions: Array.isArray(state.indexSubmissions) ? state.indexSubmissions : [],
    jobQueue: Array.isArray(state.jobQueue) ? state.jobQueue : [],
    worker: state.worker && typeof state.worker === 'object' ? state.worker : {
      active: false,
      pid: null,
      startedAt: null,
      updatedAt: null
    }
  };
}
