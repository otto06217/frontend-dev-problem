'use strict';

const babelify = require('babelify'),
      browserify = require('browserify'),
      gulp = require('gulp'),
      gulpAutoprefixer = require('gulp-autoprefixer'),
      gulpFileInclude = require('gulp-file-include'),
      gulpSass = require('gulp-sass'),
      gulpWebserver = require('gulp-webserver'),
      vinylSourceStream = require('vinyl-source-stream');



function handleError(err) {
  console.error(err);
  this.emit(end);
}



function buildIndex() {
  return gulp.src('index.html')
    .pipe(gulpFileInclude({
      basepath: 'partials/',
    }))
    .pipe(gulp.dest('dist'));
}

function buildJavascripts() {
  return browserify({
    entries: 'scripts/app.js',
    debug: true,
  })
    .transform('babelify', { presets: ['env'] })
    .bundle()
    .pipe(vinylSourceStream('app.js'))
    .pipe(gulp.dest('dist'))
}

function buildStylesheets() {
  return gulp.src('styles/app.scss')
    .pipe(gulpSass().on('error', handleError))
    .pipe(gulpAutoprefixer('last 2 version'))
    .pipe(gulp.dest('dist'))
}

function runServer() {
  return gulp.src('dist')
    .pipe(gulpWebserver({
      port: 7676,
      open: true,
      livereload: true,
      fallback: 'index.html',
    }));
}



gulp.task('build', gulp.parallel(buildIndex, buildJavascripts, buildStylesheets));

gulp.task('watch', function watch(done) {
  gulp.watch('javascripts/**/*.js', buildJavascripts);
  gulp.watch('styles/**/*.{sass,scss}', buildStylesheets);
  gulp.watch(['index.html', 'partials/**/*.html'], buildIndex);

  done();
});

gulp.task('serve', gulp.series('build', 'watch', runServer));
