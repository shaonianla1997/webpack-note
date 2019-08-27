
//CMD
//AMD

//webpack 模块打包工具  js模块打包工具->

//ES Module引入规范
import Header from './header.js';
import Sidebar from './sidebar.js';
import Content from './content.js';

//CommonJS模块引入 
// var Header=require('./header.js');
// var Sidebar=require('./sidebar.js');
// var Content=require('./content.js');

new Header();
new SideBar();
new Content();