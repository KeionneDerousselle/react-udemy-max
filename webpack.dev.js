const webpack = require('webpack')
const common = require('./webpack.common')
const merge = require('webpack-merge')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    port: 8080
  },

  devtool: 'eval-source-map',

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader'},

          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: { 
                localIdentName: '[name]__[local]__[hash:base64:5]'
              }
            }
          },

          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-preset-env')({
                  stage: 0
                })
              ]
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({ 
      'process.env.NODE_ENV': JSON.stringify('development') 
    })
  ]
})