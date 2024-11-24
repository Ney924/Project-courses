import { BuildOptions } from "./types/config";
import { ResolveOptions } from "webpack";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".jsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [options.path.src, "node_modules"],
    mainFiles: ["index"],
    alias: {},
  };
}
