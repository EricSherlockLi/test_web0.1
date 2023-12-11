const path = require('path');
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src')
      }
    }
  },
  transpileDependencies: true
});
