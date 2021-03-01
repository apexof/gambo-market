const { img, imgPreview, } = require("./webpack/presets")

const config = {
    webpack: (webpackConfig, { isServer, }) => {
        const { module, } = webpackConfig

        return {
            ...webpackConfig,
            module: {
                ...module,
                rules: [
                    ...module.rules,
                    img, imgPreview(isServer)
                ],
            },
        }
    },
}

module.exports = config
