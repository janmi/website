var gulp = require('gulp'),
    less = require('gulp-less'),
    pulmber = require('gulp-plumber'),
    changed = require('gulp-changed'),
    browserSync = require("browser-sync"),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('less', function() {
    gulp.src('less/**/*.less')
        .pipe(pulmber())
        .pipe(changed('css', {
            extension: '.css'
        }))
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch('less/**/*.less', ['less']);
});

gulp.task('server', ['less'], function() {
    browserSync.init({
        files: '*',
        server: {
                baseDir: '.'
            }
    });
    gulp.watch('less/**/*.less', ['less']);
    gulp.watch('*.html').on('change', browserSync.reload);
});