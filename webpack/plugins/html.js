import { Path } from "./../service/path.js";
import { isProd } from "./../service/env.js";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const html = new HtmlWebpackPlugin({
  favicon: Path("src/assets/favicon/favicon.svg"),
  template: Path("src/index.html"),
  filename: "index.html",
  minify: {
    collapseWhitespace: isProd
  }
});
