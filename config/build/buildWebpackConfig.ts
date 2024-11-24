import webpack from "webpack";
import path from "path";

import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  return {
    mode: options.mode,
    entry: options.path.entry,
    devtool: options.isDev ? "inline-source-map" : undefined,
    output: {
      filename: "[name].[contenthash].js",
      path: options.path.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devServer: options.isDev ? buildDevServer(options) : undefined,
  };
}
