var gulp = require("gulp"),
  plumber = require("gulp-plumber"),
  rename = require("gulp-rename");
var autoprefixer = require("gulp-autoprefixer");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var minifycss = require("gulp-minify-css");
var less = require("gulp-less");
var jsonModify = require("gulp-json-modify");
var jeditor = require("gulp-json-editor");

var package = require("./package.json");

gulp.task("styles", function() {
  gulp
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
});

gulp.task("scripts", function() {
  gulp
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
});

gulp.task("UI", function() {
  gulp.src("UI/**/*.*", { base: "./" }).pipe(gulp.dest("dist/"));
});

gulp.task("build", ["styles", "scripts", "UI"]);
