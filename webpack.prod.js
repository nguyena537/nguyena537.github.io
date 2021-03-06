const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
    mode: "production",
    entry: "./src/index.tsx",
    output: {
        filename: "[name].[contenthash].js",
        chunkFilename: '[name].[contenthash].chunk.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    resolve: {
        extensions: [".js", ".jsx", ".scss", ".css", ".ts", ".tsx", ".png"]
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
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
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[name].[contenthash].chunk.css",
        }),
        new CopyPlugin({
            patterns: [
                { from: "./src/404.html" },
                { from: ".nojekyll" },
                { from: "./CNAME" }
            ]
        })
    ],
    bail: true,
    optimization: {
        moduleIds: 'deterministic',
        minimize: true
    }
};