const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require('path')
const build = require('../build.json')

module.exports = {
    entry: build.entryPoint,
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            include: path.join(__dirname, `../${build.sources}`),
            exclude: /node_modules/,
            options: {
                transpileOnly: true,
                happyPackMode: true
            }
        }]
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin()
    ]
}
