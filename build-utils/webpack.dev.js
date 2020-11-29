const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  mode: "production",
  devtool: "eval-cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: {
            emitCss: true,
            hotReload: true,
            preprocess: sveltePreprocess({
              sourceMap: true,
              postcss: true,
            }),
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
