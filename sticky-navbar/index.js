const navEl = document.querySelector('nav')
const bodyEl = document.querySelector('body')
const paraEl = document.querySelector('.para')

window.addEventListener('scroll',() => {
    if(window.scrollY>= paraEl.offsetTop-navEl.offsetHeight -30){
        navEl.classList.add('active')
    }else{
        navEl.classList.remove('active')
    }
})