const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:1337",
    "webpack/hot/dev-server",
    "./src/index"
  ],
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/build/"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel"],
        include: path.join(__dirname, "src")
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader?sourceMap",
        include: path.join(__dirname, "src/scss")
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
