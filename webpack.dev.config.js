const { getBaseConfig } = require("@edx/frontend-build");
const { merge } = require("webpack-merge");

const baseConfig = getBaseConfig("webpack-dev");
module.exports = merge(baseConfig, {});
