import { json } from '@sveltejs/kit';

import { getDefaultSearchConsoleConfigPath } from '$lib/server/search-console/indexing.js';
import { enqueueIndexSubmissionJob, enqueueRecommendationJob } from '$lib/server/search-console/queue.js';
import { appendRecommendationAction, upsertPageChangeEvent } from '$lib/server/search-console/state.js';

export async function POST({ request }) {
  const payload = await request.json();
  const { action, recommendation, runId, prompt, recommendations } = payload || {};

  if (action === 'run_all') {
    if (!Array.isArray(recommendations) || !recommendations.length) {
      return json({ error: 'Missing recommendations for bulk run.' }, { status: 400 });
    }

    const queuedJobs = [];
    for (const entry of recommendations) {
      if (!entry?.recommendation?.id) continue;
      const result = await queueRecommendationAction({
        action: 'run',
        recommendation: entry.recommendation,
        runId: entry.runId || entry.recommendation.runId || null,
        prompt: ''
      });
      if (result?.job) {
        queuedJobs.push(result.job);
      }
    }

    return json({ ok: true, queued: true, count: queuedJobs.length, jobs: queuedJobs });
  }

  if (!action || !recommendation?.id) {
    return json({ error: 'Missing action or recommendation.' }, { status: 400 });
  }

  if (action === 'ignore') {
    await appendRecommendationAction({
      recommendationId: recommendation.id,
      runId,
      action: 'ignore',
      status: 'completed',
      prompt: null
    });
    return json({ ok: true, queued: false });
  }

  const result = await queueRecommendationAction({
    action,
    recommendation,
    runId,
    prompt
  });

  return json(result);
}

async function queueRecommendationAction({ action, recommendation, runId, prompt }) {
  if (recommendation.executionType === 'index_submission') {
    const job = await enqueueIndexSubmissionJob({
      recommendation,
      url: recommendation.targetUrl || `https://thewebguy.app${recommendation.targetId}`,
      property: recommendation.property || 'sc-domain:thewebguy.app',
      configPath: getDefaultSearchConsoleConfigPath()
    });
    await appendRecommendationAction({
      recommendationId: recommendation.id,
      runId,
      action,
      status: 'queued',
      prompt: prompt || null
    });
    return { ok: true, queued: true, job };
  }

  const job = await enqueueRecommendationJob({
    runId,
    recommendation,
    prompt: action === 'edit_then_run' ? String(prompt || '').trim() : ''
  });
  await appendRecommendationAction({
    recommendationId: recommendation.id,
    runId,
    action,
    status: 'queued',
    prompt: action === 'edit_then_run' ? String(prompt || '').trim() : null
  });

  if (recommendation.targetType === 'page' && String(recommendation.targetId || '').startsWith('/')) {
    await upsertPageChangeEvent({
      id: `page-change-${job.id}`,
      jobId: job.id,
      recommendationId: recommendation.id,
      runId,
      pagePath: recommendation.targetId,
      title: recommendation.title,
      kind: recommendation.kind,
      action,
      status: 'queued',
      queuedAt: new Date().toISOString(),
      prompt: action === 'edit_then_run' ? String(prompt || '').trim() : null,
      expectedEffect: recommendation.expectedEffect || null,
      rationale: recommendation.rationale || null,
      watchFor: Array.isArray(recommendation.watchFor) ? recommendation.watchFor : [],
      ownerSummary: recommendation.ownerSummary || null
    });
  }

  return { ok: true, queued: true, job };
}
