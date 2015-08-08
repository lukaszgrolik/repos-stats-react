// @todo separate sourcemap
// @todo minify bundle

var gulp = require('gulp');
var gp = require('gulp-load-plugins')();
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('connect', function() {
  return gulp.src('./')
  .pipe(gp.webserver({
    host: '0.0.0.0',
    port: 3410,
    // livereload: true
    // fallback: 'index.html',
  }));
});

gulp.task('buildJsx', function () {
  browserify({
    entries: 'src/index.jsx',
    extensions: ['.jsx'],
    debug: true,
  })
  .transform(babelify)
  .bundle()
  .pipe(source('repos-stats.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('build', ['buildJsx'])

gulp.task('watch', function() {
  gulp.watch('src/**/*.jsx', ['buildJsx']);
});

gulp.task('serve', ['build', 'connect', 'watch']);

gulp.task('default', ['serve']);