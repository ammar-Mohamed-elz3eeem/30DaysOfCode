const {resolve} = require("path");
const webpack = require("webpack");

module.exports = {
	entry: [
		"webpack-dev-server/client/?http://localhost:8181",
		"./src/app.jsx"
	],
	output: {
		path: resolve(__dirname, "js"),
		filename: "bundle.min.js"
	},
	mode: "development",
	devtool: "inline-source-map",
	module: {
		rules: [
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
			{ test: /\.jsx$/, exclude: /(node_modules)/, use: ['react-hot-loader/webpack', 'babel-loader'] }
		]
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
}