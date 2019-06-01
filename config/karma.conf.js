module.exports = function (config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      '../tests/unit/*.test.js',
    ],

    preprocessors: {
      '../components/**/*.js': ['webpack', 'sourcemap'],
      '../tests/unit/*.test.js': ['webpack', 'sourcemap'],      
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
    browsers: ['Chrome', 'Firefox'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // webpack: {
    //   devtool: 'inline-source-map', // generate source map
    //   mode: 'production',
    // },

    webpack: require("./webpack.dev"),
  });
}
