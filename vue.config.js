const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: process.env.NODE_ENV === "development" ? "/view-tube/" : "",
  // configureWebpack: {
  //   plugins: [new GenerateSW()]
  // }
  pwa: {
    name: "ViewTube",
    themeColor: "#3d3c3c"
  }

})
