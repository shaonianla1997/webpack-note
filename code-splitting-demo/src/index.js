// import _ from 'lodash';

function getComponent(){
	//魔法命名
	return import(/*webpackChunkName:'lodash'*/'lodash').then(({default:_})=>{
		var element=document.createElement('div');
		element.innerHTML=_.join(['youth','1997','-']);
		return element;
	})
}


getComponent().then(element=>{
	document.body.appendChild(element);
})

// console.log(_.join(['a','b','c'],''))
// console.log(_.join(['a','b','c'],'******'))