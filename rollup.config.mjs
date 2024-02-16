import swc from "@rollup/plugin-swc";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.tsx",
  output: {
    format: "cjs",
    file: "dist/rollup.js",
  },
  plugins: [
    nodeResolve({
      extensions: [".tsx", ".ts"],
    }),
    swc({
      swc: {
        jsc: {
          target: "es5",
          parser: {
            syntax: "typescript",
            tsx: true,
          },
        },
        module: {
          type: "es6",
        },
        isModule: true,
      },
    }),
  ],
};
