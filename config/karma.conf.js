module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      '../tests/unit/*.test.js',
      '../tests/integration/*.test.js',
    ],
    preprocessors: {
      '../components/**/*.js': ['webpack', 'sourcemap'],
      '../tests/unit/*.test.js': ['webpack', 'sourcemap'],
      '../tests/integration/*.test.js': ['webpack', 'sourcemap'],      
    },
    exclude: [
     // '../tests/unit/core-hello.test.js',
     // '../tests/unit/core-slider.test.js',
     // '../tests/unit/core-button.test.js',
     // '../tests/unit/core-badge.test.js',
     // '../tests/unit/core-progress.test.js',
     // '../tests/unit/core-modal.test.js',
     '../tests/unit/core-image.test.js',
     // '../tests/integration/core-hello.test.js',
     // '../tests/integration/core-slider.test.js',
     // '../tests/integration/core-button.test.js',
     // '../tests/integration/core-badge.test.js',
     // '../tests/integration/core-progress.test.js',
     // '../tests/integration/core-modal.test.js',
      '../tests/integration/core-image.test.js',
    ],
    reporters: ['progress', 'coverage-istanbul'],

    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome', 'Firefox'],
    singleRun: true,
    concurrency: Infinity,
    client: {
      jasmine: {
        random: false
      }
    },
    webpack: require("./webpack.dev"),
  });
}
