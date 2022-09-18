import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(App(), document.querySelector(".root"))
document.body.onmousedown = function(e) { if (e.button === 1) return false; }
