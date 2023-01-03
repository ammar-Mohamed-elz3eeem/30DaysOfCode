module.exports = {
	entry: [
		'./src/app.jsx',
	],
	output: {
		path: __dirname + "/public/js/",
		filename: 'app.js'
	},
	mode: "development",
	devtool: 'inline-source-map',
	module: {
		rules: [
			{ loader: 'babel-loader', test: /\.jsx?$/, exclude: /(node_modules)/ }
		]
	}
}