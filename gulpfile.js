var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename')
var autoprefixer = require('gulp-autoprefixer')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var minifycss = require('gulp-minify-css')
var less = require('gulp-less')
var jsonModify = require('gulp-json-modify')
var jeditor = require("gulp-json-editor");

var package = require('./package.json');

gulp.task('package', function() {
  gulp.src(['README.md', 'package.json'])
  .pipe(gulp.dest('dist/'));
});

gulp.task('package-next', function() {
  gulp.src('README.md')
  .pipe(gulp.dest('dist/'));

  gulp.src('./package.json')
  .pipe(jeditor(function(json) {
    json.version = package.version + '-next';
    return json;
  }))
  .pipe(gulp.dest("./dist"));
});

gulp.task('styles', function () {
  gulp.src(['Styles/global/**/*.less'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message)
        this.emit('end')
      }}))
    .pipe(less())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(concat(`main.css`))
    .pipe(gulp.dest('dist/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/'));
});

gulp.task('scripts', function () {
  gulp.src('Scripts/app.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message)
        this.emit('end')
      }}))
    .pipe(concat(`main.js`))
    .pipe(gulp.dest('dist/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

gulp.task('UI', function(){
  gulp.src('UI/**/*.*', { base: './' })
  .pipe(gulp.dest('dist/'));
});

gulp.task('build', ['package', 'styles', 'scripts', 'UI']);
gulp.task('build-next', ['package-next', 'styles', 'scripts', 'UI']);

