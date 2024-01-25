const { src, dest, watch, series } = require("gulp")
const sass = require("gulp-sass")(require("sass"))
// const purgecss = require("gulp-purgecss")

function buildStyles() {
  return src("simple-scss-utilities/**/*.scss")
    .pipe(sass())
    .pipe(dest("src/css"))
}

function watchTask() {
  watch(["simple-scss-utilities/**/*.scss", "*.html"], buildStyles)
}

exports.default = series(buildStyles, watchTask)
