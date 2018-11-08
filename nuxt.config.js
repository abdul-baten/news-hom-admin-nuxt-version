const pkg = require('./package')
const webpack = require('webpack')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'News [Hom]',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#cc3222'
  },

  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'bulma/css/bulma.min.css',
    'vue-material-design-icons/styles.css',
    '~/assets/css/index.scss'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/element-ui' },
    { src: '~/plugins/vue-carousel', ssr: false },
    { src: '~/plugins/vue-scrollto', ssr: false },
    { src: '~/plugins/vue-material-design-icons', ssr: false },
    '@/plugins/firebase/init'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    vendor: ['jquery'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
        moment: 'moment'
      })
    ],

    extend(config, ctx) {
      // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  }
}
