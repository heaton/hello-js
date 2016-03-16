const gulp = require('gulp');
const jasmine = require('gulp-jasmine-phantom');

gulp.task("spec", () => {
  return gulp.src(['src/**/*.js', 'spec/**/*_spec.js'])
    .pipe(jasmine());
});
