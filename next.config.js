const withPlugins = require("next-compose-plugins")
const optimizedImages = require("next-optimized-images")

module.exports = withPlugins([
    [optimizedImages, {
        optimizeImagesInDev: true,
        removeOriginalExtension: true,
        mozjpeg: { quality: 85, },
        webp: {
            preset: "default",
            quality: 85,
        },
    }]
])
