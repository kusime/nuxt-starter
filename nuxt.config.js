// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    STARTER: "Running"
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `usePinia()`
          'defineStore',
          'storeToRefs',
          // 自动引入 `usePinia()` 并重命名为 `usePiniaStore()`
          ['defineStore', 'definePiniaStore']
        ]
      }
    ],
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  // https://html-validator.nuxtjs.org/
  colorMode: {
    classSuffix: ''
  },
  // https://qiita.com/ot_RikuOta/items/bd644957dacbac057a05#%E3%83%AC%E3%82%A4%E3%82%A2%E3%82%A6%E3%83%88%E3%82%92%E4%BD%9C%E6%88%90
  // build: {
  // transpile: ['vuetify']
  // },
  tailwindcss: {
    cssPath: '~/assets/main.css'
  },
  // css: [
  //   'vuetify/lib/styles/main.sass'
  //   // "~/assets/transition.css"
  // ],
  // https://v8.i18n.nuxtjs.org/getting-started/basic-usage/
  i18n: {
    vueI18n: {
      legacy: false,
      locale: 'en',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        fr: {
          welcome: 'Bienvenue'
        }
      }
    }
  },
  app: {
    // https://nuxt.com/docs/getting-started/transitions#layout-transitions
    // about the mode :  https://vuejs.org/guide/built-ins/transition.html#transition-modes
    // layoutTransition: { name: 'fade', mode: 'out-in' },
    pageTransition: { name: 'bounce', mode: 'out-in' }
  },
  // https://nuxt.com/docs/guide/directory-structure/composables#how-files-are-scanned
  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      'composables/**'
    ]
  },
  nitro: {
    storage: {
      'redis': {
        driver: 'redis',
        /* redis connector options */
        port: 6379, // Redis port
        host: "127.0.0.1", // Redis host
        // username: "myredis", // needs Redis >= 6
        // password: "mypassword",
        db: 0, // Defaults to 0
        // tls: {} // tls/ssl
      }
    }
  }
})
