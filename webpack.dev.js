const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const workbox = require('workbox-webpack-plugin');

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
    new workbox.GenerateSW({
      swDest: 'service-worker.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: []
    })
  ],
};

module.exports = config;
