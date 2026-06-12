import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  build: {
    target: "es2022",
    minify: "esbuild",
    cssMinify: "esbuild",
    sourcemap: false,
    rollupOptions: {
      treeshake: {
        preset: "recommended"
      }
    }
  },
  esbuild: {
    legalComments: "none",
    treeShaking: true
  }
});
