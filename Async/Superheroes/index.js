const searchHero = document.getElementById('searchHero')
const search = document.getElementById('search')
const randomHero = document.getElementById('newHero')
const image = document.getElementById('image')
const nameHero = document.getElementById('nameHero')
const displayStats = document.getElementById('displayStats')



search.onclick = () => displayHero()

function displayHero(){
    const hero = (searchHero.value)

    // fetch(`https://superheroapi.com/api.php/1271083496810044/search/${hero}`).then(Response => Response.json())
    // .then(json => {
    //     console.log(json)
    //     image.innerHTML = `<img src="${json.results[0].image.url}" height=200 width=200/>`
    //     nameHero.innerHTML = `<p>Character Name: ${json.results[0].name}</p>`
        
    //     displayStats.innerHTML = getStatistics(json.results[0].powerstats)
        
    // })
    const apiUrl = `https://superheroapi.com/api.php/1271083496810044/search/${hero}`;

try {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                document.querySelector('#none').innerText = response.error
            }
            return response.json();
        })
        .then(json => {
            console.log(json);
            image.innerHTML = `<img src="${json.results[0].image.url}" height=200 width=200/>`;
            nameHero.innerHTML = `<p>Character Name: ${json.results[0].name}</p>`;
            displayStats.innerHTML = getStatistics(json.results[0].powerstats);
        })
        .catch(error => {
            console.log(error)
           
        });
} catch (error) {
    console.error('Try-catch error:', error);

}

}

const statToEmoji = {
    intelligence : '🧠',
    speed : '⚡',
    strength : '💪',
    power : '🔋',
    durability : '🏋️‍♀️',
    combat : '⚔️'
}

const getStatistics = (json) => {
    const stats = Object.keys(json).map((stat)=>{
       return `<p>${statToEmoji[stat]}:${json[stat]}</p>`
    })
    return stats.join('')
}


const randomHeroGenerator = () =>{
    return Math.ceil(Math.random()*730)
}

randomHero.onclick = () => displayRandomHero()

function displayRandomHero(){
    searchHero.value = ''
    const id = randomHeroGenerator()
    fetch(`https://superheroapi.com/api.php/1271083496810044/${id}`).then(Response => Response.json())
    .then(json => {
        // console.log(json)
        image.innerHTML = `<img src="${json.image.url}" height=200 width=200/>`
        nameHero.innerHTML = `<p>Character Name: ${json.name}</p>`
        displayStats.innerHTML = getStatistics(json.powerstats)
    })

}