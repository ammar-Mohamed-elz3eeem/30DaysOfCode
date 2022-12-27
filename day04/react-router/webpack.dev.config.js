const webpack = require("webpack");
const path = require("path");


module.exports = {
	entry: [
		"webpack-dev-server/client/?http://localhost:8080",
		"./jsx/app.jsx"
	],
	output: {
		publicPath: '/',
		filename: 'bundle.js',
		path: path.resolve(__dirname, "js")
	},
	mode: "development",
	devtool: "inline-source-map",
	module: {
		rules: [
			{ "test": /\.css$/, use: ["style-loader", "css-loader"] },
			{ "test": /\.jsx$/, exclude: /(node_modules)/, use: ["react-hot-loader/webpack", "babel-loader"] }
		]
	},
	devServer: {
		hot: true,
		port: 8282,
		historyApiFallback: true,
	},
	plugins: [new webpack.HotModuleReplacementPlugin()]
}