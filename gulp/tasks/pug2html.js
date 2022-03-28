import pug from 'gulp-pug';
export const pug2html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(pug())
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream())
}