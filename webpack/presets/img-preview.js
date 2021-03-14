const path = require("path")
const { urlLoader, lqipLoader, } = require("../loaders")

const preset = (isServer) => ({
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: [
        lqipLoader,
        urlLoader(isServer)
    ],
    include: (file) => {
        const filename = path.basename(file)

        return filename.startsWith("lqip_")
    },
})

module.exports = preset
