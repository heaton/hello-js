module.exports = function(config) {
  config.set({
    files: [
      'src/**/*.js',
      'spec/**/*_spec.js'
    ],
    frameworks: ['browserify', 'jasmine'],
    preprocessors: {
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
          type: 'html',
          dir: 'coverage'
        }
      ]
    },
    browserify: {
      debug: true,
      transform: ['babelify']
    }
  })
};