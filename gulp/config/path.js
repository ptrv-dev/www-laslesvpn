// get the folder name
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

// main paths
const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        files: `${buildFolder}/files`,
        html: `${buildFolder}/`,
        style: `${buildFolder}/css/`,
        script: `${buildFolder}/scripts/`,
        fonts: `${buildFolder}/fonts/`,
        image: `${buildFolder}/img/`,
    },
    src: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/pug/pages/*.pug`,
        style: `${srcFolder}/scss/**/*.scss`,
        script: `${srcFolder}/scripts/**/*.js`,
        fonts: `${srcFolder}/fonts/**/*.{eot,svg,ttf,woff,woff2}`,
        image: `${srcFolder}/img/**/*.{png,jpg,jpeg,svg,ico,gif}`,
    },
    watch: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/pug/**/*.pug`,
        style: `${srcFolder}/scss/**/*.scss`,
        script: `${srcFolder}/scripts/**/*.js`,
        fonts: `${srcFolder}/fonts/**/*.{eot,svg,ttf,woff,woff2}`,
        image: `${srcFolder}/img/**/*.{png,jpg,jpeg,svg,ico,gif}`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}