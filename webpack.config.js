
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const webpack = require('webpack');
const mode = process.env.NODE_ENV || 'development';
const isProduction = false;

module.exports = {
  mode,
  devServer: {
    historyApiFallback: true,
    port: 3001,
    hot: true
  },
  entry: {
    app: path.join(__dirname,  'index.tsx'),
  },
 
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: ['babel-loader'],
      },
      {
        test: /.css?$/,
        use: ['style-loader','css-loader']
      }
    ],
  },

	output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },

  plugins: [
		new webpack.ProvidePlugin({
      React: 'react',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ErrorOverlayPlugin()
  ],
  devtool: isProduction ?'source-map' : 'inline-source-map'
};
