'use strict';

const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Visualizer = require('webpack-visualizer-plugin');



/*

 new HtmlMinifierPlugin(),
 new UglifyJsPlugin(),

 const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlMinifierPlugin = require('html-minifier-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

import'./src/menu-topic.js';
import'./src/primary-contract.js';
import'./src/residential-roofing.js';
import'./src/result-item.js';
import'./src/roofing-administration.js';
import'./src/send-feedback.js';
import'./src/roofing-styles.js';

require('./src/purchase-order.js');

require('./src/menu-topic.js');
require('./src/primary-contract.js');
require('./src/residential-roofing.js');
require('./src/result-item.js');
require('./src/roofing-administration.js');
require('./src/send-feedback.js');
require('./src/warranty-contract.js');

Polymer is a JavaScript Library. 
Create IDE (Integrated Desktop Environment): Node, Polymer-cli, github. 
Website Applications are Encapsulated Custom Elements & Events built on Web components, a set of web platform APIs. Standards, will work across modern browsers, and can be used with any JavaScript library or framework.

*/

module.exports =  {

  mode: 'production',

  entry: './src/application-shell.js',

  resolve: {
    modules: [ "node_modules", path.resolve(__dirname, 'node_modules') ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'), filename: 'application-shell.js'
  },

  module: {
    rules: [
      { test: /\.html$/,  use: 'html-loader' },
      { test: /\.js$/,    use: 'babel-loader' },
      { test: /\.json$/,  use: 'json-loader' },
    ]
  },

  plugins: [ new BundleAnalyzerPlugin(), new Visualizer() ],

};