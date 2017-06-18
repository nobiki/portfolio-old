var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        "common": [
            path.join(__dirname, "./webpack_assets/common/js/snackbar.min.js"),
            path.join(__dirname, "./webpack_assets/common/js/swiper.min.js")
        ],
        "portfolio/app/contact": [
            path.join(__dirname, "./webpack_assets/portfolio/js/jquery.poptrox.min.js"),
            path.join(__dirname, "./webpack_assets/portfolio/js/jquery.scrollex.min.js"),
            path.join(__dirname, "./webpack_assets/portfolio/js/jquery.scrolly.min.js"),
            path.join(__dirname, "./webpack_assets/portfolio/js/jquery.timelify.min.js"),
            path.join(__dirname, "./webpack_assets/portfolio/js/jquery.ripples-min.js"),
            path.join(__dirname, "./webpack_assets/portfolio/js/morphext.min.js"),
            path.join(__dirname, "./webpack_assets/portfolio/js/skel.min.js"),
            path.join(__dirname, "./webpack_assets/portfolio/js/util.js"),
            path.join(__dirname, "./webpack_assets/portfolio/js/big-picture.min.js"),
            path.join(__dirname, "./webpack_assets/portfolio/js/common.js"),
            path.join(__dirname, "./webpack_assets/portfolio/js/ripple.js"),
            path.join(__dirname, "./webpack_assets/portfolio/js/contact.js")
        ]
    },
    output: {
        filename: "./nobiki/static/[name]/bundle.js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.ProvidePlugin({
            skel: path.join(__dirname, "./webpack_assets/portfolio/js/skel.min.js"),
        }),
    ]
};
