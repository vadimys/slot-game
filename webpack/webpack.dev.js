const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const build = require('../build.json')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: {
            directory: build.assets
        },
        port: '8013',
        client: {
            logging: "info",
            overlay: true,
            progress: true
        }
    },
    infrastructureLogging: {
        colors: true,
        level: 'verbose',
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: build.indexHTML,
            templateParameters: build
        })
    ]
});
