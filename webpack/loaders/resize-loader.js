function resizeLoader({ width, }) {
    // console.log(isServer, "isServer")
    // console.log("path")

    return {
        loader: "webpack-image-resize-loader",
        options: { width, },
    }
}

module.exports = resizeLoader
