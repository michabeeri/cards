var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'target');
var APP_DIR = path.resolve(__dirname, 'src');

var devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: true//JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

var config = {
    devtool: 'source-map',
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json',
        hotUpdateMapFilename: 'hot/hot-update.js.map'
    },
    module : {
        loaders : [
            {
                test : [/\.jsx?/],
                include : APP_DIR,
                loader : 'babel'
            },
            {
                test : /\.json/,
                include : APP_DIR,
                loader: 'json'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        devFlagPlugin
    ],
    watch: true,
    watchOptions: {
        poll: true
    }
};

module.exports = config;
