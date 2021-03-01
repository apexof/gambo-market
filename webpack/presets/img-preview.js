const path = require("path")
const { urlLoader, sqipLoader, lqipLoader, } = require("../loaders")

const preset = (isServer) => ({
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: [
        // "cache-loader",
        lqipLoader,
        urlLoader(isServer)
    ],
    exclude: (file) => {
        const filename = path.basename(file)

        return filename.startsWith("_")
    },
})

module.exports = preset
