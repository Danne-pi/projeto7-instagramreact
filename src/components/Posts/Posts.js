import postArray from "./PostsContent"
import toMilhar from "./MyNumTransform"
import "./HeartAnimation.css"

function PostList(){

    return postArray.map((item) =>(
        <div className="post" key={"pst"+item.key}>
            <img className="likeAnimation" src="./assets/icons/likecheck.svg" alt=""></img>
            <div className="title">
                <span>
                    <a href="./"><img src={item.profile} alt=""></img></a>
                    <a href="./">{item.name}</a>
                </span>
                <img className="postIcon" src="./assets/icons/opt.svg" alt=""></img>
            </div>
            {item.contentType === "video" ? 
            <video className="content" src={item.content} autoPlay loop muted></video> 
            :
            <img className="content" src={item.content} alt=""></img>
            }
            <div className="actions">
                <span>
                    <img id="likebtn" className="postIcon" src="./assets/icons/like.svg" alt=""></img>
                    <img className="postIcon" src="./assets/icons/coment.svg" alt=""></img>
                    <img className="postIcon" id="correction" src="./assets/icons/send.svg" alt=""></img>
                </span>
                <img id="savebtn" className="postIcon" src="./assets/icons/save.svg" alt=""></img>
            </div>
            <div className="liked">
                <a href="./"><img src={item.mainLikeProfile} alt=""></img></a>
                <span>Curtido por <a href="./"><strong>{item.mainLikeName}</strong></a> e <a href="./"><strong>outras <span id="likeCount">{toMilhar(item.likeCount)}</span> pessoas</strong></a></span>
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