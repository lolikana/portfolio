import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	build: {
		inlineStylesheets: 'auto'
	},
	// scopedStyleStrategy: 'where',
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "@styles/abstracts" as *;`
				}
			}
		},
		resolve: {
			alias: {
				'@components': '/src/components',
				'@functionnal-components': '/src/functionnal-components',
				'@layouts': '/src/layouts',
				'@libs': '/src/libs',
				'@styles': '/src/styles',
				'@scripts': '/src/scripts',
				'@assets': '/src/assets'
			}
		}
	},
	image: {
		domains: ['astro.build'],
		remotePatterns: [{ protocol: 'https' }]
	},
	server: ({ command }) => ({ port: command === 'dev' ? 4321 : 4000, host: true })
	// site: import.meta.env.PROD ? 'https://lolikana.github.io' : undefined,
	// base: import.meta.env.PROD ? '/portfolio' : undefined
});
