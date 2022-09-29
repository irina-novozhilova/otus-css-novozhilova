const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: "main.js",
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: "babel-loader"
            },
            {
                test: /\.(css)$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpg|jpeg|png)$/i,
                use: "file-loader",
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
        })
    ],
    devServer: {
        compress: false,
        open: "/",
        port: 3001,
    },
};
