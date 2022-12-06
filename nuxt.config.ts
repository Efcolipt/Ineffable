import pkg from './package.json'
const APP_NAME = "Whisked";

export default defineNuxtConfig({
    srcDir: "src",
    modules: [
        "@nuxt/image-edge",
        "nuxt-purgecss",
        [
            "@nuxtjs/i18n",
            {
                locales: ['ru', 'en'],
                defaultLocale: 'ru',
                vueI18n: {
                    fallbackLocale: 'ru',
                    messages: {
                        ru: {
                            greeting: 'Тест i18n ru'
                        },
                        en: {
                            greeting: 'Test i18n en'
                        }
                    }
                }
            }
        ],
        // [
        //     "@nuxtjs/yandex-metrika", {
        //         id: "91157543",
        //         clickmap: true,
        //         trackLinks: true,
        //         accurateTrackBounce: true,
        //     }
        // ],
        [
            "@nuxtjs/google-fonts", {
                families: {
                    Roboto: {
                        wght: [400, 500, 600],
                    },
                    Rubik: {
                        wght: [600, 700],
                    },
                },
            }
        ],
        [
            'nuxt-security',
            {
                hidePoweredBy: false
            }
        ]
    ],

    runtimeConfig: {
        public: {
            app: {
                APP_NAME,
                DEBUG: process.env.NODE_ENV === "development",
                VERSION: pkg.version,
            },
        },
    },

    routeRules: {
        "/_nuxt/**": { headers: { "cache-control": "s-maxage=0" } },
    },

    app: {
        head: {
            title: APP_NAME,
            titleTemplate: `%s | ${APP_NAME}`,
            meta: [
                { "http-equiv": "x-ua-compatible", content: "true" },
                {
                    name: "viewport",
                    content:
                        "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no",
                },
                { name: "HandheldFriendly", content: "true" },
                {
                    hid: "description",
                    name: "description",
                    content: APP_NAME,
                },
            ],
            link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
        },
    },

    css: ["@/assets/styles/_config.scss"],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/styles/_colors.scss" as *;',
                },
            },
        },
    },
});