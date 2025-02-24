import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import path from "path";
import { BuildEnv } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };
  const mode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode: mode,
    path: paths,
    isDev,
    port: PORT,
  });
  return config;
};
