'use strict';

const webpack = require('webpack');
const path = require('path');

/*

import'./src/menu-topic.js';
import'./src/primary-contract.js';
import'./src/residential-roofing.js';
import'./src/result-item.js';
import'./src/roofing-administration.js';
import'./src/send-feedback.js';
import'./src/roofing-styles.js';

require('./src/menu-topic.js');
require('./src/primary-contract.js');
require('./src/residential-roofing.js');
require('./src/result-item.js');
require('./src/roofing-administration.js');
require('./src/send-feedback.js');
require('./src/warranty-contract.js');

*/

module.exports =  {

  mode: 'production',
  entry: './src/application-shell.js',
  output: { path: path.resolve(__dirname, 'dist'), filename: 'application-shell.js' },

  module: {
    rules: [
      { test: /\.html$/,  use: 'html-loader' },
      { test: /\.js$/,    use: 'babel-loader' },
      { test: /\.json$/,  use: 'json-loader' }
    ]
  },
  resolve: {
    alias: {
        Polymer: path.resolve(__dirname, './node_modules/@polymer')
    }
  }

};