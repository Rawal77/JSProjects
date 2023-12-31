const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

// const apiKey = put the api key provided by apikey
const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city){
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
    }

    let data = await response.json();
    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)  + "°C"
    document.querySelector('.wind').innerHTML = data.wind.speed + "Km/hr"

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.innerHTML = '☁️'
    }else if(data.weather[0].main == 'Clear'){
        weatherIcon.innerHTML = '🌞'
    }else if(data.weather[0].main == 'Rain'){
        weatherIcon.innerHTML = '☔'
    }else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.innerHTML = '💦'
    }else if(data.weather[0].main == 'Mist'){
        weatherIcon.innerHTML = '🌁'
    }
}

searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value)
})
