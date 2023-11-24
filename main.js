let navListContentLink = document.querySelector('.navListContentLink')
let modal = document.querySelector('.modal')
let ModalTopSideExitBtn = document.querySelector('.ModalTopSideExitBtn')
navListContentLink.addEventListener('click',function(){
    if (modal.style.display == "none") {
        modal.style.display = "block"
    }else{
        modal.style.display = "none"
    }
})
ModalTopSideExitBtn.addEventListener('click',function(){
    modal.style.display = "none"
})

let ModalTopSideExitBtnYear = document.querySelector('.ModalTopSideExitBtnYear')
let navListContentLinkYear = document.querySelector('.navListContentLinkYear')
let modalYear =document.querySelector('.modalYear')
navListContentLinkYear.addEventListener('click',function(){
    if (modalYear.style.display == "none") {
        modalYear.style.display = "block"
    }else{
        modalYear.style.display = "none"
    }
})
ModalTopSideExitBtnYear.addEventListener('click',function(){
    modalYear.style.display = "none"
})

let searchBtn = document.querySelector('.searchBtn')
let searchBtnInput =document.querySelector('.searchBtnInput')
searchBtn.addEventListener('click',function(){
    if (searchBtnInput.style.display == "none") {
        searchBtnInput.style.display = "block"
    }else{
        searchBtnInput.style.display = "none"
    }
})

// function playSong(audioName) {
//     let audio = new Audio(audioName)
//     audio.loop = true;
//     audio.play;
// }
// playSong("audio/Sensey+Alfa+-+aprel+yolg'oni+,.m4a")

let mySong = document.querySelector('#mySong')
let icon = document.querySelector('.playSong')
icon.addEventListener('click',function(){
    if (mySong.paused) {
        mySong.play();
        icon.src = "./img/pause-solid.svg"
    }else{
        mySong.pause();
        icon.src = "./img/play-solid.svg"
    }
})