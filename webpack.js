const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const workbox = require('workbox-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: ['core-js/fn/promise', 'core-js/fn/array/find', 'whatwg-fetch', './src/index.js'],
  mode: 'production',
  output: {
    path: __dirname + '/dist',
    filename: 'scripts/[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
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
          // MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
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
    // new ExtractCssChunks({
    //   filename: "styles/[name].css",
    //   chunkFilename: "styles/[name].css",
    //   hot: true, // if you want HMR - we try to automatically inject hot reloading but if it's not working, add it to the config
    //   orderWarning: true, // Disable to remove warnings about conflicting order between imports
    //   reloadAll: true, // when desperation kicks in - this is a brute force HMR flag
    //   cssModules: true // if you use cssModules, this can help.
    // }),
    // new MiniCssExtractPlugin({
    //   filename: "styles/[name].css",
    //   chunkFilename: "styles/[name].css"
    // }),
    new CopyWebpackPlugin([
      {
        from: 'public'
      }
    ]),
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
    })
  ],
};

module.exports = config;
