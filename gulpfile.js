var gulp = require('gulp');
var watchLess = require('gulp-watch-less2');
var watch = require('gulp-watch');
var less = require('gulp-less');
var concat = require('gulp-continuous-concat');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');

var lessGlobs = 'Styles/global/**/*.less';
var jsGlobs = 'Scripts/app.js';

gulp.task('styles', function () {
  return gulp.src(lessGlobs)
    .pipe(watchLess(lessGlobs, {verbose: true}))
    .pipe(less())
    .pipe(concat('styles.min.css'))
    .pipe(uglifycss())
    .pipe(gulp.dest('Styles/min/'))
});

gulp.task('scripts', function () {
  return gulp.src(jsGlobs)
    .pipe(watch(jsGlobs, {verbose: true}))
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('Scripts/min/'));
});

gulp.task('default', ['scripts', 'styles']);
