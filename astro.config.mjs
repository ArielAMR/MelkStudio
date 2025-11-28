// @ts-check
import { defineConfig } from 'astro/config';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    vite: {
        plugins: [svgr()],
    },
    server: {
        allowedHosts: [
            "pseudophilosophical-overstimulatively-azzie.ngrok-free.dev"
        ]
    }
});