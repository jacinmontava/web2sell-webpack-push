const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/js/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'index.[contentHash].js',
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    attributes: false,
                }
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'docs'),
        compress: true,
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                removeEmptyElements: false,
            },
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new CopyPlugin({
            patterns: [
                { from: './src/js/firebase-messaging-sw.js', to: '' },
            ],
        }),
        new CleanWebpackPlugin(),
    ],
}