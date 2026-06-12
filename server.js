import http from "node:http";
import process from "node:process";
import { handler } from "./build/handler.js";

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;

const longLivedAsset = /^\/(?:_app\/immutable\/|fonts\/|images\/|icons\/|favicon(?:-\d+x\d+)?\.(?:ico|png|svg)|apple-touch-icon\.png|site\.webmanifest)/;

function applyAssetCacheHeaders(req, res) {
  if (req.method !== "GET" && req.method !== "HEAD") return;

  let pathname = "/";
  try {
    pathname = new URL(req.url || "/", "http://localhost").pathname;
  } catch {
    return;
  }

  if (longLivedAsset.test(pathname)) {
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  }
}

const server = http.createServer((req, res) => {
  applyAssetCacheHeaders(req, res);

  handler(req, res, (error) => {
    if (error) {
      res.statusCode = error.status || 500;
      res.end(error.message || "Internal Server Error");
      return;
    }

    res.statusCode = 404;
    res.end("Not found");
  });
});

server.listen({ host, port }, () => {
  console.log(`Listening on http://${host}:${port}`);
});

function shutdown() {
  server.close(() => {
    process.exit(0);
  });
}

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
