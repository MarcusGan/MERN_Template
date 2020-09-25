// const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader',
        type: 'javascript/auto',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
};
