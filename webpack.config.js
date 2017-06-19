var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        "common": [
            path.join(__dirname, "./webpack_assets/common/js/snackbar.min.js"),
            path.join(__dirname, "./webpack_assets/common/js/swiper.min.js")
            path.join(__dirname, "./webpack_assets/common/js/jquery.poptrox.min.js"),
            path.join(__dirname, "./webpack_assets/common/js/jquery.scrollex.min.js"),
            path.join(__dirname, "./webpack_assets/common/js/jquery.scrolly.min.js"),
            path.join(__dirname, "./webpack_assets/common/js/jquery.timelify.min.js"),
            path.join(__dirname, "./webpack_assets/common/js/jquery.ripples-min.js"),
            path.join(__dirname, "./webpack_assets/common/js/morphext.min.js"),
            path.join(__dirname, "./webpack_assets/common/js/skel.min.js"),
            path.join(__dirname, "./webpack_assets/common/js/util.js"),
            path.join(__dirname, "./webpack_assets/common/js/big-picture.min.js"),
            path.join(__dirname, "./webpack_assets/common/js/common.js"),
        ],
        "portfolio/app/contact": [
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
            skel: path.join(__dirname, "./webpack_assets/common/js/skel.min.js"),
        }),
    ]
};
