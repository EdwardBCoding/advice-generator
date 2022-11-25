//! Selectors

const adviceText = document.querySelector('.advice-text')
const adviceIdText = document.querySelector('.advice-id')
// const body = document.querySelector('body')
const rerollButton = document.querySelector('.reroll-button')

//! Listeners

document.addEventListener('DOMContentLoaded', fetchAdvice)
rerollButton.addEventListener('click', reroll)

//! Functions

function test(){
    console.log('weee gotttaaa problem')
}

function reroll(){
    rerollButton.classList.add('active')
    rerollButton.addEventListener('animationend', () =>{
        fetchAdvice()
        rerollButton.classList.remove('active')
    })
}

function fetchAdvice(){
    fetch('https://api.adviceslip.com/advice')
    // .then(res => {
    // if(res.ok){
    //     console.log('yay')
    // } else{
    //     console.log('weee gotttaaa problem')
    // }})
    // .then(data => console.log(data))
    .then(res => res.json())
    .then(data => {writeAdvice(data)})
    // .then(data => console.log(data.slip.advice))
}

function writeAdvice(data){
    // console.log(data)
    let adv = data.slip.advice
    adviceText.innerText = "\"" + adv + "\""
    let advId = data.slip.id
    adviceIdText.innerText = advId
}