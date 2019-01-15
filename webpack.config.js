const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      },
    ]
  },

  resolve: {
    extensions: [
      '.ts', '.js'
    ]
  },

  externals: [
    nodeExternals()
  ],

  plugins: [
    new webpack.EnvironmentPlugin({
      HOME: process.env.HOME
    })
  ]
};
