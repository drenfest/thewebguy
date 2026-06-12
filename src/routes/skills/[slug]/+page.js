import { error } from "@sveltejs/kit";
import { skillMap } from "$lib/data/content.js";

export function load({ params }) {
  const skill = skillMap[params.slug];
  if (!skill) {
    error(404, "Skill not found");
  }
  return { skill };
}
