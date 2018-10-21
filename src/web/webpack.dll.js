/**
 * Webpack DLL Generator
 *
 * This profile is used to cache webpack's module
 * contexts for external library and framework type
 * dependencies which will usually not change often enough
 * to warrant building them from scratch every time we use
 * the webpack process.
 */

const { join } = require('path');

const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const dllPlugin = require('./config/dll');

// https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/17#issuecomment-410117974
delete process.env.TS_NODE_PROJECT;

const dllConfig = dllPlugin.defaults;
const outputPath = dllConfig.path;

const extensions = ['.js', '.ts', '.tsx', '.json'];

module.exports = {
  target: 'web',

  mode: 'development',

  devtool: 'eval',

  context: process.cwd(),

  entry: dllPlugin.entry(),

  output: {
    publicPath: '/',
    path: outputPath,
    library: '[name]',
    filename: '[name].dll.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|tsx?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          envName: 'dev',
          cacheDirectory: true,
        },
      },
      {
        // Preprocess our own .css files
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url-loader',
      },
    ],
  },

  plugins: [
    new WebpackBar(),
    new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
    new CleanWebpackPlugin([outputPath], { allowExternal: true }),
    new webpack.DllPlugin({
      name: '[name]',
      path: join(outputPath, '[name].json'),
    }),
  ],

  resolve: {
    extensions,
    mainFields: ['browser', 'jsnext:main', 'main'],
  },

  optimization: {
    minimize: false,
  },

  performance: {
    hints: false,
  },

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dgram: 'empty',
    child_process: 'empty',
  },

  stats: {
    // https://github.com/TypeStrong/ts-loader#transpileonly-boolean-defaultfalse
    warningsFilter: /export .* was not found in/,
  },
};
