const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = new CopyWebpackPlugin({
    patterns: [
        {
            from: "./src/",
            to: "../public/img/min/",
        }
    ],
})
