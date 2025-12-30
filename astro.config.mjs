import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
	// Site URL - Required for sitemap, canonical URLs, and OG images
	site: 'https://tareqnmd.com',

	// Prefetch for SPA-like navigation
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'viewport',
	},

	// Build optimizations
	build: {
		inlineStylesheets: 'auto',
	},

	// Compress HTML in production
	compressHTML: true,

	// Vite configuration
	vite: {
		plugins: [tailwindcss()],
	},
});
