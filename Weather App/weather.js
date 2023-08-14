const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apiKey ="f369f7a84430e818357cde4683abaaa8"
const place = document.getElementById("location")
const temperature = document.getElementById("temp")
const humidity = document.getElementById("humidity")
const speed= document.getElementById("wind")
const searchBtn = document.getElementById("search-btn")
const search = document.getElementById("search")
const weatherIcon= document.getElementById("weather-icon")





async function weatherData(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    if(response.status === 404){
        document.getElementById("error").style.display ="block"
        document.getElementById("weather").style.display ="none"
    }else{
    let data = await response.json()
   
    place.innerHTML = data.name
    temperature.innerHTML = `${Math.round(data.main.temp)}°C`
    humidity.innerHTML = `${data.main.humidity}%`
    speed.innerHTML = `${data.wind.speed} Km/h`
    if(data.weather[0].main === 'Clear'){
        weatherIcon.src="images/clear.png"
    }else if(data.weather[0].main === 'rain'){
        weatherIcon.src="images/rain.png"
    }else if(data.weather[0].main === 'mist'){
        weatherIcon.src="images/mist.png"
    }else if(data.weather[0].main === 'snow'){
        weatherIcon.src="images/snow.png"
    }else if(data.weather[0].main === 'drizzle'){
        weatherIcon.src="images/drizzle.png"
    }else{
        weatherIcon.src="images/clouds.png"
    }
    document.getElementById("weather").style.display ="block"
    console.log (data)
}
    
}


searchBtn.addEventListener("click", function(){
    
    weatherData(search.value)
    search.value = ""
})

 search.addEventListener("keypress", function(press){
     if(press.key === "Enter"){
        weatherData(search.value)
        search.value = ""
     }
})



