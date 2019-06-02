module.exports = function (config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      '../tests/unit/*.test.js',
      '../tests/integration/*.test.js',
    ],

    exclude: [
      '../tests/unit/core-hello.test.js',
      '../tests/unit/core-slider.test.js',
      '../tests/unit/core-button.test.js',
      '../tests/unit/core-badge.test.js',
      '../tests/unit/core-progress.test.js',
      '../tests/unit/core-modal.test.js',
      '../tests/integration/core-button.test.js',
      '../tests/integration/core-badge.test.js',
      '../components/core-modal/core-modal.js',
    ],

    preprocessors: {
      '../components/**/*.js': ['webpack', 'sourcemap'],
      '../tests/unit/*.test.js': ['webpack', 'sourcemap'],
      '../tests/integration/*.test.js': ['webpack', 'sourcemap'],      
    },

    reporters: ['progress', 'coverage-istanbul'],

    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },

    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'], //, 'Firefox'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    client: {
      jasmine: {
        random: false
      }
    },

    // webpack: {
    //   devtool: 'inline-source-map', // generate source map
    //   mode: 'production',
    // },

    webpack: require("./webpack.dev"),
  });
}
