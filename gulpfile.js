const { series, parallel } = require('gulp');

const styles = require('./gulp-tasks/styles')
const html = require('./gulp-tasks/html')
const script = require('./gulp-tasks/script')
const fonts = require('./gulp-tasks/fonts')
const imageMinify = require('./gulp-tasks/imageMinify')
const clean = require('./gulp-tasks/clean')
const serve = require('./gulp-tasks/serve')
/*
const svgSprite = require('./gulp-tasks/svgSprite')
*/

const dev = parallel(html, styles, script, fonts, imageMinify)

module.exports.start = series(
    clean,
    dev,
    serve
);

module.exports.build = series(
    clean,
    dev
);
