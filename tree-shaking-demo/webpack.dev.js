
const {
	CleanWebpackPlugin
} = require("clean-webpack-plugin");


module.exports = {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: './dist',
		open: true,
		port: 8080
	},
	plugins: [new HtmlWebpackPlugin({
		template: 'src/index.html'
	}), new CleanWebpackPlugin()],
	optimization:{
		usedExports:true
	}
}
