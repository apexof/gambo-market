function urlLoader(isServer) {
    // console.log(isServer, "isServer")

    return {
        loader: "url-loader",
        options: {
            limit: 8000,
            outputPath: "../public/img/",
            publicPath: "img/",
            name: "[name].[ext]",
        },
    }
}

module.exports = urlLoader
