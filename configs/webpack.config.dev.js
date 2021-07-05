const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config.base");

module.exports = merge(baseConfig, {
	mode: "development",
	// https://webpack.js.org/configuration/devtool/
	devtool: "eval-source-map",
	devServer: {
		host: "localhost",
		port: 3000,
		open: true,
		historyApiFallback: true,
		overlay: {
			errors: true,
			warnings: true
		},
		compress: true,
		lazy: false
	}
});
