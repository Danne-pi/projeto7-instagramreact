function right() {
let swrapper = document.querySelector("#stories-wrapper");
    swrapper.scrollBy(350,0);
}
function left() {
let swrapper = document.querySelector("#stories-wrapper");
    swrapper.scrollBy(-350,0);
}

const listStories = [
    {
        img: "./assets/images/barney.jpg",
        name: "barney.rei.delas"
    },
    {
        img: "./assets/images/patria.webp",
        name: "psychot1c"
    },
    {
        img: "./assets/images/putin.jfif",
        name: "putinho"
    },
    {
        img: "./assets/images/ted.jpg",
        name: "mosby.arct"
    },
    {
        img: "./assets/images/zoro.jfif",
        name: "zorotard"
    },
    {
        img: "./assets/images/marshall.jpg",
        name: "marshily.s2"
    },
    {
        img: "./assets/images/ala.png",
        name: "alan.arts"
    },
    {
        img: "./assets/images/guy.jpg",
        name: "01edgy01"
    },
]

function StoriesItem(){
    // for (let i = 0; i < listStories.length; i++) {

    // }
    const htmlList = listStories.map((item) =>         
        (<a href="./">
            <div className="ring"><img src={item.img} alt=""></img></div>
            <span>{item.name}</span>
        </a>))

    return (
        <div id="stories-wrapper">
            {htmlList}
            {htmlList}
            {htmlList}
        </div>
    )
}

export default function Stories(){
    return (
        <div className="stories">
                <StoriesItem />
                <button onClick={right} className="button">
                    <img src="/assets/icons/next.png" alt=""></img>
                </button>
                <button onClick={left} className="button2">
                    <img src="/assets/icons/next.png" alt=""></img>
                </button>
            </div>
    )
}
