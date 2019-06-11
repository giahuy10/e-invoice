
const pkg = require('./package')
const vi = require('./locales/vi.json')
const en = require('./locales/en.json')
const kr = require('./locales/kr.json')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  serverMiddleware: [

    '~/api'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
     '~/assets/scss/main.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-moment'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    [ 'nuxt-i18n', {
        locales: [
          {
            code: 'en',
            name: 'English',
            iso: 'en-US'
          },
          {
            code: 'kr',
            name: 'Korean',
            iso: 'kr-KR'
          },
          {
            code: 'vi',
            name: 'Vietnamese',
            iso: 'vi-VN'
          }
        ],
        pages: {
          login: {
            en: '/login', // -> accessible at /about-us (no prefix since it's the default locale)
            kr: '/logeu-in', // -> accessible at /fr/a-propos
            vi: '/dang-nhap'     // -> accessible at /es/sobre
          },
          about: {
            en: '/about-us',
            kr: '/ulie-daehae',
            vi: '/gioi-thieu'
          },
          pricing: {
            en: '/pricing',
            kr: '/gagyeog',
            vi: '/bang-gia'
          },
          einvoice: {
            en: '/e-invoice',
            kr: '/jeonja-inboiseu',
            vi: '/hoa-don-dien-tu'
          }
        },
        strategy: 'prefix_except_default',
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: en,
            kr: kr,
            vi: vi
          }
        },
        detectBrowserLanguage: {
          // If enabled, a cookie is set once a user has been redirected to his
          // preferred language to prevent subsequent redirections
          // Set to false to redirect every time
          useCookie: true,
          // Cookie name
          cookieKey: 'i18n_redirected',
          // Set to always redirect to value stored in the cookie, not just once
          alwaysRedirect: false,
          // If no locale for the browsers locale is a match, use this one as a fallback
          fallbackLocale: null
        },
        seo: true,
      }
    ],
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        //import whole set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        //import 2 icons from set
        // please note this is PRO set in this example,
        // you must have it in your node_modules to actually import
        // {
        //   set: '@fortawesome/pro-regular-svg-icons',
        //   icons: ['faAdjust', 'faArchive']
        // }
      ]
    }]
  ],

  styleResources: {
    scss: [
      '~/assets/scss/vars/*.scss',
      '~/assets/scss/abstracts/_mixins.scss' // use underscore "_" & also file extension ".scss"
      ]
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
