const { resolve } = require('path');

const uniq = require('lodash/uniq');
const pullAll = require('lodash/pullAll');

// eslint-disable-next-line import/no-dynamic-require
const pkg = require(resolve(process.cwd(), 'package.json'));

module.exports = {
  defaults: {
    /**
     * we need to exclude dependencies which are not intended for the browser
     * by listing them here.
     */
    exclude: ['sanitize.css'],

    /**
     * Specify any additional dependencies here. We include core-js and lodash
     * since a lot of our dependencies depend on them and they get picked up by webpack.
     */
    include: ['core-js', '@babel/polyfill', 'lodash'],

    // The path where the DLL manifest and bundle will get built
    path: resolve(__dirname, '../../../build/web/dlls'),
  },

  entry() {
    if (!pkg.dllPlugin) {
      pkg.dllPlugin = {};
    }

    const dependencyNames = Object.keys(pkg.dependencies || {});

    const exclude = pkg.dllPlugin.exclude || this.defaults.exclude;

    const include = pkg.dllPlugin.include || this.defaults.include;

    const includeDependencies = uniq(dependencyNames.concat(include));

    return {
      webDeps: pullAll(includeDependencies, exclude),
    };
  },
};
