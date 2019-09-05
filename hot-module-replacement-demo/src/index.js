import counter from './counter.js';
import number from './number.js';
import './style/style.css';

counter();
number();

if(module.hot){
	module.hot.accept('./number',()=>{
		document.body.removeChild(document.getElementById('number'));
		number()
	});
}

var btn=document.createElement('button');
btn.innerHTML='新增';
document.body.appendChild(btn);
btn.onclick=function(){
	var div=document.createElement('div');
	div.innerHTML='item';
	document.body.appendChild(div);
};