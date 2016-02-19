(() => {
    'use strict';

    const gulp = require('gulp');
    const babel = require('gulp-babel');
    const  sourcemaps = require('gulp-sourcemaps');

    gulp.task('build', () => {
        return gulp.src('js/timeline-chart.js')
            .pipe(sourcemaps.init())
            .pipe(babel())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('dist'));
    });

    gulp.task('default', () => {
        return gulp.watch('js/*', ['build']);
    });
})();
