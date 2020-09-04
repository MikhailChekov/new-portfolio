const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style () {
    return gulp.src('./src/**/index.scss')
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error',sass.logError))
    .pipe(gulp.dest('./src/dist'))
}

function watch() {
    browserSync.init({
        server: {
           index: "src/index.html"
        }
    });
    gulp.watch('./src/styles/**/*.scss', style);
    gulp.watch('./src/dist/**/*.css').on('change',browserSync.reload);
    gulp.watch('./src/*.html').on('change',browserSync.reload);
    gulp.watch('./scr/js/**/*.js').on('change', browserSync.reload);
}
exports.style = style;
exports.watch = watch;