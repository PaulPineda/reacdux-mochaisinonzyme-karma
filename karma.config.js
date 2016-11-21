var argv = require('yargs').argv;
var path = require('path');

module.exports = function(config){
  config.set({
    // only use a browser for our 'test' browser
    // (other options include Chrome, Firefox, Safari...)
    browsers: ['PhantomJS'],

    // // run once unless --watch flag is passed
    singleRun: !argv.watch,

    // karma frameworks to integrate
    frameworks: ['mocha', 'chai'],

    // display tests legibly
    reporters: ['spec'],

    // include polyfills for babel
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      './node_modules/phantomjs-polyfill/bind-polyfill.js', // unused one for PhantomJS
      './test/**/*.js' // << denotes files to watch for in the tests
    ],

    preprocessors: {
      // precompile these files with webpack, run tests through sourcemap
      ['./test/**/*.js']: ['webpack', 'sourcemap']
    },

    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        root: path.resolve(__dirname, './src'),

        // no need to use file extension
        extensions: ['', '.js', '.jsx', '.json'],

        // required for enzme to work
        alias: { 'sinon': 'sinon/pkg/sinon' }
      },
      module: {
        // don't run babel-loader though the sinon module
        noParse: [
          /node_modules\/sinon\//
        ],
        // run babel-loader for our tests
        loaders: [
          { test: /\.js?$/, exclude: /node_modules/, loader: 'babel' },
          { test: /\.json$/, loader: ' json'}
        ]
      },
      //required for enzyme to work
      externals: {
        'jsdom': 'window',
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
        'react/addons': true
      }
    },
    webpackMiddleware: {
      noInfo: true
    },
    // tell karma all the plugins that have been proposed to being used
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-webpack',
      //'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-sourcemap-loader'
    ]
  });
};
