const env = require('dotenv');
env.config();

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Delimore FCI',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { 
        charset: 'utf-8' 
      },
      { 
        name: 'viewport', 
      content: 'width=device-width, initial-scale=1' 
      },
      { 
        name: 'format-detection', 
      content: 'telephone=no' 
      },
      //need to fullfil
      {
        hid: 'description',
        name: 'description',
        content: 'One of our lovely dogs',
      },
      { hid: "og:type", property: "og:type", content: "website" },
      {
          hid: 'og:image',
          property: 'og:image',
          content: `/img`,
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: `Delimore FCI`,
      },
      {
        hid: 'og:description',
          property: 'og:description',
          content: 'One of our lovely dogs',
      },
      {
          hid: 'og:url',
          property: 'og:url',
          content: `https://delimore-fci`,
      },
    ],
    link: [
      { 
        rel: 'icon', 
      type: 'image/x-icon', 
      href: '/favicon.png' 
      },
      //need to fullfil
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://bobross.com",
      },

    ]
  },

  server:{
    host: '0.0.0.0',
    port: '3000'
  },

  publicRuntimeConfig: {
    apiUrl: process.env.API_URL.slice(0, -1) || 'http://localhost:1337/'
  },

  serverMiddleware: [
    '~/middleware/redirects.js'
  ],
  

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
    '@nuxtjs/dotenv'
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
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
        httpEndpoint: `${process.env.API_URL.slice(0, -1)}/graphql` || 'http://localhost:1337/graphql'
      }
    }
  },

  

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
