import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(App(), document.querySelector(".root"))

insertScript("carousel")
insertScript("clickables")

function insertScript(name){
    const scriptElement=document.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.src = "./scripts/"+name+".js";
    document.head.appendChild(scriptElement);
}