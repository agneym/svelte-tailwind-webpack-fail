const commonConfig = require("./build-utils/webpack.common.js");
const { merge } = require("webpack-merge");

module.exports = (arg) => {
  const env = arg.prod ? "prod" : "dev";
  process.env.NODE_ENV = arg.prod ? "production" : "development";
  const envConfig = require(`./build-utils/webpack.${env}.js`);
  return merge(commonConfig, envConfig);
};
