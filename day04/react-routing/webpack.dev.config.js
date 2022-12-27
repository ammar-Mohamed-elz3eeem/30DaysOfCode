const webpack = require("webpack");

module.exports = {
	entry: [
		"webpack-dev-server/client/?http://localhost:8080",
		"./jsx/app.jsx"
	],
	output: {
		publicPath: '',
		filename: 'bundle.js',
		path: __dirname + '/js/'
	},
	mode: "development",
	devtool: "inline-source-map",
	module: {
		rules: [
			{ test: /\.css$/, use: 'style-loader' },
			{ test: /\.jsx$/, use: ['react-hot-loader/webpack', 'babel-loader'] }
		]
	},
	devServer: {
		hot: true,
	},
	plugins: [new webpack.HotModuleReplacementPlugin()	]
}