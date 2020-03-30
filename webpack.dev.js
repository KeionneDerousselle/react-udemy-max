const webpack = require('webpack')
const common = require('./webpack.common')
const merge = require('webpack-merge')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    overlay: true,
    port: 8080
  },

  devtool: 'eval-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /(node_modules)/,
        options: {
          formatter: require('eslint-friendly-formatter'),
          // emitError: true,
          failOnError: true
        }
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
})
