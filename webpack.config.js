const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: {
        exercise1: path.join(__dirname, "exercise1/src/exercise1.js"),
        exercise2: path.join(__dirname, "exercise2/src/exercise2.js")
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                loader: 'less-loader' // compiles Less to CSS
            },
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['exercise1'],
            template: path.join(__dirname, "exercise1/src/1. exercise1.html"),
            filename: "./1. exercise1.html"
        }),
        new HtmlWebpackPlugin({
            chunks: ['exercise2'],
            template: path.join(__dirname, "exercise2/src/2. exercise2.html"),
            filename: "./2. exercise2.html"
        })
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3001
    }
};