var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        "common": path.join(__dirname, "./webpack/common/entry.js"),
        "portfolio/contact": path.join(__dirname, "./webpack/portfolio/contact/entry.js"),
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
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
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
