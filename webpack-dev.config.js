const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:2992/assets/',
    filename: 'main.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
}
