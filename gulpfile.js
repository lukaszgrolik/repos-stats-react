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

gulp.task('lint', function() {
  return gulp.src('src/**/*')
  .pipe(gp.eslint())
  .pipe(gp.eslint.format())
  .pipe(gp.jshint.reporter('default'));
});

gulp.task('buildJsx', function () {
  browserify({
    entries: 'src/index.jsx',
    extensions: ['.jsx'],
    debug: true,
  })
  .transform(babelify.configure({
    optional: ['es7.decorators'],
  }))
  .bundle()
  .pipe(source('repos-stats.js'))
  .pipe(gulp.dest('dist'));
});

// gulp.task('build', ['buildJsx'])
gulp.task('build', ['lint', 'buildJsx'])

gulp.task('watch', function() {
  gulp.watch('.eslintrc', ['lint']);
  gulp.watch('src/**/*.jsx', ['lint', 'buildJsx']);
});

gulp.task('serve', ['build', 'connect', 'watch']);

gulp.task('default', ['serve']);