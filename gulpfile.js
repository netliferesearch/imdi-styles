var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename')
var autoprefixer = require('gulp-autoprefixer')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var minifycss = require('gulp-minify-css')
var less = require('gulp-less')

gulp.task('styles', function () {
  gulp.src(['Styles/global/**/*.less'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message)
        this.emit('end')
      }}))
    .pipe(less())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('public/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('public/'))
})

gulp.task('scripts', function () {
  return gulp.src('Scripts/app.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message)
        this.emit('end')
      }}))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('public/'))
})

gulp.task('UI', function(){
  gulp.src('UI/**/*.*', { base: './' })
  .pipe(gulp.dest('public/'));
});

// ==============================================
//  UNCOMMENT BELOW IN DEVELOPMENT

// var gulp = require('gulp');
// var watchLess = require('gulp-watch-less2');
// var watch = require('gulp-watch');
// var less = require('gulp-less');
// var concat = require('gulp-continuous-concat');
// var uglify = require('gulp-uglify');
// var uglifycss = require('gulp-uglifycss');
//
// var lessGlobs = 'Styles/global/**/*.less';
// var jsGlobs = 'Scripts/app.js';
//
// gulp.task('styles', function () {
//   return gulp.src(lessGlobs)
//     .pipe(watchLess(lessGlobs, {verbose: true}))
//     .pipe(less())
//     .pipe(concat('styles.min.css'))
//     .pipe(uglifycss())
//     .pipe(gulp.dest('Styles/min/'))
// });
//
// gulp.task('scripts', function () {
//   return gulp.src(jsGlobs)
//     .pipe(watch(jsGlobs, {verbose: true}))
//     .pipe(concat('app.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('Scripts/min/'));
// });
//
// gulp.task('default', ['scripts', 'styles']);
