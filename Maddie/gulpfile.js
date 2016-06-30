'use strict';

const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('bundle:test', () => {
  return gulp.src(__dirname + '/test/service_test.js')
  .pipe(webpack({output:{filename:'test_bundle.js'}}))
  .pipe(gulp.dest('./test'));
});
