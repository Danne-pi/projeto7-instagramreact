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
                <img className="postIcon" src="assets/icons/opt.svg" alt=""></img>
            </div>
            {item.contentType === "video" ? 
            <video className="content" src={item.content} autoPlay loop muted>
                <img className="likeAnimation" src="./assets/icons/likecheck."></img>
            </video> 
            :
            <img className="content" src={item.content} alt="">
                <img className="likeAnimation" src="./assets/icons/likecheck."></img>
            </img>
            }
            <div className="actions">
                <span>
                    <img id="likebtn" className="postIcon" src="assets/icons/like.svg" alt=""></img>
                    <img className="postIcon" src="assets/icons/coment.svg" alt=""></img>
                    <img className="postIcon" id="correction" src="assets/icons/send.svg" alt=""></img>
                </span>
                <img id="savebtn" className="postIcon" src="assets/icons/save.svg" alt=""></img>
            </div>
            <div className="liked">
                <a href="./"><img src={item.mainLikeProfile} alt=""></img></a>
                <span>Curtido por <a href="./"><strong>{item.mainLikeName}</strong></a> e <a href="./"><strong>outras {toMilhar(item.likeCount)} pessoas</strong></a></span>
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