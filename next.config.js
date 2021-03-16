const { imgResize, webpResize, imgOptimized, } = require("./webpack/presets")
const { ImageMin, } = require("./webpack/plugins")

const config = {
    webpack: (webpackConfig, { isServer, }) => {
        const { module, plugins, } = webpackConfig

        return {
            ...webpackConfig,
            module: {
                ...module,
                rules: [
                    ...module.rules,
                    // imgResize(),
                    webpResize()
                    // imgOptimized()
                ],
            },
            plugins: [
                ...plugins,
                // Copy,
                ImageMin
            ],
        }
    },
}

module.exports = config
