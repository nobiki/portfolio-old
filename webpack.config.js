module.exports = {
    entry: {
        // "common": "./nobiki/static/portfolio/assets/js/common.js",
        "theme": [
            "./nobiki/static/portfolio/assets/js/jquery.min.js",
            "./nobiki/static/portfolio/assets/js/jquery.poptrox.min.js",
            "./nobiki/static/portfolio/assets/js/jquery.scrollex.min.js",
            "./nobiki/static/portfolio/assets/js/jquery.scrolly.min.js",
            "./nobiki/static/portfolio/assets/js/jquery.timelify.min.js",
            "./nobiki/static/portfolio/assets/js/common.js",
            "./nobiki/static/portfolio/assets/js/big-picture.min.js",
            "./nobiki/static/portfolio/assets/js/morphext.min.js",
            "./nobiki/static/portfolio/assets/js/skel.min.js",
            "./nobiki/static/portfolio/assets/js/swiper.min.js",
            "./nobiki/static/portfolio/assets/js/util.js",
            "./nobiki/static/portfolio/assets/js/contact.js",
            "./nobiki/static/portfolio/assets/js/ripple.js"
        ],
        // "snackbar": "./nobiki/static/portfolio/assets/js/snackbar.min.js",
        // "contact": "./nobiki/static/portfolio/assets/js/contact.js",
        // "ripple": "./nobiki/static/portfolio/assets/js/ripple.js"
    },
    output: {
        path: __dirname,
        filename: './nobiki/static/portfolio/bundle/bundle.[name].js'
    }
};

