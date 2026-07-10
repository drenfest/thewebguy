import { spawn } from 'node:child_process';

import { enqueueJob, readDashboardState } from './state.js';

const root = process.cwd();

export async function enqueueRecommendationJob({ runId, recommendation, prompt = '' }) {
  const state = await readDashboardState();
  const existing = state.jobQueue.find((job) => (
    job.type === 'codex_recommendation'
    && ['queued', 'running'].includes(job.status)
    && job.recommendation?.id === recommendation.id
  ));
  if (existing) return existing;

  const job = {
    id: `job-${Date.now()}-${recommendation.id}`,
    type: 'codex_recommendation',
    runId,
    recommendation,
    prompt
  };
  await enqueueJob(job);
  await ensureQueueWorker();
  return job;
}

export async function enqueueIndexSubmissionJob({ recommendation, property, url, configPath }) {
  const state = await readDashboardState();
  const existing = state.jobQueue.find((job) => (
    job.type === 'index_submission'
    && ['queued', 'running'].includes(job.status)
    && job.url === url
  ));
  if (existing) return existing;

  const job = {
    id: `job-${Date.now()}-${recommendation.id}`,
    type: 'index_submission',
    recommendation,
    url,
    property,
    configPath
  };
  await enqueueJob(job);
  await ensureQueueWorker();
  return job;
}

export async function ensureQueueWorker() {
  const state = await readDashboardState();
  if (state.worker?.active && state.worker?.pid && isPidRunning(state.worker.pid)) {
    return state.worker.pid;
  }
  const child = spawn('node', ['tools/process-search-console-queue.mjs'], {
    cwd: root,
    detached: true,
    stdio: 'ignore',
    windowsHide: true
  });
  child.unref();
  return child.pid;
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
