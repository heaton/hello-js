const gulp = require('gulp');
const Server = require('karma').Server;

gulp.task("spec-browser", (done) => {
  return new Server({
    configFile: __dirname + '/../karma.conf.js',
    singleRun: true
  }, done).start();
});
