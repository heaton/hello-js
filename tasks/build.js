const del = require('del')
const gulp = require('gulp');
const babel = require("gulp-babel");

gulp.task('clean', () => del('dist'));

gulp.task('babel', () => {
  return gulp.src(['src/**/*.js', 'spec/**/*_spec.js'])
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['clean', 'babel']);
