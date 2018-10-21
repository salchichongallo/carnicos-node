const { existsSync } = require('fs');
const { join, resolve } = require('path');

require('dotenv/config');
const glob = require('glob');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const baseDllPlugin = require('./config/dll');

const extensions = ['.js', '.ts', '.tsx', '.json'];

const dllPlugin = baseDllPlugin.defaults;

const dlls = glob
  .sync(`${dllPlugin.path}/*.dll.js`)
  .map(
    filepath => new AddAssetHtmlPlugin({ filepath, includeSourcemap: false }),
  );

module.exports = {
  target: 'web',

  mode: 'development',

  devtool: 'cheap-module-source-map',

  entry: join(__dirname, 'index.dev.tsx'),

  output: {
    publicPath: '/',
    pathinfo: false,
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
    path: join(__dirname, '../../build/web'),
  },

  module: {
    rules: [
      {
        test: /\.(js|tsx?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              envName: 'dev',
              cacheDirectory: true,
            },
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              experimentalWatchApi: true,
              experimentalFileCaching: true,
              configFile: join(__dirname, './tsconfig.json'),
            },
          },
        ],
      },
      {
        // Preprocess our own .css files
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // Preprocess 3rd party .css files
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url-loader',
      },
    ],
  },

  plugins: [
    ...dependencyHandlers(),
    new Dotenv(),
    new WebpackBar(),
    new webpack.NamedModulesPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({ DEBUG: null, NODE_ENV: 'development' }),
    new CircularDependencyPlugin({
      failOnError: false,
      exclude: /node_modules/,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: join(__dirname, 'app/index.html'),
    }),
    ...dlls,
  ],

  resolve: {
    extensions,
    mainFields: ['browser', 'jsnext:main', 'main'],
    plugins: [
      new TsconfigPathsPlugin({
        extensions,
        configFile: join(__dirname, './tsconfig.json'),
      }),
    ],
  },

  devServer: {
    publicPath: '/',
    hot: true,
    port: 3000,
    quiet: true,
    inline: true,
    noInfo: true,
    overlay: true,
    stats: 'minimal',
    historyApiFallback: true,
  },

  optimization: {
    splitChunks: false,
    removeEmptyChunks: false,
    removeAvailableModules: false,
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

/**
 * Select which plugins to use to optimize the bundle's handling of
 * third party dependencies.
 *
 * @returns {Array} DLL Plugins
 */
function dependencyHandlers() {
  const dllPath = dllPlugin.path;

  const manifestPath = resolve(dllPath, 'webDeps.json');

  if (!existsSync(manifestPath)) {
    console.error(
      'The DLL manifest is missing. Please run `npm run build:dll`',
    );
    process.exit(0);
  }

  return [
    new webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest: require(manifestPath), // eslint-disable-line import/no-dynamic-require
    }),
  ];
}
