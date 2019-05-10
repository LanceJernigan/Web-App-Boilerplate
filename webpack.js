const HtmlWebpackPlugin = require('html-webpack-plugin');
const workbox = require('workbox-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");

const config = {
  entry: ['core-js/fn/promise', 'core-js/fn/array/find', 'whatwg-fetch', './src/index.js'],
  mode: 'production',
  output: {
    path: __dirname + '/dist',
    filename: 'scripts/[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
          vendors: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendor'
          }
      }
    }
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
        test: /\.css$/,
        include: /(src)/,
        use: [
          {
            loader: ExtractCssChunks.loader,
            options: {
              hot: true,
              reloadAll: true
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('precss'),
                ];
              }
            }
          }
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader?name=/images/[name].[ext]'
        ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      {
        from: 'public'
      }
    ]),
    new ExtractCssChunks({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new workbox.GenerateSW({
      swDest: 'service-worker.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: 'http://i.imgur.com/**.{jpg,png}',
          handler: 'cacheFirst',
        },
      ]
    }),
    new CompressionPlugin(),
  ],
};

module.exports = config;
