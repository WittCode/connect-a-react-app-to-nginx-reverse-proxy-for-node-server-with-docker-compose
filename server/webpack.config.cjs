const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    main: ['webpack-hot-middleware/client?reload=true', './src/client/index.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
    }),
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'SERVER_HOST',
      'SERVER_PORT',
      'SERVER_URL',
      'REVERSE_PROXY_HOST',
      'REVERSE_PROXY_PORT',
      'REVERSE_PROXY_URL'
    ]),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', {'runtime': 'automatic'}]]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};