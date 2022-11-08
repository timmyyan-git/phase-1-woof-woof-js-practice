fetch("http://localhost:3000/pups")
    .then(r => r.json())
    .then(pupsArray => console.log(pupsArray))