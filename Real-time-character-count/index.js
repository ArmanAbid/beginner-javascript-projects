const totalCharacterEl = document.querySelector('.tc')
const remainingEl = document.querySelector('.remain')
const textareaEl = document.getElementById('textarea')
const maxLength = 200
remainingEl.innerText = maxLength
totalCharacterEl.innerText = 0
textareaEl.addEventListener('keyup',() =>{
    updateCounter()
})
const updateCounter = () =>{
    totalCharacterEl.innerText = textareaEl.value.length
    remainingEl.innerHTML = maxLength - textareaEl.value.length
}