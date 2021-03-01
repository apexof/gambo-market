const path = require("path")
const { urlLoader, } = require("../loaders")

module.exports = {
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: urlLoader,
    include: (file) => {
        const filename = path.basename(file)

        return filename.startsWith("_")
    },
}
