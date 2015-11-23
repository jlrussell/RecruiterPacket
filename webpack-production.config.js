var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config.js');

/* Configure strip loader for production */
var stripLoader = {
    test: [/\.js$/],
    exclude: /node_modules/,
    loader: WebpackStrip.loader('console.log')
}

/* Add Strip Loader */
devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;