const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
      ? '/view-tube/'
      : '/',
  pwa: {
    name: "ViewTube",
    themeColor: "#3d3c3c"
  }

})
