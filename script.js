//DOM declarations
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-location");
const displayLocation = document.querySelector(".city-name");
const displayIcon = document.getElementById("icon");
const displayTemperature = document.querySelector(".temperature");
const displayForecastDescription = document.querySelector(".forecast-title");
const displayHumidity = document.querySelector(".forecast-humidity");
const displayWindSpeeds = document.querySelector(".forecast-windspeed");

let weatherData = '';
let query = '';

function searchLocation() {
    query = searchInput.value
    getWeather(query);
}

async function getWeather(query) {
    try {
        const apiKey = "5f1265bb51468222b9a3cffc07e1d5f9"
        const unit = "metric"
        let url ="https://api.openweathermap.org/data/2.5/weather?q="+ query + "&appid="+ apiKey +"&units=" + unit;

        const response = await fetch(url);
        weatherData = await response.json();  
    } catch (error) {
        console.log(error);
    }
    displayLocation.textContent = weatherData.name;
    displayTemperature.textContent = weatherData.main.temp + " C";
    displayForecastDescription.textContent = weatherData.weather[0].description;
    displayHumidity.textContent = "Humidity: " + weatherData.main.humidity + " %";
    displayWindSpeeds.textContent = "Winds: " + weatherData.wind.speed + " km/h";
    const icon = weatherData.weather[0].icon;
    const iconURL = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";
    displayIcon.src = iconURL;
}

searchButton.addEventListener('click', searchLocation)