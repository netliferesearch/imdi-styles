'use strict';
const gulp = require('gulp');
const plumber = require("gulp-plumber");
const rename = require('gulp-rename');
const autoprefixer = require("gulp-autoprefixer");
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const minifycss = require("gulp-minify-css");
const less = require('gulp-less');
const jeditor = require("gulp-json-editor");
const packageJson = require('./package.json');

function cloneAndMovePackage() {
  return gulp.src('./package.json').pipe(jeditor(function(json) {
    json.version = packageJson.version + '-next';
    return json;
  })).pipe(gulp.dest('dist/'));
}

function cloneAndMoveReadme() {
  return gulp.src('./README.md').pipe(gulp.dest('dist/'))
    .pipe(gulp.dest("./dist"));
}

function css() {
  return gulp
    .src(["Styles/global/**/*.less"])
    .pipe(
      plumber({
        errorHandler: function(error) {
          console.log(error.message);
          this.emit("end");
        }
      })
    )
    .pipe(less())
    .pipe(autoprefixer("last 2 versions"))
    .pipe(concat(`main.css`))
    .pipe(gulp.dest("dist/"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(minifycss())
    .pipe(gulp.dest("dist/"));
}

function js() {
  return gulp
    .src("Scripts/app.js")
    .pipe(
      plumber({
        errorHandler: function(error) {
          console.log(error.message);
          this.emit("end");
        }
      })
    )
    .pipe(concat(`main.js`))
    .pipe(gulp.dest("dist/"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(uglify())
    .pipe(gulp.dest("dist/"));
}

function ui() {
  return gulp.src("UI/**/*.*", { base: "./" }).pipe(gulp.dest("dist/"));
}

const build = gulp.parallel(css, js, ui);
const buildNext = gulp.parallel(css, js, ui, cloneAndMovePackage, cloneAndMoveReadme);

exports.css = css;
exports.js = js;
exports.build = build;
exports.default = build;
exports.buildNext = buildNext;
