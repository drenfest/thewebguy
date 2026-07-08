export function isContactTarget(href = "") {
  const cleanHref = String(href || "").split("?")[0].split("#")[0].replace(/\/?$/, "/");
  return cleanHref === "/contact/";
}

export function contactSourceType(pathname = "/") {
  const [root, slug] = String(pathname || "/").split("/").filter(Boolean);
  if (!root) return "home";
  if (root === "services") return slug ? "service_detail" : "service_hub";
  if (root === "skills") return slug ? "skill_detail" : "skill_hub";
  if (root === "locations") return slug ? "location_detail" : "location_hub";
  if (root === "blog") return slug ? "blog_post" : "blog_hub";
  if (root === "fix-notes") return slug ? "fix_note" : "fix_notes_hub";
  return root;
}

export function contactHrefWithContext(href = "/contact/", context = {}) {
  if (!isContactTarget(href)) return href;

  const sourcePath = String(context.sourcePath || "").trim();
  if (!sourcePath || isContactTarget(sourcePath)) return href;

  const [pathAndQuery, hash = ""] = String(href).split("#");
  const contactUrl = new URL(pathAndQuery || "/contact/", "https://thewebguy.app");
  const sourceType = context.sourceType || contactSourceType(sourcePath);
  const params = {
    source_path: sourcePath,
    source_type: sourceType,
    source_title: context.sourceTitle,
    source_cta: context.sourceCta
  };

  for (const [key, value] of Object.entries(params)) {
    const cleanValue = String(value || "").replace(/\s+/g, " ").trim();
    if (cleanValue) contactUrl.searchParams.set(key, cleanValue.slice(0, 220));
  }

  return `${contactUrl.pathname}${contactUrl.search}${hash ? `#${hash}` : ""}`;
}
