var Path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './front/index.js',
  output: {
    path: Path.join(__dirname, 'front', 'dist'),
    publicPath: 'http://localhost:8081/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: Path.join(__dirname, 'front'),
      loader: 'babel-loader'
    }]
  }
};
