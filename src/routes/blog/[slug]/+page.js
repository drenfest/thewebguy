import { error } from "@sveltejs/kit";
import { blogMap } from "$lib/data/content.js";

export function load({ params }) {
  const post = blogMap[params.slug];
  if (!post) {
    throw error(404, "Post not found");
  }
  return { post };
}
