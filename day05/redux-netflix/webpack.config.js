const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
	entry: {
		index: [
			'@babel/polyfill',
			'./src/index.js'
		]
	},
	output: {
		path:  resolve(__dirname, "build"),
		filename: "[name].js"
	},
	mode: "development",
	target: "web",
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [resolve(__dirname, "src")],
				exclude: /(node_modules)/,
				options: {
					presets: ["@babel/preset-react", "@babel/preset-env"]
				}
			},

			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader,  'css-loader'],
				exclude: /(node_modules)/
			}
		]
	},
	devServer: {
		static: __dirname,
		hot: true,
		historyApiFallback: true
	},
	plugins: [new MiniCssExtractPlugin({ filename: "styles.css" }), new webpack.HotModuleReplacementPlugin()]
}