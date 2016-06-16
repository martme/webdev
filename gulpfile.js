var gulp = require('gulp'),
gutil = require('gulp-util'),
sass = require('gulp-sass'),
connect = require('gulp-connect');

var jsSources = ['www/scripts/*.js'],
    sassSources = ['www/styles/*.scss'],
    htmlSources = ['**/*.html']

gulp.task('sass', function() {
    gulp.src(sassSources)
    .pipe(sass({style: 'expanded'}))
        .on('error', gutil.log)
    .pipe(gulp.dest('www/styles'))
    .pipe(connect.reload())
});

gulp.task('js', function() {
    gulp.src(jsSources)
    .pipe(connect.reload())
});

gulp.task('watch', function() {
    gulp.watch(jsSources, ['js']);
    gulp.watch(sassSources, ['sass']);
    gulp.watch(htmlSources, ['html']);
});

gulp.task('connect', function() {
    connect.server({
        root: 'www',
        livereload: true
    })
});

gulp.task('html', function() {
    gulp.src(htmlSources)
    .pipe(connect.reload())
});

gulp.task('default', ['html', 'js', 'sass', 'connect', 'watch']);
