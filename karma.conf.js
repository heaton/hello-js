var istanbul = require('browserify-istanbul');

module.exports = function(config) {
  config.set({
    files: [
      'src/**/*.js',
      'spec/**/*_spec.js'
    ],
    frameworks: ['browserify', 'jasmine'],
    preprocessors: {
      'src/**/*.js': ['browserify'],
      'spec/**/*_spec.js': ['browserify']
    },
    //browsers: ['PhantomJS'],
    browsers: ['Chrome'],
    reporters: ['coverage', 'spec', 'failed'],
    coverageReporter: {
      reporters: [
        {
          type: 'text-summary'
        },
        {
          type: 'text',
          dir: 'coverage'
        }
      ]
    },
    browserify: {
      debug: true,
      transform: [['babelify', {
        ignore: /node_modules/
      }], istanbul({
        ignore: ['**/spec/**/*_spec.js', '**/node_modules/**']
      })]
    }
  })
};