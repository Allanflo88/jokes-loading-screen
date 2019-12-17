module.exports = {
    publicPath: './',
    css: {
        requireModuleExtension: false,
        loaderOptions: {
            css: {
                // enable CSS Modules
                modules: true,
            }
        }
    }
};