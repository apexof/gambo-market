const optimizedImages = require("next-optimized-images")
const { img, imgPreview, } = require("./webpack/presets")
const { ImageMin, Copy, } = require("./webpack/plugins")

const config = {
    webpack: (webpackConfig, { isServer, }) => {
        const { module, plugins, } = webpackConfig

        return {
            ...webpackConfig,
            module: {
                ...module,
                rules: [
                    ...module.rules,
                    img, imgPreview(isServer)
                ],
            },
            plugins: [
                ...plugins,
                optimizedImages
                // Copy,
                // ImageMin
            ],
        }
    },
}

module.exports = config
