import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [],
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
				'@layouts': '/src/layouts',
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
});
