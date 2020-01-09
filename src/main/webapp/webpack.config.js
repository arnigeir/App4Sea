var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'app4sea_bundle.js',
    path: __dirname + '/dist',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new CopyWebpackPlugin([
      { from: 'src/css', to: 'css/' },
      { from: 'src/static', to: 'static/' },
      { from: 'src/images', to: 'images/' },
      { from: 'src/json', to: 'json/' },
      { from: 'src/favicon.ico' },
    ]),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  devServer: {
    contentBase: __dirname + '/src',
    compress: true,
    port: 9000
  }
};

