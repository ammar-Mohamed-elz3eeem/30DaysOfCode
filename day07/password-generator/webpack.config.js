module.exports = {
	entry: [
		'./jsx/App.jsx'
	],
	output: {
		path: __dirname + "/dist/",
		filename: 'bundle.js'
	},
	devtool: 'inline-source-map',
	mode: 'development',
	stats: {
		colors: true,
		reasons: true
	},
	module: {
		rules: [
			{ test: /\.jsx$/, exclude: /(node_modules)/, loader: 'babel-loader' }
		]
	},
	devServer: {
		static: __dirname
	}
}