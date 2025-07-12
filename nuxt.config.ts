// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/icon', '@nuxt/fonts'],
  css: ['~/assets/styles/main.scss'],
  components: true,

  fonts: {
    families: [
      { name: 'Space Grotesk', weights: [500, 700], provider: 'google' },
      { name: 'Atkinson Hyperlegible', weights: [400, 700], provider: 'google' },
      { name: 'JetBrains Mono', weights: [400, 500, 700], provider: 'google' }
    ]
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      meta: [
        { name: 'apple-mobile-web-app-title', content: 'Jacob' },
      ],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_variables.scss" as *;'
        }
      }
    }
  }
})