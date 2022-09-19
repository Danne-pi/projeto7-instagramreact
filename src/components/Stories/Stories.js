import listStories from './StoriesContent.js';

function StoriesItem(){
    const htmlList = listStories.map((item) => 
        (<a href="./" key={"st"+item.key}>
            <div className="ring"><img src={item.img} alt=""></img></div>
            <span>{item.name}</span>
        </a>))

    return (
        <div id="stories-wrapper">
            {htmlList}
        </div>
    )
}

export default function Stories(){
    return (
        <div className="stories">
                <StoriesItem />
                <button className="button">
                    <img src="/assets/icons/next.png" alt=""></img>
                </button>
                <button className="button2">
                    <img src="/assets/icons/next.png" alt=""></img>
                </button>
            </div>
    )
}
