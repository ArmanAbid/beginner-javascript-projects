const bannerEl = document.querySelector('.banner')
const bottomEL = document.querySelector('.bottom')

window.addEventListener('scroll',() =>{
    updateImage()
})
const updateImage = () =>{
    bannerEl.style.opacity = 1-window.pageYOffset/900
    bannerEl.style.backgroundSize = 210- window.pageYOffset/15 + '%'
}