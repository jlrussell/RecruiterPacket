var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports ={
    entry: {
        bundle: './src/index.js',
        testBundle: './test/index.js'
    },
    output: {
        path: path.resolve('bundle/'),
        publicPath: '/assets/',
        filename: "[name].js"
    },
    plugins: [
        new ExtractTextPlugin("bundle.css"),
        new webpack.BannerPlugin("*******\nThis is the standard Webpack Package created by Bill Bensing (bill.bensing@daugherty.com)\n*******\n")
    ],
        devServer: {
        contentBase: 'src'
    },
    module:{
        preLoaders:[
            { test: /\.js$/, exclude:[/node_modules/,/loaders/,/bundle/], loader: "jshint-loader" }
        ],
        loaders: [
            { test: /\.html$/, exclude: [/node_modules/,/loaders/,/bundle/], loader: "raw-loader"},
            { test: /\.json$/, exclude: [/node_modules/,/loaders/,/bundle/], loader: "json-loader!" + path.resolve('loaders/strip')},
            { test: /\.(js|es6)$/, exclude: [/node_modules/,/loaders/,/bundle/], loader: "babel-loader" },
            { test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/, exclude: [/node_modules/,/loaders/,/bundle/], loader: 'url-loader?limit=100000' },
            { test: /\.css$/, exclude: [/node_modules/,/loaders/,/bundle/], loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            { test: /\.scss$/, exclude: [/node_modules/,/loaders/,/bundle/], loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") }
        ]
    },
    resolve: {
        extensions: ['','.js','.es6']
    },
    externals: {
        angular: true,
        jquery: true
    }
}