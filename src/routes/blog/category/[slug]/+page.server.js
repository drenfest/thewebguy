import { error } from "@sveltejs/kit";
import { blogCategories, blogCategoryMap } from "$lib/data/content.js";

export function load({ params }) {
  const category = blogCategoryMap[params.slug];
  if (!category) {
    throw error(404, "Blog category not found");
  }

  const categoryWithPosts = blogCategories.find((item) => item.slug === category.slug) || {
    ...category,
    posts: []
  };

  return { category: categoryWithPosts };
}
