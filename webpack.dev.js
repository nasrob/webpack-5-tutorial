const paths = require('.paths')

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    plugins: [
        // only update what has changed on hot reload
        new webpack.HotModuleReplacementPlugin(),
    ],
})