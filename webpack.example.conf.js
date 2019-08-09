var path = require('path')
var webpack = require('webpack')
var config = require('../config')
var CopyWebpackPlugin = require('copy-webpack-plugin')

var env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : config.build.env;

var assetsPublicPath = {
  build: config.build.assetsPublicPath,
  dev: config.dev.assetsPublicPath,
};
var isProduction = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging';

module.exports = {
  entry: {
    recaptcha: './static/js/recaptcha.js',
  },
  output: {
    path: path.resolve(__dirname, '../static/js/dist'),
    filename: '[name].min.js',
    publicPath: isProduction ? assetsPublicPath.build : assetsPublicPath.dev,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
  ],
};
