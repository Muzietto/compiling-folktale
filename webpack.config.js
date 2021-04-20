const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: "production",
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
    library: "webpackNumbers",
    library: {
      name: 'webpackNumbers',
      type: 'umd',
    },
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
};
