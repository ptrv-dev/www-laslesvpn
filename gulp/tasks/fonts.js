export const fonts_move = () => {
    return app.gulp.src(app.path.src.fonts)
        .pipe(app.gulp.dest(app.path.build.fonts))
}