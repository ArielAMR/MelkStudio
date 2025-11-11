// @ts-check
import { defineConfig } from 'astro/config';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  vite: {
    plugins: [svgr()],
  },
});