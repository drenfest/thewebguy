import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: [projectRoot]
    }
  },
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
