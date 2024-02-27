import process from 'node:process'
import { version } from './package.json'

const appConfig = {
  APP_NAME: 'Ineffable',
  TARGET: process.env.NODE_ENV,
  DOMAIN: process.env.DOMAIN,
  VERSION: version,
  PORT: Number(process.env.PORT ?? 3000),
  SW: Boolean(process.env.SW ?? false)
}

export default defineNuxtConfig({
  modules: [
    [
      '@nuxtjs/i18n',
      {
        vueI18n: '@/core/i18n.ts',
        defaultLocale: "ru",
        strategy: "prefix_and_default",
        skipSettingLocaleOnNavigate: true,
        langDir: 'locales',
        debug: true,
        detectBrowserLanguage: {
          fallbackLocale: 'ru',
          cookieSecure: true,
          useCookie: true,
        },
        locales: [
          {
            code: "en",
            iso: "en",
            name: "English",
            file: "en.json",
          },
          {
            code: "ru",
            iso: "ru",
            name: "English",
            file: "ru.json",
          },
        ],
      }
    ],
    [
      '@nuxtjs/stylelint-module', 
      {
        eslintPath: '.eslintrc'
      }
    ],
    [
      '@nuxtjs/tailwindcss',
      {
        cssPath: '@/assets/styles/_config.css',
        configPath: './tailwind.config.ts'
      }
    ],
    [
      '@vite-pwa/nuxt',
      {
        strategies: appConfig.SW ? 'injectManifest' : 'generateSW',
        srcDir: appConfig.SW ? 'service-worker' : undefined,
        filename: appConfig.SW ? 'sw.ts' : undefined,
        registerType: 'autoUpdate',
        manifest: {
          name: `${appConfig.APP_NAME} Online Cinema`,
          short_name: appConfig.APP_NAME,
          lang: 'ru-RU',
          theme_color: '#222222',
          description: `${appConfig.APP_NAME} Online Cinema`,
          favicon: true,
          id: '/?standalone=true',
          background_color: '#222222'
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,png,svg,ico}']
        },
        injectManifest: {
          globPatterns: ['**/*.{js,css,html,png,svg,ico}']
        },
        client: {
          installPrompt: true
        },
        devOptions: {
          enabled: false,
          suppressWarnings: true,
          navigateFallback: '/',
          navigateFallbackAllowlist: [/^\/$/],
          type: 'module'
        }
      }
    ],
    'nuxt-swiper',
    'nuxt-simple-sitemap',
    '@nuxtjs/robots',
    '@vueuse/nuxt',
    'nuxt-icons',
    [
      '@nuxtjs/google-fonts', {
        families: {
          Roboto: '100..900',
          Rubik: [600, 700]
        }
      }
    ]
  ],

  devServer: {
    port: appConfig.PORT,
    host: '127.0.0.1'
  },

  site: {
    url: appConfig.DOMAIN
  },

  devtools: { enabled: true },

  // Nuxt config
  srcDir: 'src',

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },

    head: {
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
        {
          name: 'viewport',
          content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'
        },
        { name: 'HandheldFriendly', content: 'True' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  experimental: {
    scanPageMeta: true,
    cookieStore: true,
    typedPages: true,
    watcher: 'parcel'
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    },
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true
    }
  },

  runtimeConfig: {
    public: appConfig,
    INFO_BD: {
      API_KEY: process.env.API_KEY_INFO
    },
    VIDEO_BD: {
      API_KEY: process.env.API_KEY_VIDEO,
      API_PROP: process.env.API_PROP_VIDEO,
      API_BASE_URL: process.env.API_BASE_URL_VIDEO
    }
  },

  css: ['@/assets/styles/_config.css', '@/assets/styles/_media.css']
})
