import Stories from "../Stories/Stories.js"
import Posts from "../Posts/Posts.js"
import SideBar from "../SideBar/SideBar.js"
import BottomBar from "./BottomBar.js"

export default function Body(){
    return (
        <div>
            <div className="main-div">
                <div className="pcontent">
                    <Stories />
                    <Posts />
                </div>
                <SideBar />
            </div>
            <BottomBar />
        </div>
    )
}