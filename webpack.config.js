'use strict';

const path = require('path');

const config = {

  mode: 'production',
  entry: './src/application-shell.js',
  output: { path: path.resolve(__dirname, 'dist'), filename: 'roofers.js' },

  module: {
    rules: [
      { test: /\.html$/,  use: ['text-loader'] },
      { test: /\.js$/,    use: ['babel-loader'] }
    ]
  },

};

module.exports = config;