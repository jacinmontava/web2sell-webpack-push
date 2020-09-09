const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/app.js']
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contentHash].js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
}