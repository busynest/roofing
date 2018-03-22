'use strict';

const {resolve} = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputPath = resolve('dist');
const IS_DEV_SERVER = process.argv.find(arg => arg.includes('webpack-dev-server'));

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          // We need to transpile Polymer itself and other ES6 code
          // exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [[
                'env',
                {
                  targets: {browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'not ie <= 11'] },
                  debug: true
                }
              ]],
              plugins: [['transform-object-rest-spread', {useBuiltIns: true}]]
            }
          }
        }
      ]
    },
    plugins: IS_DEV_SERVER ? [] : [
      new CleanWebpackPlugin([outputPath], {verbose: true})
    ]
  };
};