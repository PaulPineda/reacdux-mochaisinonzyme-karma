var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    //'webpack/hot/dev-server',
    //'webpack-dev-server/client?http://localhost:8080',
    './src/index.js'
  ],
  resolve: {
    // allows us to import modules as if /src is the root.
    // so you can now do: import Comment from 'components/Comment'
    // rather than: import Comment from '../componenets/Comment'
    root: [
      path.resolve(__dirname, './src')
    ],
    // allows tou to require without the .js at the end of filenames
    // import Component from 'component' vs import Component from 'component.js'
    extensions: [ '', '.js', '.json', '.jsx' ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),//__dirname + '/dist', // same as path: path.resolve(__dirname, 'dist')
    filename: 'bundle.js'
  },
  module:{
    loaders: [
      //telling webpack which loaders we want to use.
      // For now just run the code through the babel-loader.
      // 'babel' is an alias fir babel-loader
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
