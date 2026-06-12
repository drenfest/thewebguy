import { env } from "$env/dynamic/public";

export const site = {
  name: "The Web Guy",
  domain: "thewebguy.app",
  rate: "$55/hr",
  titleSuffix: "The Web Guy",
  description:
    "Contract web development, WordPress support, technical SEO implementation, landing pages, website fixes, tracking, ecommerce cleanup, and webmaster support at $55/hr."
};

export const siteOrigin = (env.PUBLIC_SITE_URL || "https://thewebguy.app").replace(/\/+$/, "");

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

  if (url.origin === siteOrigin && shouldUseTrailingSlash(url.pathname)) {
    url.pathname = withCanonicalTrailingSlash(url.pathname);
  }

  return url.href;
}
