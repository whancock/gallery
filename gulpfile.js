const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');

const concat = require('gulp-concat');

// clean the contents of the distribution directory
gulp.task('clean', function () {
    return del('dist/**/*');
});

// TypeScript compile
gulp.task('compile', ['clean'], function () {
    return gulp
        .src('app/**/*.ts')
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(gulp.dest('dist/app'));
});

gulp.task('index', function() {

    const useref = require('gulp-useref');

    return gulp.src('index.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'));

});

gulp.task('deploy', ['index'], function() {

    const inject = require('gulp-inject');
    var sources = gulp.src(['app/**/*.js'], {read: false, cwd: 'dist/'});

    gulp.src('index.html', {cwd: 'dist/'})
        .pipe(inject(sources))
        .pipe(gulp.dest('dist'))

});

gulp.task('serve', function() {

    const webserver = require('gulp-webserver');

    gulp.src('dist')
        .pipe(webserver({
            livereload: true,
            open: true
        }));

});

gulp.task('build', ['compile', 'index', 'deploy']);
gulp.task('default', ['build']);