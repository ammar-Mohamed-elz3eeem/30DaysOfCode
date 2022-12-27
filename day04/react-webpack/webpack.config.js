module.exports = {
	entry: "./assets/jsx/script.jsx",
	output: {
		path: __dirname + "/assets/js/",
		filename: 'bundle.js'
	},
	devtool: "#sourcemap",
	module: {
		loaders: [
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{
				test: /\.jsx$/, 
				exclude: /(node_modules)/,
				loaders: ['babel-loader']
			}
		]
	}
}