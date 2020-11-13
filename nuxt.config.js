
require('dotenv').config()
module.exports = {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  loading: {
    color: 'rgb(4, 153, 153)',
    height: '3px',
    throttle: 0
  },
  /*

  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  server: {
    port: process.env.PORT || 8887, // default: 3000
    // host: '0.0.0.0', // default: localhost,
    timing: false
  },
  head: {
    title: process.env.npm_package_name || '',
    // title:"fuck",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' },
      // googlefont只能從連結導入到這
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Acme|Nunito&display=swap' }
    ]
  },
  /*
  ** Global CSS
  */
  //  最先導入的css
  css: [
    // { src: './assets/scss/common/reset.scss', lang: 'scss'},
    'vuetify/dist/vuetify.min.css',
    '~/assets/css/compress/reset.min.css'

  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  //  全局導入
  plugins: [

    '~plugins/vuetify.js',
    '~plugins/component.js',
    '~plugins/firebase.js',
    '~plugins/route.js',
    { src: '~plugins/axios.js', mode: 'client' },
    { src: '~plugins/vuexpersist', mode: 'client' }

  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    //
    // '@nuxtjs/vuetify'
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@neneos/nuxt-animate.css'

  ],
  // styleResources: {
  //   scss: './assets/scss/common/reset.scss'
  // },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:5001'
    // withCredentials: true
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    // extend (config, ctx) {
    //   Run ESLint on save
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
    // loaders: [

    //   {
    //     test: /\.(png|jpe?g|gif|svg)$/,
    //     loader: 'url-loader',
    //     query: {
    //       limit: 1000,
    //       name: 'img/[name].[hash:7].[ext]'
    //     }
    //   }

    // ],
    // vee-validate要加的
    transpile: [
      'vee-validate/dist/rules'
    ],
    vendor: ['vuetify']
  }
}
