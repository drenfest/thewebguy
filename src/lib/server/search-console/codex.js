import fs from 'node:fs/promises';
import { openSync } from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

import { toRunId } from '../../search-console/shared.js';
import { codexRunDir, ensureAutomationLocalDir } from './state.js';

const root = process.cwd();

export async function launchCodexForRecommendation({ recommendation, queuedPrompt, jobId }) {
  await ensureAutomationLocalDir();
  const launchedAt = new Date().toISOString();
  const runId = `codex-${toRunId(launchedAt)}-${recommendation.id}`;
  const outputPath = path.join(codexRunDir, `${runId}.txt`);
  const logPath = path.join(codexRunDir, `${runId}.log`);
  const prompt = buildCodexPrompt({ recommendation, queuedPrompt });
  const logFd = openSync(logPath, 'a');

  const child = spawn('codex', [
    'exec',
    '--dangerously-bypass-approvals-and-sandbox',
    '-C',
    root,
    '-o',
    outputPath,
    prompt
  ], {
    detached: true,
    stdio: ['ignore', logFd, logFd],
    windowsHide: true
  });

  child.unref();

  return {
    id: runId,
    jobId,
    recommendationId: recommendation.id,
    pid: child.pid,
    launchedAt,
    prompt,
    outputPath,
    logPath,
    status: 'running'
  };
}

export async function runCodexForRecommendation({ recommendation, queuedPrompt, jobId }) {
  await ensureAutomationLocalDir();
  const launchedAt = new Date().toISOString();
  const runId = `codex-${toRunId(launchedAt)}-${recommendation.id}`;
  const outputPath = path.join(codexRunDir, `${runId}.txt`);
  const logPath = path.join(codexRunDir, `${runId}.log`);
  const prompt = buildCodexPrompt({ recommendation, queuedPrompt });
  const logFd = openSync(logPath, 'a');

  const result = await new Promise((resolve) => {
    const child = spawn('codex', [
      'exec',
      '--dangerously-bypass-approvals-and-sandbox',
      '-C',
      root,
      '-o',
      outputPath,
      prompt
    ], {
      stdio: ['ignore', logFd, logFd],
      windowsHide: true
    });

    child.on('error', (error) => {
      resolve({
        id: runId,
        jobId,
        recommendationId: recommendation.id,
        pid: child.pid,
        launchedAt,
        prompt,
        outputPath,
        logPath,
        status: 'failed',
        error: error.message
      });
    });

    child.on('close', async (code) => {
      resolve({
        id: runId,
        jobId,
        recommendationId: recommendation.id,
        pid: child.pid,
        launchedAt,
        prompt,
        outputPath,
        logPath,
        status: code === 0 ? 'completed' : 'failed',
        exitCode: code,
        finalMessage: await fs.readFile(outputPath, 'utf8').catch(() => null),
        logTail: await fs.readFile(logPath, 'utf8').then((text) => text.slice(-4000)).catch(() => null)
      });
    });
  });

  return result;
}

export async function readCodexRunStatus(run) {
  if (!run) return null;
  const outputExists = await fileExists(run.outputPath);
  const logExists = await fileExists(run.logPath);
  const isRunning = outputExists ? false : isPidRunning(run.pid);
  let finalMessage = null;
  if (outputExists) {
    finalMessage = await fs.readFile(run.outputPath, 'utf8').catch(() => null);
  }
  let logTail = null;
  if (logExists) {
    const logText = await fs.readFile(run.logPath, 'utf8').catch(() => '');
    logTail = logText.slice(-4000);
  }
  return {
    ...run,
    status: outputExists ? 'completed' : isRunning ? 'running' : 'failed',
    completedAt: outputExists ? new Date().toISOString() : run.completedAt || null,
    finalMessage,
    logTail
  };
}

function buildCodexPrompt({ recommendation, queuedPrompt }) {
  const lines = [
    `Implement this Search Console recommendation in ${root}.`,
    '',
    `Recommendation ID: ${recommendation.id}`,
    `Title: ${recommendation.title}`,
    `Kind: ${recommendation.kind}`,
    `Target: ${recommendation.targetId || recommendation.targetType || 'site'}`,
    `Rationale: ${recommendation.rationale}`,
    `Expected effect: ${recommendation.expectedEffect}`,
    `Confidence: ${recommendation.confidence}`,
    '',
    'Requirements:',
    '- Follow reports/search-reporting-playbook.md.',
    '- Avoid thin pages and boilerplate.',
    '- Do not commit or push changes.',
    '- Run the project validation checks after any code or content edits.'
  ];
  if (recommendation.actionPrompt) {
    lines.push('', 'Recommendation-specific guidance:', recommendation.actionPrompt);
  }
  if (queuedPrompt) {
    lines.push('', 'Additional user instruction:', queuedPrompt);
  }
  return lines.join('\n');
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
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
