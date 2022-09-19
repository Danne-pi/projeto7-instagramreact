import Sugestions from "./Sugestions.js"
import ChangeInfo from "./ChangeInfo/ChangeInfo.js"

function User(props){
    return (
    <div className="heading">
        <div className="content" onClick={ChangeInfo}>
            <img src={props.image} alt=""></img>
            <div className="sb-content">
                <span className="title">{props.nick}</span>
                <span className="sub">
                    {props.name}
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    </div>
    )
}


export default function SideBar(){
    return (
        <div className="sbcontent">
            <div className="sidebar">
                <User 
                    image={
                        localStorage.getItem("thisImage") !== null 
                        ? localStorage.getItem("thisImage")
                        : "./assets/images/profile.webp"
                    }
                    nick={
                        localStorage.getItem("thisUsername") !== null 
                        ? localStorage.getItem("thisUsername")
                        :"Visitante"
                    }
                    name={
                        localStorage.getItem("thisName") !== null 
                        ? localStorage.getItem("thisName")
                        :"Conta-Teste"
                    }
                />
                <Sugestions />
                <div className="sb-end">
                    <span className="about">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                        Termos • Localizações • Contas mais relevantes • Hashtags • 
                        Idioma</span>
                    <span className="from">© 2021 INSTAGRAM DO FACEBOOK</span>
                </div>
            </div>
        </div>
    )
}