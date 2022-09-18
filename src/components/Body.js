import Stories from "./Stories.js"
import Posts from "./Posts.js"
import SideBar from "./SideBar.js"
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