const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
	return {
		mode: process.env.NODE_ENV || "development",
		entry: "./src/js/main.js",
		output: {
			filename: "bundle.js",
			path: path.resolve(__dirname, "build"),
			clean: true,
		},
		module: {
			rules: [
				{
					test: /\.(c|sa|sc)ss$/i,
					use: ["style-loader", "css-loader", "sass-loader"],
				},
			],
		},
		devServer: {
			port: 3000,
			historyApiFallback: true,
			open: true,
		},
		resolve: {
			extensions: [".js"],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: "src/index.html",
			}),
		],
	};
};
