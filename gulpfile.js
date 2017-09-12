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
