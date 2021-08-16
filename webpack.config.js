const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.jsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      Components: path.resolve(__dirname, "src/components/"),
      App: path.join(__dirname, "..", "src"),
    },
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  devServer: {
    static: path.join(__dirname, "public/"),
    port: 3000,
  },
};
