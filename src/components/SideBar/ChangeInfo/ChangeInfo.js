import './ChangeStyle.css'

const shadowy = document.createElement("div")
const popup = document.createElement("div")
shadowy.classList.add("shadowy")
popup.classList.add("changeBox")

export default function ChangeInfo(){
    popup.innerHTML = (
`
<div class="textfield">
    <ion-icon name="person"></ion-icon>
    <input type="text" id="fname" name="fname" placeholder="Nome de usuário">
    <input type="text" id="lname" name="lname" placeholder="Seu nome">
    <input type="url" id="pname" name="pname" placeholder="Link da sua foto"><br>
    <button id="clickaqui">Confirmar</button>
</div>
`)
    document.body.appendChild(shadowy)
    document.body.appendChild(popup)
    setTimeout(() => {
        shadowy.style.opacity = 1
        popup.style.bottom = "50%"
    }, 50);
    setTimeout(() => {
        popup.style.width = "375px"
        popup.style.height = "400px"
    }, 120);
    setTimeout(() => {
        document.querySelector(".textfield").style.opacity=1
    }, 1500);

    const thisButton = document.querySelector("#clickaqui")
    thisButton.addEventListener("click", submit)

}
function submit(){
    let thisUsername = "" + document.querySelector("#fname").value
    let thisName = "" + document.querySelector("#lname").value
    let thisImage = document.querySelector("#pname").value
    const response = isValidHttpUrl(thisImage)
    if (response === true && thisName.length >= 8 && thisUsername.length >= 6){
        localStorage.setItem("thisUsername", thisUsername);
        localStorage.setItem("thisName", thisName);
        localStorage.setItem("thisImage", thisImage);
        document.location.reload()
    }
    else{
        errorAlert()
    }
    
}
function isValidHttpUrl(string) {
    let url;
    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
}

function errorAlert(){
    const myAlert = document.createElement("div")
    myAlert.classList.add("myAlert")
    myAlert.innerHTML=`
    <ion-icon name="alert-circle-outline"></ion-icon>
    <h3>Ocorreu um erro, verifique se suas informações conferem com a lista:</h3>
    <ul>
        <li>Username com mais do que 6 caracteres.</li>
        <li>Nome com mais do que 8 caracteres.</li>
        <li>Link funcional com https/http incluso.</li>
    </ul>
    <br>
    <button>OK</button>
    `
    shadowy.style.zIndex=998
    document.body.appendChild(myAlert)
    setTimeout(() => {
        myAlert.style.opacity=1
    }, 50);
    function onConfirm(){
        shadowy.style.zIndex=99
        myAlert.style.opacity=0
        setTimeout(() => {
            myAlert.remove()
        }, 500);
    }
    document.querySelector(".myAlert button").addEventListener("click", onConfirm)
}