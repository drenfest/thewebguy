#!/usr/bin/env node

const SITE_ORIGIN = "https://thewebguy.app";
const INDEXNOW_KEY = "thewebguy-indexnow-20260613";
const INDEXNOW_ENDPOINT = "https://www.bing.com/indexnow";

const args = new Set(process.argv.slice(2));
const shouldSend = args.has("--send");
const limitArg = [...args].find((arg) => arg.startsWith("--limit="));
const limit = limitArg ? Number(limitArg.split("=")[1]) : undefined;

function usage() {
  console.log(`Usage:
  node tools/ping-indexnow.mjs            Preview IndexNow payload
  node tools/ping-indexnow.mjs --send     Submit sitemap URLs to IndexNow
  node tools/ping-indexnow.mjs --limit=10 Limit URLs for a test run`);
}

if (args.has("--help") || args.has("-h")) {
  usage();
  process.exit(0);
}

function extractUrlsFromSitemap(xml) {
  return [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)]
    .map((match) => match[1].trim())
    .filter((url) => url.startsWith(`${SITE_ORIGIN}/`));
}

async function fetchSitemapUrls() {
  const sitemapUrl = `${SITE_ORIGIN}/sitemap.xml`;
  const response = await fetch(sitemapUrl, {
    headers: {
      "user-agent": "TheWebGuy-IndexNow-Pinger/1.0"
    }
  });

  if (!response.ok) {
    throw new Error(`Could not fetch ${sitemapUrl}: ${response.status} ${response.statusText}`);
  }

  const xml = await response.text();
  const urls = extractUrlsFromSitemap(xml);

  if (!urls.length) {
    throw new Error(`No ${SITE_ORIGIN} URLs found in ${sitemapUrl}`);
  }

  return urls;
}

async function submitIndexNow(urls) {
  const payload = {
    host: new URL(SITE_ORIGIN).host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_ORIGIN}/${INDEXNOW_KEY}.txt`,
    urlList: urls
  };

  if (!shouldSend) {
    console.log("Dry run. Add --send to submit this payload.");
    console.log(JSON.stringify({ endpoint: INDEXNOW_ENDPOINT, payload }, null, 2));
    return;
  }

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=utf-8",
      "user-agent": "TheWebGuy-IndexNow-Pinger/1.0"
    },
    body: JSON.stringify(payload)
  });

  const body = await response.text();
  console.log(`${response.status} ${response.statusText}`);
  if (body.trim()) {
    console.log(body);
  }

  if (![200, 202].includes(response.status)) {
    process.exitCode = 1;
  }
}

try {
  const sitemapUrls = await fetchSitemapUrls();
  const urls = Number.isFinite(limit) && limit > 0 ? sitemapUrls.slice(0, limit) : sitemapUrls;
  await submitIndexNow(urls);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
