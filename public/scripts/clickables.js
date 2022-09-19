function likeThis(){
    const fatherPost = ((this.parentNode).parentNode).parentNode
    let likeCount = fatherPost.querySelector("#likeCount")
    let newlikeCount = likeCount.innerHTML
    newlikeCount = newlikeCount.split('.').join("")
    newlikeCount = parseInt(newlikeCount)
    if (this.classList.contains("hasBeenClicked")){
        this.src = "./assets/icons/like.svg"
        this.classList.remove("hasBeenClicked")
        animateLike(fatherPost, false)
        newlikeCount--
        likeCount.innerHTML = ""+toMilhar(newlikeCount)
    }
    else{
        this.src = "./assets/icons/likecheck.svg"
        this.classList.add("hasBeenClicked")
        animateLike(((this.parentNode).parentNode).parentNode, true)
        newlikeCount++
        likeCount.innerHTML = ""+toMilhar(newlikeCount)
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
    const fatherPost = this.parentNode
    let likeCount = fatherPost.querySelector("#likeCount")
    let newlikeCount = likeCount.innerHTML
    newlikeCount = newlikeCount.split('.').join("")
    newlikeCount = parseInt(newlikeCount)
    let thisLike = fatherPost.querySelector(".actions #likebtn")
    if (thisLike.classList.contains("hasBeenClicked")){
        thisLike.src = "./assets/icons/like.svg"
        thisLike.classList.remove("hasBeenClicked")
        animateLike(fatherPost, false)
        newlikeCount--
        likeCount.innerHTML = ""+toMilhar(newlikeCount)
    }
    else{
        thisLike.src = "./assets/icons/likecheck.svg"
        thisLike.classList.add("hasBeenClicked")
        animateLike(fatherPost, true)
        newlikeCount++
        likeCount.innerHTML = ""+toMilhar(newlikeCount)
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
    postList[i].querySelector(".content").addEventListener("click", postClick)
}





function animateLike(post, state){
    thisLike = post.querySelector(".likeAnimation")
    if(state === true){
        setTimeout(() => {
            thisLike.style.width="270px"
            thisLike.style.height="270px"
        }, 50);
        setTimeout(() => {
            thisLike.style.width="190px"
            thisLike.style.height="190px"
        }, 350);
        setTimeout(() => {
            thisLike.style.width="220px"
            thisLike.style.height="220px"
        }, 850);
        setTimeout(() => {
            thisLike.style.width="0"
            thisLike.style.height="0"
        }, 1250);
    }
}

function toMilhar(value){
    let val = ""+value
    let val2 =""
    let count = 0
    let finalVal = ""
    for (let i = val.length-1; i >= 0 ; i--) {
        val2 += val[i]
        count ++
        if (count === 3 && i !== 0){
            val2 += "."
            count = 0
        }
    }
    for (let i = val2.length-1; i >= 0 ; i--) {
        finalVal += val2[i]
    }
    return finalVal
}
