const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = () => ({
    output: {
        filename: "production.js",
        publicPath: "./",
    },
    module: {
        rules: [
            {
                test: /.s?css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    optimization: {
        minimizer: [
            `...`,
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [new MiniCssExtractPlugin()],
});