import react from '@astrojs/react';
import vue from '@astrojs/vue';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	integrations: [react(), vue()],
	vite: {
		plugins: [tailwindcss()],
	},
});
