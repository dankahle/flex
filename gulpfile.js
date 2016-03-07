
var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function() {
    gulp.src('app/**/*.less')
        .pipe(less())
        .pipe(autoprefixer({
            //browsers: ['last 2 versions', 'ie >= 10']
        }))
        .pipe(gulp.dest('app'));
});

gulp.task('watch', ['less'], function() {
    gulp.watch('app/**/*.less', ['less']);
})
