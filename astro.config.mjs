// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Set this to the real domain before going live (used for og:image absolute URLs).
  site: 'https://example.netlify.app',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    layout: 'constrained',
  },
});
