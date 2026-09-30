import { error } from "@sveltejs/kit";
import { aiDevelopmentMap } from "$lib/data/ai-development.js";

export function load({ params }) {
  const service = aiDevelopmentMap[params.slug];
  if (!service) error(404, "AI development service not found");
  return { service };
}
