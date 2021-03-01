const { img, imgPreview, } = require("./webpack/presets")

module.exports = {
    webpack: (config, options) => {
        config.module.rules.push(img)
        config.module.rules.push(imgPreview)
        console.log(config)

        return config
    },
}
