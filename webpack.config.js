const path = require('path');

module.exports = {
  entry: './node_modules/folktale/index.js',
  mode: "production",
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'folktale.js',
    library: "folktale",
    library: {
      name: 'folktale',
      type: 'umd',
    },
  },
};
