module.exports = {
	entry: './client/app.jsx',
	output: {
		path: __dirname + '/public/js/',
		filename: 'bundle.js',
		publicPath: '/',
	},
	devtool: 'inline-source-map',
	stats: {
		colors: true,
		reasons: true,
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
				}],
			}
		]
	}
}