
export const server = () => {
    app.plugins.browsersync.init({
        server: {
            baseDir: app.path.buildFolder
        }
    })
}