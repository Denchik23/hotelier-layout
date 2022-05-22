const gulp = require('gulp')
const fileinclude = require('gulp-file-include')

module.exports = function html() {
    return gulp.src('src/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        })).pipe(gulp.dest('build'))
}
