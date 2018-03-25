'use strict';

const path = require('path');
require('./src/menu-topic.js');
require('./src/primary-contract.js');
require('./src/residential-roofing.js');
require('./src/result-item.js');
require('./src/roofing-administration.js');
require('./src/send-feedback.js');
require('./src/roofing-styles.js');

const config = {

  mode: 'production',
  entry: './src/application-shell.js',
  output: { path: path.resolve(__dirname, 'dist'), filename: 'application-shell.js' },

  module: {
    rules: [
      { test: /\.html$/,  use: ['text-loader'] },
      { test: /\.js$/,    use: ['babel-loader'] }
    ]
  },

};

module.exports = config;