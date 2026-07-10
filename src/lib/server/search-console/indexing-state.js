import fs from 'node:fs/promises';
import path from 'node:path';

import { buildIndexablePageCatalog } from '../../search-console/page-catalog.js';
import { normalizeIsoTimestamp } from '../../search-console/shared.js';
import { automationLocalDir } from './state.js';

const indexingCollectionPath = path.join(automationLocalDir, 'indexing-collection.json');

export async function readIndexingCollectionState() {
  try {
    const parsed = JSON.parse(await fs.readFile(indexingCollectionPath, 'utf8'));
    return normalizeIndexingCollectionState(parsed);
  } catch {
    return normalizeIndexingCollectionState({});
  }
}

export async function writeIndexingCollectionState(state) {
  const next = normalizeIndexingCollectionState(state);
  next.updatedAt = new Date().toISOString();
  await fs.mkdir(automationLocalDir, { recursive: true });
  await fs.writeFile(indexingCollectionPath, JSON.stringify(next, null, 2) + '\n', 'utf8');
  return next;
}

export async function mutateIndexingCollectionState(mutator) {
  const state = await readIndexingCollectionState();
  const next = await mutator(structuredClone(state));
  return writeIndexingCollectionState(next || state);
}

export async function syncIndexingCollection({ property, runTimestamp }) {
  const catalog = buildIndexablePageCatalog();
  return mutateIndexingCollectionState((state) => {
    state.property = property;
    state.lastSyncedAt = normalizeIsoTimestamp(runTimestamp);
    const byPath = new Map(state.pages.map((page) => [page.path, page]));
    state.pages = catalog.map((page) => {
      const existing = byPath.get(page.path);
      return {
        path: page.path,
        url: page.url,
        type: page.type,
        title: page.title,
        qualification: page.qualification,
        status: existing?.status && existing.status !== 'running' ? existing.status : 'pending',
        lastCheckedAt: existing?.lastCheckedAt || null,
        inspection: existing?.inspection || null,
        inspectionError: existing?.inspectionError || null,
        lastRunTimestamp: normalizeIsoTimestamp(runTimestamp)
      };
    });
    return state;
  });
}

export async function updateIndexingPage(pathname, patch) {
  return mutateIndexingCollectionState((state) => {
    const page = state.pages.find((entry) => entry.path === pathname);
    if (!page) return state;
    Object.assign(page, patch);
    return state;
  });
}

export async function updateIndexingCollector(collectorPatch) {
  return mutateIndexingCollectionState((state) => {
    state.collector = {
      ...(state.collector || {}),
      ...collectorPatch,
      updatedAt: new Date().toISOString()
    };
    return state;
  });
}

export async function nextIndexingTarget() {
  const state = await readIndexingCollectionState();
  return state.pages.find((page) => page.status === 'pending' || page.status === 'error') || null;
}

export async function buildIndexingSnapshot({ property, checkedAt, submissionMode = 'manual_only' }) {
  const state = await readIndexingCollectionState();
  const pages = state.pages.filter((page) => !property || page.url.startsWith('https://thewebguy.app/'));
  const completed = pages.filter((page) => page.status === 'completed');
  const pending = pages.filter((page) => page.status === 'pending' || page.status === 'running');
  const errors = pages.filter((page) => page.status === 'error');
  const nonIndexedPages = completed
    .filter((page) => page.inspection && !isIndexedResult(page.inspection))
    .map((page) => ({
      path: page.path,
      url: page.url,
      type: page.type,
      title: page.title,
      indexed: false,
      inspection: page.inspection,
      inspectionError: null,
      qualification: page.qualification,
      submission: {
        status: page.qualification?.qualifies ? 'manual_review' : 'needs_work_first',
        reason: page.qualification?.qualifies
          ? 'This page qualifies for a manual indexing request in Search Console.'
          : 'This page still fails local qualification checks and should be improved before manual submission.'
      }
    }));

  return {
    stale: pending.length > 0,
    checkedAt: normalizeIsoTimestamp(checkedAt),
    property: property || state.property || 'sc-domain:thewebguy.app',
    source: 'search_console_url_inspection_api_incremental',
    submissionMode,
    collector: state.collector,
    progress: {
      totalPages: pages.length,
      completedPages: completed.length,
      pendingPages: pending.length,
      errorPages: errors.length
    },
    summary: {
      inspectedCount: completed.length,
      inspectionErrorCount: errors.length,
      indexedCount: completed.filter((page) => isIndexedResult(page.inspection)).length,
      nonIndexedCount: nonIndexedPages.length,
      qualifyingNonIndexedCount: nonIndexedPages.filter((page) => page.qualification?.qualifies).length,
      nonQualifyingCount: nonIndexedPages.filter((page) => !page.qualification?.qualifies).length
    },
    nonIndexedPages,
    inspectionErrors: errors.map((page) => ({
      path: page.path,
      url: page.url,
      type: page.type,
      title: page.title,
      error: page.inspectionError
    })),
    pendingPages: pending.map((page) => ({
      path: page.path,
      url: page.url,
      type: page.type,
      title: page.title,
      status: page.status,
      qualification: page.qualification
    }))
  };
}

function normalizeIndexingCollectionState(state) {
  return {
    version: 1,
    property: state.property || null,
    lastSyncedAt: state.lastSyncedAt || null,
    updatedAt: state.updatedAt || null,
    pages: Array.isArray(state.pages) ? state.pages : [],
    collector: state.collector && typeof state.collector === 'object'
      ? state.collector
      : {
        active: false,
        pid: null,
        startedAt: null,
        updatedAt: null
      }
  };
}

function isIndexedResult(result) {
  const normalized = [
    result?.verdict,
    result?.coverageState,
    result?.indexingState
  ].filter(Boolean).join(' ').toLowerCase();

  if (normalized.includes('not indexed')) return false;
  if (normalized.includes('currently not indexed')) return false;
  if (normalized.includes('soft 404')) return false;
  if (normalized.includes('alternate page')) return false;
  if (normalized.includes('blocked')) return false;
  if (normalized.includes('submitted and indexed')) return true;
  if (normalized.includes('indexed')) return true;
  return result?.verdict === 'PASS';
}
