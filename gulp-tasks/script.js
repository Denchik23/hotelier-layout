const gulp = require('gulp')
const plumber = require('gulp-plumber')
const eslint = require('gulp-eslint')
const babel = require('gulp-babel')
const terser = require('gulp-terser')
const sourcemaps = require('gulp-sourcemaps')
const rename = require("gulp-rename")
const gulpIf = require("gulp-if");

const yargs = require('yargs')

const argv = yargs.argv,
    production = !!argv.production;

module.exports = function script() {
  return gulp.src('src/js/main.js')
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(gulpIf(!production, sourcemaps.init()))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(gulpIf(production, terser()))
    .pipe(gulpIf(!production, sourcemaps.write()))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/js'))
}

