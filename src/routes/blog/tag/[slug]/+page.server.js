import { error } from "@sveltejs/kit";
import { blogTagMap, blogTags } from "$lib/data/content.js";

export function load({ params }) {
  const tag = blogTagMap[params.slug];
  if (!tag) {
    throw error(404, "Blog tag not found");
  }

  const tagWithPosts = blogTags.find((item) => item.slug === tag.slug) || {
    ...tag,
    posts: []
  };

  return { tag: tagWithPosts };
}
