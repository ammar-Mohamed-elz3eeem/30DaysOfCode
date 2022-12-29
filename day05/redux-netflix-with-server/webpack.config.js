const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		index: [
			'babel-polyfill',
			'./client/index.js'
		]
	},
	output: {
		path: path.join(__dirname, 'build', 'public'),
		filename: '[name].js',
		publicPath: '/'
	},
	target: 'web',
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				exclude: /node_modules/,
				test: /\.js$/,
				include: path.resolve(__dirname, 'client'),
				query: {
					presets: ['react', 'es2015', 'stage-0'],
				}
			},
			{
				loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[local]__[hash:base64:5]'),
				test: /\.css$/,
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		modulesDirectories: [
			'./node_modules',
			'./client',
		]
	},
	devServer: {
		static: __dirname,
		port: 8585,
		historyApiFallback: true,
	},
	plugins: [new ExtractTextPlugin("styles.css")]
}