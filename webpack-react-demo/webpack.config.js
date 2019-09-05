const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
	CleanWebpackPlugin
} = require("clean-webpack-plugin");


module.exports = {
	mode: 'development',
	entry: './src/index.js',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: './dist',
		open: true,
		port: 8080
	},
	module: {
		rules: [{
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
		}, {
			test: /\.(eot|ttf|svg|woff)$/,
			use: {
				loader: 'file-loader'
			}
		}, {
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader',
				'postcss-loader'
			]
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			options: {
				
			}
		}]
	},
	plugins: [new HtmlWebpackPlugin({
		template: 'src/index.html'
	}), new CleanWebpackPlugin()],
	output: {
		publicPath: '/', //配置前置路径
		filename: 'dist.js',
		path: path.resolve(__dirname, 'dist')
	}
}
