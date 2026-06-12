import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      $lib: "src/lib"
    },
    serviceWorker: {
      files: (file) =>
        file.startsWith("fonts/") ||
        file.startsWith("icons/") ||
        file === "apple-touch-icon.png" ||
        file === "favicon.ico" ||
        file === "favicon.svg" ||
        file === "favicon-16x16.png" ||
        file === "favicon-32x32.png" ||
        file === "site.webmanifest"
    }
  }
};

export default config;
