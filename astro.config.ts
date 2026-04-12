import { defineConfig } from 'astro/config';

// Static SSG output deployed to Cloudflare Pages — no server adapter
// needed. Data is fetched client-side from telemetry.comprom.org.
export default defineConfig({
  output: 'static',
  cacheDir: './.astro-cache',
  vite: {
    cacheDir: './.vite-cache',
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});
