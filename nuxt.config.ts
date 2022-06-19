import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/sentry',
	],
	sentry: {
		dsn: 'https://af3e880752dc4d1cbcf629e9c4c10034@o912618.ingest.sentry.io/6513700',
		config: {
			environment: 'staging',
			release: 'meteo-web@0.0.1',
		}
	},
	typescript: {
		typeCheck: true
	}
})
