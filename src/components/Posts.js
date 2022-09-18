export default function Posts(){
    return (
        <div className="posts">
            <div className="post">
                <div className="title">
                    <span>
                        <a href="./"><img src="assets/images/eu.jpg" alt=""></img></a>
                        <a href="./">danne.pi</a>
                    </span>
                    <a href="./"><img src="assets/icons/opt.svg" alt=""></img></a>
                </div>
                <video className="content" src="assets/videos/inception.mp4" autoPlay loop muted></video>               
                <div className="actions">
                    <span>
                        <a href="./"><img src="assets/icons/like.svg" alt=""></img></a>
                        <a href="./"><img src="assets/icons/coment.svg" alt=""></img></a>
                        <a href="./"><img id="correction" src="assets/icons/send.svg" alt=""></img></a>
                    </span>
                    <a href="./"><img src="assets/icons/save.svg" alt=""></img></a>
                </div>
                <div className="liked">
                    <a href="./"><img src="assets/images/barney.jpg" alt=""></img></a>
                    <span>Curtido por <a href="./"><strong>barney.rei.delas</strong></a> e <a href="./"><strong>outras 145.559 pessoas</strong></a></span>
                </div>
            </div>
            <div className="content-saver"></div>
        </div>
    )
}