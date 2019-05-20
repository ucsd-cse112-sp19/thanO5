module.exports = function (config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'components/**/*.js',
      'test/*.test.js',
      'test/utils/*.js',
    ],

    exclude: [
      // 'test/core-hello.test.js',
      // 'test/core-button.test.js',
      'test/core-slider.test.js',
    ],

    preprocessors: {
      '**/components/**/*.js': ['coverage'],
      'test/*.test.js': [],
    },

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      'type': 'lcov',
      'subdir': '.',
      'file': 'lcov.info',
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
    browsers: ['Chrome', 'Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    webpack: {
      devtool: 'inline-source-map', // generate source map
      mode: 'production',
    },
  });
}
