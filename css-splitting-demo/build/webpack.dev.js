const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig = {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: './dist',
		open: true,
		port: 8080
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}, ]
	}
}

module.exports = merge(commonConfig, devConfig);
