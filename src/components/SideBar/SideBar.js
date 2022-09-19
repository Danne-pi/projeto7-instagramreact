import Sugestions from "./Sugestions.js"
import User from "./User.js"

export default function SideBar(){
    return (
        <div className="sbcontent">
            <div className="sidebar">
                <User />
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