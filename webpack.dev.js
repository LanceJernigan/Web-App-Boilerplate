const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const workbox = require('workbox-webpack-plugin');

const config = {
  entry: ['core-js/fn/promise', 'core-js/fn/array/find', 'whatwg-fetch', './src/index.js'],
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    path: __dirname + '/dist',
    filename: 'scripts/[name].js',
  },
  devServer: {
    publicPath: "/",
    contentBase: './dist',
    compress: true,
    port: 9000,
    historyApiFallback: true,
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
          'style-loader',
          { 
            loader: 'css-loader',
            options: { 
            modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              importLoaders: 1,
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
    new CopyWebpackPlugin([
      {
        from: 'public'
      }
    ]),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new workbox.GenerateSW({
      swDest: 'service-worker.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: []
    })
  ],
};

module.exports = config;
