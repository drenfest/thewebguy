import { env } from "$env/dynamic/public";

export const site = {
  name: "The Web Guy",
  domain: "thewebguy.app",
  rate: "$55/hr",
  titleSuffix: "The Web Guy",
  description:
    "Contract web development, WordPress support, technical SEO implementation, landing pages, website fixes, tracking, ecommerce cleanup, and webmaster support at $55/hr."
};

const fallbackOrigin = "https://thewebguy.app";

function normalizeSiteOrigin(value) {
  const rawOrigin = String(value || fallbackOrigin).trim().replace(/\/+$/, "");
  const originWithProtocol = /^[a-z][a-z\d+\-.]*:\/\//i.test(rawOrigin) ? rawOrigin : `https://${rawOrigin}`;

  try {
    const url = new URL(originWithProtocol);
    url.hostname = url.hostname.replace(/^www\./i, "");
    return url.origin;
  } catch {
    return fallbackOrigin;
  }
}

export const siteOrigin = normalizeSiteOrigin(env.PUBLIC_SITE_URL);

export function shouldUseTrailingSlash(pathname = "/") {
  const cleanPath = pathname.split("?")[0].split("#")[0];
  if (cleanPath === "/" || !cleanPath) return true;

  const lastSegment = cleanPath.split("/").filter(Boolean).pop() || "";
  return !lastSegment.includes(".");
}

export function withCanonicalTrailingSlash(pathname = "/") {
  if (!shouldUseTrailingSlash(pathname) || pathname.endsWith("/")) {
    return pathname || "/";
  }

  return `${pathname}/`;
}

export function absoluteUrl(pathOrUrl = "/") {
  const url = new URL(pathOrUrl, `${siteOrigin}/`);
  url.hostname = url.hostname.replace(/^www\./i, "");

  if (url.origin === siteOrigin && shouldUseTrailingSlash(url.pathname)) {
    url.pathname = withCanonicalTrailingSlash(url.pathname);
  }

  return url.href;
}
