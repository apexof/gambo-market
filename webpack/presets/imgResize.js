const { fileLoader, resizeLoader, } = require("../loaders")

const preset = () => ({
    test: /\.(jpe?g|png)$/i,
    use: [
        fileLoader({
            name: "[name]-300w.[ext]",
            outputPath: "../public/img/webpack/300",
        }),
        resizeLoader({ width: 300, })
    ],
})

module.exports = preset
