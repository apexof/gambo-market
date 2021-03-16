const { fileLoader, } = require("../loaders")

const preset = () => ({
    test: /\.(jpe?g|png)$/i,
    use: [
        fileLoader({
            name: "[name].[ext]",
            outputPath: "../public/img/webpack/optimized",
        })
    ],
})

module.exports = preset
