// modules import
import gulp from 'gulp';

// paths import
import { path } from './gulp/config/path.js';

// tasks import
import { plugins } from './gulp/config/plugins.js';
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { pug2html } from './gulp/tasks/pug2html.js';
import { server } from './gulp/tasks/server.js';
import { scss2css } from './gulp/tasks/scss2css.js';
import { scripts } from './gulp/tasks/scripts.js';
import { fonts_move } from './gulp/tasks/fonts.js';
import { imageoptimization } from './gulp/tasks/image.js';
import { deploy } from './gulp/tasks/ghpages.js';


// global variable
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}

// watcher
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, pug2html);
    gulp.watch(path.watch.style, scss2css);
    gulp.watch(path.watch.script, scripts);
    gulp.watch(path.watch.fonts, fonts_move);
    gulp.watch(path.watch.image, imageoptimization);
}


const dev = gulp.series(reset, copy, pug2html, scss2css, scripts, fonts_move, imageoptimization, gulp.parallel(watcher, server));

// default
gulp.task("reset", reset);
gulp.task("deploy", deploy);
gulp.task("default", dev);