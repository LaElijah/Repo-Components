import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import packageJson from "./package.json" assert { type: "json" };
import terser from "@rollup/plugin-terser";
import scss from "rollup-plugin-scss"
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

export default [
    {
      input: "src/index.ts",
      output: [
        {
          file: packageJson.main,
          format: "cjs", 
        },
        {
          file: packageJson.module,
          format: "esm",
        },
      ],
      plugins: [
        peerDepsExternal(), 
        resolve(),
        commonjs(),
        typescript({ tsconfig: "./tsconfig.json" }),
        
       scss({ 
        output: "dist/index.css",

      }),
        terser(), 
      ],
    },
    {
      input: "dist/esm/types/index.d.ts",
      output: [{ file: "dist/index.d.ts", format: "esm" }],
      plugins: [dts()],
      external: [/\.(css|less|scss)$/],
    },
  ];
