const formEl = document.getElementById('form')
const scoreEl = document.getElementById('score')
const questionEl = document.getElementById('question')
const inputEl = document.getElementById('input')

const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)
const correctAns = num1*num2
let score = localStorage.getItem('s')
if(!score){
    score = 0
}
scoreEl.innerText = `score:${score}`
questionEl.innerText = `What is ${num1} multiply by ${num2}`

formEl.addEventListener('submit',()=>{
    let userAns = +inputEl.value
    if(userAns === correctAns) score++
    else score--
    localStorage.setItem("s",JSON.stringify(score))  
})


