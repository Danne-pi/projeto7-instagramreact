var swrapper = document.querySelector("#stories-wrapper");
var btn1 = document.querySelector(".stories .button")
var btn2 = document.querySelector(".stories .button2")

document.body.onmousedown = function(e) { if (e.button === 1) return false; }

let scrollrestante = swrapper.scrollWidth - 614;
let clicks = 0;

function right() {
    if (scrollrestante > 0){
        clicks ++;
        scrollrestante = scrollrestante - 350;     
        btn2.style.display = 'unset';
        btn1.style.display = 'unset';
    }
    swrapper.scrollBy(350,0);
    if (scrollrestante <= 0) {
        btn1.style.display = 'none';
    }
}
function left() {
    if (clicks > 0){
        clicks --;   
        scrollrestante = scrollrestante + 350;
        btn2.style.display = 'unset';
        btn1.style.display = 'unset';
    }
    swrapper.scrollBy(-350,0);
    if (clicks <= 0) {
        btn2.style.display = 'none';
    }
}

btn2.addEventListener("click", left)
btn1.addEventListener("click", right)

function likeThis(){
    if (this.classList.contains("hasBeenClicked")){
        this.src = "./assets/icons/like.svg"
        this.classList.remove("hasBeenClicked")
    }
    else{
        this.src = "./assets/icons/likecheck.svg"
        this.classList.add("hasBeenClicked")
    }
}
function saveThis(){
    if (this.classList.contains("hasBeenClicked")){
        this.src = "./assets/icons/save.svg"
        this.classList.remove("hasBeenClicked")

    }
    else{
        this.src = "./assets/icons/savecheck.svg"
        this.classList.add("hasBeenClicked")
    }
}
function postClick(){
    let thisLike = this.querySelector(".actions #likebtn")
    if (thisLike.classList.contains("hasBeenClicked")){
        thisLike.src = "./assets/icons/like.svg"
        thisLike.classList.remove("hasBeenClicked")

    }
    else{
        thisLike.src = "./assets/icons/likecheck.svg"
        thisLike.classList.add("hasBeenClicked")
    }
}


let postLikeList = document.querySelectorAll("#likebtn")
for (let i = 0; i < postLikeList.length; i++) {
    postLikeList[i].addEventListener("click", likeThis)
}
let postSaveList = document.querySelectorAll("#savebtn")
for (let i = 0; i < postSaveList.length; i++) {
    postSaveList[i].addEventListener("click", saveThis)    
}
let postList = document.querySelectorAll(".post")
for (let i = 0; i < postList.length; i++) {
    postList[i].addEventListener("click", postClick)    
}