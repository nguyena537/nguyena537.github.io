const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        filename: "[name].js",
        chunkFilename: '[name].chunk.js'
    },
    resolve: {
        extensions: [".js", ".jsx", ".scss", ".css", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.ts|\.tsx$/,
                use: ["ts-loader"]
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[hash:base64:5]"
                            },
                            importLoaders: 2
                        }
                    },
                    "sass-loader",
                ],
                include: /\.module/
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader"
                    },
                    "sass-loader",
                ],
                exclude: /\.module/,
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        writeToDisk: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[name].chunk.css",
        })
    ]
};