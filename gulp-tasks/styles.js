const gulp = require('gulp')
const gulpIf = require('gulp-if')
const plumber = require('gulp-plumber')
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const rename = require("gulp-rename")
const yargs = require('yargs')

const argv = yargs.argv,
    production = !!argv.production;

module.exports = function styles() {
  return gulp.src('src/styles/*.scss')
    .pipe(plumber())
    .pipe(gulpIf(!production, sourcemaps.init()))
    .pipe(sass())
    .pipe(gulpIf(production, autoprefixer({
      cascade: false,
      grid: true
    })))
    .pipe(gulpIf(production, cleanCSS({
      compatibility: "ie8", level: {
          1: {
              specialComments: 0,
              removeEmpty: true,
              removeWhitespace: true
          },
          2: {
              mergeMedia: true,
              removeEmpty: true,
              removeDuplicateFontRules: true,
              removeDuplicateMediaBlocks: true,
              removeDuplicateRules: true,
              removeUnusedAtRules: false
          }
      }
      },details => {
          console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
      })))
    .pipe(gulpIf(!production, sourcemaps.write()))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/css'))
}

