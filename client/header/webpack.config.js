const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  plugins: [new webpack.ProgressPlugin()],

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [path.join(__dirname, 'src')],
      loader: 'babel-loader'
    }, {
      test: /.css$/,

      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",

        options: {
          sourceMap: true
        }
      }]
    }]
  },

  devServer: {
    open: true,
    host: 'localhost'
  }
}