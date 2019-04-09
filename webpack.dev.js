const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  entry: ['core-js/fn/promise', 'core-js/fn/array/find', 'whatwg-fetch', './src/index.js'],
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    path: __dirname + '/build',
    filename: 'js/site.js',
  },
  devServer: {
    publicPath: "/",
    contentBase: './build',
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /(src)/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        include: /(src)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/site.css',
      chunkFilename: '[id].css',
    }),
    new CopyWebpackPlugin([
      {
        from: 'public'
      }
    ]),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = config;
