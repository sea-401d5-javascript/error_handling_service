'use strict';

var gulp = require('gulp');
var webpack = require('webpack-stream');

const paths = {
  js: __dirname + '/app/**/*.js',
  html: __dirname + '/app/index.html',
  css: __dirname + '/app/style.css'
};

gulp.task('copy', ()=>{
  gulp.src(paths.html)
    .pipe(gulp.dest('./build'));
  gulp.src(paths.css)
    .pipe(gulp.dest('./build'));
});

gulp.task('bundle', ()=>{
  gulp.src(paths.js)
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('bundle:test', () => {
  return gulp.src(__dirname + '/test/test.js')
    .pipe(webpack({
      output: {
        filename: 'test_bundle.js'
      }
    }))
    .pipe(gulp.dest(__dirname + '/test'));
});

gulp.task('build', ['copy', 'bundle']);

gulp.task('default', ['build']);