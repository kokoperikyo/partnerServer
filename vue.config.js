module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    config.module
      .rule("worker-loader")
      .test(/\.worker\.js$/i)
      .use("worker-loader")
      .loader("worker-loader")
      .end();
  }
};