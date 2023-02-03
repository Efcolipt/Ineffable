const APP_NAME =
  (process.env.npm_package_name as string).charAt(0).toUpperCase() +
  (process.env.npm_package_name as string).slice(1)

process.env.SECURITY_DEV = String(process.env.NODE_ENV === 'development')

export default defineNuxtConfig({
  srcDir: 'src',
  modules: [
    [
      '@kevinmarrec/nuxt-pwa',
      {
        workbox: {
          enabled: true,
        },
        meta: {
          theme_color: '#222222',
          lang: 'ru-RU',
          nativeUI: true,
          description: 'Ineffable Online Cinema',
          favicon: false,
        },
        manifest: {
          id: '/?standalone=true',
          name: 'Ineffable Online Cinema',
          short_name: 'Ineffable',
          description: '## Setup',
          theme_color: '#222222',
          background_color: '#222222',
          lang: 'ru-RU',
        },
      },
    ],
    [
      'nuxt-swiper',
      {
        styleLang: 'scss',
        modules: ['lazy', 'navigation', 'autoplay'],
      },
    ],
    [
      'nuxt-purgecss',
      {
        enabled: true,
        safelist: [/.*--.*/],
      },
    ],
    [
      '@nuxtjs/i18n',
      {
        baseUrl: 'https://ineffable-cinema.ru',
        locales: [
          {
            code: 'ru',
            iso: 'ru-RU',
            isCatchallLocale: true,
          },
          {
            code: 'en',
            iso: 'en-US',
          },
        ],
        defaultLocale: 'ru',
        vueI18n: {
          legacy: false,
          fallbackLocale: 'ru',
        },
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          redirectOn: 'root',
        },
      },
    ],
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Roboto: {
            wght: [400, 500, 600],
          },
          Rubik: {
            wght: [600, 700],
          },
        },
      },
    ],
    [
      'nuxt-security',
      {
        hidePoweredBy: false,
      },
    ],
  ],

  experimental: {
    inlineSSRStyles: false,
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    rootTag: 'div',
    head: {
      titleTemplate: `%s | ${APP_NAME}`,
      meta: [
        { 'http-equiv': 'x-ua-compatible', content: 'IE=edge,chrome=1' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        { name: 'HandheldFriendly', content: 'true' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  typescript: {
    shim: false,
    strict: true,
  },

  css: ['@/assets/styles/_config.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_vars.scss" as *;',
        },
      },
    },
  },
})
