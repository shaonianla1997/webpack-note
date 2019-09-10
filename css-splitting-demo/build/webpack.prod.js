const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const prodConfig = {
	mode: 'production',
	devtool: 'cheap-module-source-map',
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				MiniCssExtractPlugin.loader,
				'css-loader'
			]
		}]
	},
	optimization: {
		minimizer: [new OptimizeCSSAssetsPlugin({})]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[name].chunk.css'
		}),
	]
}
module.exports = merge(commonConfig, prodConfig);
