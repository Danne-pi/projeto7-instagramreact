import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(App(), document.querySelector(".root"))


const scriptElement=document.createElement('script');
scriptElement.type = 'text/javascript';
scriptElement.src = "./carousel.js";
document.head.appendChild(scriptElement);
