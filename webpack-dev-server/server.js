/* 使用express 创建服务器 使用webpack-dev-middleware进行打包 */

const express=require('express');
const webpack=require('webpack');
const webpackMiddleWare=require('webpack-dev-middleware');
const config=require('./webpack.config.js');
const complier=webpack(config);//编译器

const app=express();
app.use(webpackMiddleWare(complier,{
	publicPath:config.output.publicPath
}));

app.listen(3000,()=>{
	console.log("node server")
})