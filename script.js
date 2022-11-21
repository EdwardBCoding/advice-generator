const adviceText = document.querySelector('.advice-text')

fetch('https://api.adviceslip.com/advice')
    // .then(res => {
    // if(res.ok){
    //     console.log('yay')
    // } else{
    //     console.log('weee gotttaaa problem')
    // }})
    // .then(data => console.log(data))
    .then(res => res.json())
    .then(data => {
        let adv = data.slip.advice
        adviceText.innerText = adv
    })
    // .then(data => console.log(data.slip.advice))

