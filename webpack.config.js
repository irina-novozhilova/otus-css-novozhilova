module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: "main.js",
    },
    module: {
        rules: [{ test: /\.(js)$/, use: "babel-loader" }],
    },
    devServer: {
        compress: false,
        open: "/",
        port: 3001,
    },
};
