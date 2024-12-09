import webpack, { HotModuleReplacementPlugin } from "webpack";

import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildPlugins({
  path,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: path.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin(),
    new HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];
}
