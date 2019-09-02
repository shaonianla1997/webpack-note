记录webpack4.0的学习笔记

#安装相关 
	全局安装不适合多项目多环境的情形
	npx 可以扫描当前项目安装的版本 
	npm info webpack可以查看插件的版本信息，方便安装指定版本的插件
	npm install可以快速安装依赖

#webpack的相关配置
	npx webpack --config webpackconfig.js 可用于配置打包配置文件
	webpack.config.js是默认的配置文件
		mode 可以设置打包的模式 可压缩和不可压缩 mode:'production',
