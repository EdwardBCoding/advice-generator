//! Selectors

const adviceText = document.querySelector('.advice-text')
const adviceIdText = document.querySelector('.advice-id')
const body = document.querySelector('body')
const rerollButton = document.querySelector('.reroll-button')

//! Listeners

document.addEventListener('DOMContentLoaded', fetchAdvice)
rerollButton.addEventListener('click', fetchAdvice)

//! Functions

function test(){
    console.log('weener')
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
    adviceText.innerText = adv
    let advId = data.slip.id
    adviceIdText.innerText = advId
}