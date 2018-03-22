'use strict';

const {resolve, join} = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');

const config = {

  mode: 'production',

  output: {
    filename: 'roofers.js'
  },

  module: {
    rules: [

      {
        test: /\.html$/,
        use: ['text-loader']
      },

      {
        test: /\.js$/,
        use: ['babel-loader']
      }

    ]
  },


};

module.exports = (env = {}) => merge(env.BROWSERS === 'module' ? moduleConf() : nomoduleConf(), shared(env));

/**
  const outputPath = resolve('dist');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const CleanWebpackPlugin = require('clean-webpack-plugin');
    copyWebcomponents: [{
    from: resolve('./node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js'),
    to: join(OUTPUT_PATH, 'vendor'),
    flatten: true
  }, {
    from: resolve('./node_modules/@webcomponents/webcomponentsjs/webcomponents-lite.js'),
    to: join(OUTPUT_PATH, 'vendor'),
    flatten: true
  }, {
    from: resolve('./node_modules/@webcomponents/webcomponentsjs/webcomponents-sd-ce.js'),
    to: join(OUTPUT_PATH, 'vendor'),
    flatten: true
  }, {
    from: resolve('./node_modules/@webcomponents/webcomponentsjs/webcomponents-hi-sd-ce.js'),
    to: join(OUTPUT_PATH, 'vendor'),
    flatten: true
  }, {
    from: resolve('./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js'),
    to: join(OUTPUT_PATH, 'vendor'),
    flatten: true
  }],
  copyOthers: [{
    from: 'assets/**',
    context: resolve('./src'),
    to: OUTPUT_PATH
  }, {
    from: resolve('./index.html'),
    to: OUTPUT_PATH,
    flatten: true
  }, {
    from: resolve('./manifest.json'),
    to: OUTPUT_PATH,
    flatten: true
  }, {
    from: resolve('./src/application-shell.js'),
    to: OUTPUT_PATH,
    flatten: true
  }, {
    from: resolve('./src/roofing-styles.js'),
    to: OUTPUT_PATH,
    flatten: true
  }, {
    from: resolve('./src/send-feedback.js'),
    to: OUTPUT_PATH,
    flatten: true
  }, {
    from: resolve('./src/residential-roofing.js'),
    to: OUTPUT_PATH,
    flatten: true
  }, {
    from: resolve('./src/menu/menu-topic.js'),
    to: OUTPUT_PATH,
    flatten: true
  }, {
    from: resolve('./src/menu/result-item.js'),
    to: OUTPUT_PATH,
    flatten: true
  }, {
    from: resolve('./src/roofing-menu.js'),
    to: OUTPUT_PATH,
    flatten: true
  }, {
    from: resolve('./src/estimate/roofing-administration.js'),
    to: OUTPUT_PATH,
    flatten: true
  }]
 * */