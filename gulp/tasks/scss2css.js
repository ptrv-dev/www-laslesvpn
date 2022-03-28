import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleancss from 'gulp-clean-css';
import ggcmq from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const scss2css = () => {
    return app.gulp.src(app.path.src.style, { sorcemaps: true })
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            grid: true,
            overrideBrowserslist: ["last 3 versions"],
            cascade: true
        }))
        .pipe(ggcmq())
        // uncomment if need expanded duplicate file
        // .pipe(app.gulp.dest(app.path.build.style))
        .pipe(cleancss())
        .pipe(app.plugins.rename({suffix: '.min'}))
        .pipe(app.gulp.dest(app.path.build.style))
        .pipe(app.plugins.browsersync.stream())
}