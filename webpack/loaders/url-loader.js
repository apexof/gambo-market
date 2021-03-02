const path = require("path")

function urlLoader(isServer) {
    // console.log(isServer, "isServer")
    // console.log(path)

    return {
        loader: "url-loader",
        options: {
            limit: 8000,
            outputPath: "../public/img/",
            publicPath: "/img/",
            name: "[name].[ext]",
        },
    }
}

module.exports = urlLoader
