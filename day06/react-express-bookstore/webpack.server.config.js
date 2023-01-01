const path = require('path')
const fs = require('fs')
const {
  PWD
} = process.env
let externals = {}

fs.readdirSync('node_modules').filter(function (x) {
	return ['.bin'].indexOf(x) === -1
}).forEach(function (mod) {
	externals[mod] = 'commonjs ' + mod
})

module.exports = {
	entry: {
		server: [
			'./server/index.js'
		]
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'server.js'
	},
	target: 'node',
	module: {
		rules: [
			{
				loader: 'babel-loader',
				include: [path.resolve(PWD, 'server')],
				test: /\.js$/,
			},
			{
				loader: 'json-loader',
				include: [path.resolve(PWD, 'server')],
				test: /\.json$/
			}
		]
	},
	externals: externals
}