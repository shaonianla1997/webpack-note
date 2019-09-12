// import _ from 'lodash';
// var element = document.createElement('div');
// element.innerHTML = _.join(['youth', '1997', '-']);
// document.body.appendChild(element);


function getComponent() {
	//魔法命名
	return import( /*webpackChunkName:'lodash'*/ 'lodash').then(({
		default: _
	}) => {
		var element = document.createElement('div');
		element.innerHTML = _.join(['youth', '1997', '-']);
		return element;
	})
}

document.addEventListener('click', () => {
	alert("sssssssss");
	getComponent().then(element => {
		document.body.appendChild(element);
	})
})
