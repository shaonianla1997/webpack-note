import counter from './counter.js';
import './style/style.css';

counter();

var btn=document.createElement('button');
btn.innerHTML='新增';
document.body.appendChild(btn);
btn.onclick=function(){
	var div=document.createElement('div');
	div.innerHTML='item';
	document.body.appendChild(div);
};