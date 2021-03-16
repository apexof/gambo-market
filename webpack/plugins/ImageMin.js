const ImageminPlugin = require("imagemin-webpack-plugin").default
const imageminMozjpeg = require("imagemin-mozjpeg")
const imageminSvgo = require("imagemin-svgo")

module.exports = new ImageminPlugin({
    test: /\.(jpe?g|svg)$/i,
    plugins: [
        imageminMozjpeg({
            quality: 85,
            progressive: true,
        })
        // imageminSvgo()
    ],
})
