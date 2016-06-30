const gulp = require('gulp');
const eslint = require('gulp-eslint');
const webpack = require('webpack-stream');

var files = ['*.js', './app/*.js', './app/js/*.js', './app/js/**/*.js'];

const paths = {
  js: './app/js/client.js',
  tests: './test/service-test.js'
};

gulp.task('lint', () => {
  return gulp.src(files)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('bundle', () => {
  return gulp.src(paths.js)
  .pipe(webpack({
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('./build'));
});

gulp.task('build', ['bundle']);

gulp.task('bundle:test', () => {
  return gulp.src(paths.tests)
  .pipe(webpack({
    output: {
      filename: 'test_bundle.js'
    }
  }))
  .pipe(gulp.dest('./test'));
});
