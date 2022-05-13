// vue.config.js
const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        "@": path.resolve(__dirname, './src/assets'),
        "#": path.resolve(__dirname, './src/services'),
      }
    },
  }
};

