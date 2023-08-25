const containerEl = document.querySelector('.container')
const btnEl = document.querySelector('.btn')
const popupEl = document.querySelector('.popup')
const iconEl = document.querySelector('.close-icon')

btnEl.addEventListener('click',() =>{
    containerEl.classList.add('blur')
    popupEl.classList.remove('active')
})
iconEl.addEventListener('click',() =>{
    containerEl.classList.remove('blur')
    popupEl.classList.add('active')
})