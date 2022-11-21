fetch('	https://api.adviceslip.com/advice/2')
    .then(res => res.json())
    .then(data => advc = data.slip.advice)

    .then(console.log("advice is "+ advc))
