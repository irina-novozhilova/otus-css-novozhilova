const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: "main.js",
    },
    module: {
        rules: [
            {
                test: /\.m?js$/, exclude: /(node_modules|bower_components)/,
                use: ['babel-loader', 'astroturf/loader'],
            },
            {
                test: /\.(css)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    "autoprefixer",
                                    "postcss-preset-env",
                                    "postcss-deadcss",
                                    "at-rule-packer",
                                    "postcss-import",
                                    "cssnano"
                                ],
                            },
                        },
                    },
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                }
            },
            {
                test: /\.(svg)$/i,
                use: "svg-inline-loader",
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/images/'),
                    to: path.resolve(__dirname, './dist/images'),
                },
            ]
        }),

    ],
    devServer: {
        compress: false,
        open: "/",
        port: 3001,
    },
};
