const path = require("path")

const urlLoader = {
    loader: "url-loader",
    options: {
        limit: 8000,
        name: "[name].[ext]",
        outputPath: "img",
    },
}
module.exports = {
    module: {
        rules: [{
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: urlLoader,
            include: (file) => {
                const filename = path.basename(file)

                return filename.startsWith("_")
            },
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [
                "cache-loader",
                {
                    loader: "sqip-loader",
                    options: {
                        numberOfPrimitives: 20,
                        skipPreviewIfBase64: true,
                    },
                },
                urlLoader
            ],
            exclude: (file) => {
                const filename = path.basename(file)

                return filename.startsWith("_")
            },
        }],
    },
}
