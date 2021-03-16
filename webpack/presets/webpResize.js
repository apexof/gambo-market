const { fileLoader, resizeLoader, webpLoader, } = require("../loaders")

const preset = () => ({
    test: /\.(jpe?g|png)$/i,
    use: [
        fileLoader({
            name: "[name]-300w.webp",
            outputPath: "../public/img/webpack/webp/300",
        }),
        webpLoader(),
        fileLoader({
            name: "[name]-300w.[ext]",
            outputPath: "../public/img/webpack/300",
        }),
        resizeLoader({ width: 300, }),
        fileLoader({
            name: "[name].[ext]",
            outputPath: "../public/img/webpack/optimized",
        })
    ],
})

module.exports = preset
