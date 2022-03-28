import uglify from 'gulp-uglify';

export const scripts = () => {
    return app.gulp.src(app.path.src.script)
        .pipe(uglify())
        .pipe(app.plugins.rename({suffix: '.min'}))
        .pipe(app.gulp.dest(app.path.build.script))
        .pipe(app.plugins.browsersync.stream())
}