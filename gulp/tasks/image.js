import image from "gulp-image";

export const imageoptimization = () => {
    return app.gulp.src(app.path.src.image)
        .pipe(image())
        .pipe(app.gulp.dest(app.path.build.image))
}