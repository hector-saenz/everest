const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Pintate',
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html'
        })
    ]
}