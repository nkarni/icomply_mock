export default {
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',
	// Server
	server: {
		host: '0.0.0.0'
	},
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'AI Bidet',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
			{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato&display=swap' },
		],
		script: [
			{ src: 'https://polyfill.io/v3/polyfill.min.js?features=es6', body: true },
		]
	},
	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/scss/style.scss',
	],
	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: '~/plugins/bootstrap.client.js' },
		{ src: '~/plugins/lazysizes.client.js' }
	],
	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,
	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa',
		// https://go.nuxtjs.dev/content
		'@nuxt/content',
		// https://github.com/nuxt-community/robots-module
		'@nuxtjs/robots',
		// https://sitemap.nuxtjs.org/
		'bootstrap-vue/nuxt',
		'nuxt-vue-multiselect'
	],
	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
	],
	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		manifest: {
			lang: 'en'
		}
	},
	// Content module configuration: https://go.nuxtjs.dev/config-content
	content: {

	},
	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		loaders: {
			vue: {
				compilerOptions: {
					whitespace: 'condense',
					preserveWhitespace: false
				}
			},
			sass: {
				implementation: require('sass')
			},
			scss: {
				implementation: require('sass')
			}
		}
	}
}
