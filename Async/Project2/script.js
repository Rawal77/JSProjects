const randomHero = document.getElementById('randomHero')
const result = document.getElementById('result')
const text = document.getElementById('searchHero')
const search = document.getElementById('search')
const heroName = document.getElementById('heroName')

search.onclick = () => searchHero()
randomHero.onclick = () => randomHeroGenerator()

const obj = {
    
}

function searchHero(){
    const hero = text.value 
    fetch(`https://superheroapi.com/api.php/1271083496810044/search/${hero}`).then(Response => Response.json())
    .then(json => {
        // console.log(json.results[0])
        heroName.innerHTML = `Character Name : ${json.results[0].name}`
        result.innerHTML = `<img src="${json.results[0].image.url}" height="350" width="350">`
    }) 
}


function randomHeroGenerator(){
    const res = Math.ceil(Math.random()*730)
    fetch(`https://superheroapi.com/api.php/1271083496810044/${res}`).then(Response => Response.json())
    .then(json => {
        console.log(json)
        heroName.innerHTML = `Character Name : ${json.name}`
        result.innerHTML = `<img src="${json.image.url}" height="350" width="350">`
    }) 
    text.value = ""
}

// function searchHero

