const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const path = require("path")

module.exports = {
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '/js'),
	},
	entry: [
		'./src/app.js'
	],
	devtool: 'inline-source-map',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				},
			},
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				},
			},
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: 'json-loader'
			},
			{
				test: /\.css$/,
				exclude: /(node_modules)/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{
						loader: 'css-loader',
						options: {
							esModule: true,
							modules: {
								namedExport: true,
								localIdentName: "[hash:base64:10]__[name]__[local]",
							}
						}
					}
				],
			}
		]
	},
	devServer: {
		historyApiFallback: true,
		static: __dirname
	},
	plugins: [
		new MiniCssExtractPlugin({filename: "all.css"}),
		new webpack.HotModuleReplacementPlugin()
	]
}