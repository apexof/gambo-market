function fileLoader({ name, outputPath, }) {
    return {
        loader: "file-loader",
        options: {
            outputPath,
            // outputPath: "../public/img/",
            publicPath: "/img/",
            name,
        },
    }
}

module.exports = fileLoader
