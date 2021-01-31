const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const terserPlugin = require("terser-webpack-plugin")

module.exports = {
  mode: "production",
  entry: ["./src/index.js", "./src/clipboard.js"],
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin(),
  ],
  
  optimization: {
    minimizer: [
      new terserPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  }
};
