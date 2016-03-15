const gulp = require('gulp');
const babel = require("gulp-babel");
const jasmineBrowser = require('gulp-jasmine-browser');
 
gulp.task("spec", () => {
  return gulp.src(['src/**/*.js', 'spec/**/*_spec.js'])
    .pipe(babel())
    .pipe(jasmineBrowser.specRunner({console: true}))
    .pipe(jasmineBrowser.headless());
});
