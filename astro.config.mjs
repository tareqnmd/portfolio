import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://tareqnmd.com',
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'viewport',
	},
	build: {
		inlineStylesheets: 'auto',
	},
	compressHTML: true,
	vite: {
		plugins: [tailwindcss()],
	},
});
