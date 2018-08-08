module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-tut',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    'tachyons/css/tachyons.min.css',
    // 'tachyons-debug/css/tachyons-debug.min.css',
    '~/assets/main.css'
  ],
  build: {
    vendor: ['axios']
  },
  plugins: ['~/plugins/filters']
};
