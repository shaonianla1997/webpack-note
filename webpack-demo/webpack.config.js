const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.(png|jpg|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						name: '[name]_[hash].[ext]', //placeholder 占位符 配置打包后文件名
						outputPath: 'images/', //配置打包放置文件夹
						limit: 2048 //文件的大小限制 如果超过 则打包成文件 不超过打包成base64
					}
				}
			}, {
				test: /\.scss$/,
				use: [
					'style-loader', {
						loader: 'css-loader',
						options: {
							importLoaders: 2
						}
					}, 'sass-loader', 'postcss-loader'
				]
			}
		]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'bundle')
	}
}
