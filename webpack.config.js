const path = require("path");
const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = {
  entry: path.resolve(__dirname, 'src/main.ts'),
  output: {
    path: path.resolve(__dirname, 'distribution'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts','.js']
  },
  module: {
    rules: [
      // all files with a `.ts` extension will be handled by `ts-loader`
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'distribution'),
    watchContentBase: true,
    port: 9000,
  },
  plugins: [
    new WebpackNotifierPlugin({alwaysNotify: true}),
  ],
};
