var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        "common": [
            path.join(__dirname, "./webpack/common/js/snackbar.min.js"),
            path.join(__dirname, "./webpack/common/js/swiper.min.js"),
            path.join(__dirname, "./webpack/common/js/jquery.poptrox.min.js"),
            path.join(__dirname, "./webpack/common/js/jquery.scrollex.min.js"),
            path.join(__dirname, "./webpack/common/js/jquery.scrolly.min.js"),
            path.join(__dirname, "./webpack/common/js/jquery.timelify.min.js"),
            path.join(__dirname, "./webpack/common/js/jquery.ripples-min.js"),
            path.join(__dirname, "./webpack/common/js/morphext.min.js"),
            path.join(__dirname, "./webpack/common/js/skel.min.js"),
            path.join(__dirname, "./webpack/common/js/util.js"),
            path.join(__dirname, "./webpack/common/js/big-picture.min.js"),
            path.join(__dirname, "./webpack/common/js/common.js"),
        ],
        "portfolio/contact": path.join(__dirname, "./webpack/portfolio/contact/entry.js")
    },
    output: {
        filename: "./nobiki/static/[name]/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({fallback:'style-loader',use:'css-loader'})
            },
        ]
    },
    // Use
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.ProvidePlugin({
            skel: path.join(__dirname, "./webpack/common/js/skel.min.js"),
        }),
        new ExtractTextPlugin("./nobiki/static/[name]/bundle.css")
    ]
};
