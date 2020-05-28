const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        '@comp': path.resolve(__dirname, 'src/components/')
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/index.scss";`
      }
    }
  }
};
