const path = require('path');

module.exports = [{
	entry: './main.jsx',
	output: { path: __dirname, filename:'./main.js'},
	module: {
		loaders: [{
			test: /.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: { presets: ['es2015','react'] }
		}]
	}
} ]
