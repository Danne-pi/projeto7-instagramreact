import postArray from "./PostsContent"
import toMilhar from "./MyNumTransform"

function PostList(){

    return postArray.map((item) =>(
        <div className="post" key={"pst"+item.key}>
            <div className="title">
                <span>
                    <a href="./"><img src={item.profile} alt=""></img></a>
                    <a href="./">{item.name}</a>
                </span>
                <a href="./"><img src="assets/icons/opt.svg" alt=""></img></a>
            </div>
            {item.contentType === "video" ? 
            <video className="content" src={item.content} autoPlay loop muted></video> 
            :
            <img className="content" src={item.content} alt=""></img>
            }
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
                <span>Curtido por <a href="./"><strong>{item.mainLike}</strong></a> e <a href="./"><strong>outras {toMilhar(item.likeCount)} pessoas</strong></a></span>
            </div>
        </div>
        )
    )
}


export default function Posts(){
    return (
        <div className="posts">
            <PostList />
            <div className="content-saver"></div>
        </div>
    )
}