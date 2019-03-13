const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }, {
      test: /\.html$/,
      exclude: /node_modules/,
      loader: 'html-loader'
    }, {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        'file-loader',
        'image-webpack-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true, // webpack@1.x
            disable: true, // webpack@2.x and newer
          },
        },
      ],
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './public',
    hot: true
  }
};