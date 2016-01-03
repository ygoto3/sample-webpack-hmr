const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config");

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(1337, "localhost", (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log("Listening at localhost:1337");
});
