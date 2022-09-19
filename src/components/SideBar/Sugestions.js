import RecomendedArray from "./SugestionsContent.js"


function RecomendedList(){
    return RecomendedArray.map((item) => (
        <div className="recomended" key={"rcmd"+item.key}>
            <div className="recwrapper">
                <img src={item.image} alt=""></img>
                <div>
                    <span className="rectitle">{item.name}</span>
                    <span className="recsub">
                        {
                        item.type === 0 ? "Segue você" : "Novo no Instagram"
                        }
                    </span>
                </div>
            </div>
            <a href="./"><span className="follow">Seguir</span></a>
        </div>
        )
    )
}

export default function Sugestions(){
    return (
        <div className="subcontent">
            <span className="title">
                <span>Sugestões para você</span>
                <a href="./">Ver tudo</a>
            </span>
            <RecomendedList />
        </div>
    )
}