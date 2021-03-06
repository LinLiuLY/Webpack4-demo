const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode:'development',
	devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		contentBase: './dist'
	}
});

