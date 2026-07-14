import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({
      // We keep our own base styles in src/styles/global.css,
      // so we disable Tailwind's injected base import here.
      applyBaseStyles: false,
    }),
  ],
});
