import { defineConfig } from "astro/config";

export default defineConfig({
  sitemap: true,
  site: "https://2022.igem.wiki/crete",
  outDir: "./public",
  publicDir: "./static",
});
