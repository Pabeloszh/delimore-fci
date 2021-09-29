const env = require('dotenv');
env.config();

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'delimore-fci-front',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  server:{
    host: '0.0.0.0',
    port: '3000'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
  ],
  
  styleResources: {
    scss: [
        '~/assets/scss/variables.scss',
    ]
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:1337/graphql'
      }
    }
  },

  

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
