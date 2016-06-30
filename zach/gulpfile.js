const gulp = require('gulp');
const del = require('del');
const webpack = require('webpack-stream');
const eslint = require('gulp-eslint');

const paths = {
  html: './app/**/*.html',
  js: './app/js/client.js',
  tests: './test/error_service_test.js'
};

gulp.task('bundle', ['clean'], () => {
  return gulp.src('./app/js/client.js')
    .pipe(webpack({output:{filename: 'bundle.js'}}))
    .pipe(gulp.dest('build'));
});

gulp.task('clean', () => {
  return del('./build/**/*');
});

gulp.task('bundle:test', () => {
  return gulp.src(paths.tests)
    .pipe(webpack({output:{filename: 'test_bundle.js'}}))
    .pipe(gulp.dest('./test'));
});

gulp.task('app-lint', () => {
  gulp.src('./app/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('test-lint', () => {
  gulp.src('./test/**/*_test.js')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint', ['app-lint', 'test-lint']);
gulp.task('default', ['bundle']);
