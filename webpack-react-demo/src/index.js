import '@babel/polyfill';
import React,{Commponent} from 'react';
import ReactDom from 'react-dom';


class App extends Commponent{
	render(){
		return <div>Hello world</div>
	}
}

ReactDom.render(<App/>,document.getElementById('root'));