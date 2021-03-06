import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';


let model= { clicks: 0 };

function render () { //when model changes, it should refresh interface
ReactDOM.render(<App
   clicks={model.clicks} 
   onClick={()=> {model.clicks +=1; render(); }} />, document.getElementById('root'));
}
render();
registerServiceWorker();
