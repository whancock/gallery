const gulp = require('gulp');

// clean the contents of the distribution directory
/*gulp.task('clean', function () {

 const del = require('del');

    return del('dist/!**!/!*');
});*/


gulp.task('index', function() {

    const useref = require('gulp-useref');

    return gulp.src('index.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['index']);
gulp.task('default', ['build']);