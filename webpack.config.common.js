

var webpack = require('webpack');
var ExtractTextPLugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry: {
        'app': './assets/app/main.ts'
    },

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader' }]
            },
            {
                test: /\.css$/,
                use: [{ loader:'to-string-loader'},{ loader: 'css-loader'}]
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[{loader:'babel-loader'}],
            }
        ],
        exprContextCritical: false

    }
};