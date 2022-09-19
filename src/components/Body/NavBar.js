export default function NavBar(){
    return (
        <header>
            <div className="deskcontent">
                <div id="spacing">
                    <a href="#home">
                        <img src="assets/icons/insta.svg" alt=""></img>
                        <div id="logo-separator"></div>
                        <img className="title" src="assets/icons/logo.svg" alt=""></img>
                    </a>
                </div>
                <input placeholder="Pesquisar" type="text"></input>
                <span>
                    <a href="#home"><img src="assets/icons/home.svg" alt=""></img></a>
                    <a id="bye" href="#home"><img src="assets/icons/chat.svg" alt=""></img></a>
                    <a id="bye" href="#home"><img src="assets/icons/plus.svg" alt=""></img></a>
                    <a href="#home"><img src="assets/icons/explore.svg" alt=""></img></a>
                    <a href="#home"><img src="assets/icons/like.svg" alt=""></img></a>
                    <a href="#home"><img src="assets/icons/profile.svg" alt=""></img></a>
                </span>
            </div>
            <div className="mobicontent">
                <span><a href="#home"><img src="assets/icons/insta.svg" alt=""></img></a></span>
                <a id="spacing" href="#home"><img src="assets/icons/logo.svg" alt=""></img></a>
                <span><a href="#home"><img src="assets/icons/send.svg" alt=""></img></a></span>
            </div>
        </header>
    )
}