//import { express } from "express"


async function postLocalWeather() { 

}



async function getMyWeather() { 
    
    const myWeather = await fetch("http://localhost:3000/api/myWeather")
    const data = await myWeather.json()
    console.log(data)
    
    for (let i = 0; i < data.length; i++) {
        const weather = data[i]
        
        const container = document.getElementById("weatherData")
        let weatherContainer = document.createElement("div")
        weatherContainer.classList.add("weatherDiv")
        weatherContainer.innerText = weather.name + " = " + weather.condition

        container.append(weatherContainer)
        
    }
}

async function getApiWeather() {
    
    const apiWeather = await fetch("http://localhost:3000/api/weather")
    const apiData = await apiWeather.json()
    console.log(apiData.current.last_updated)
    console.log(apiData.location.name)
    console.log(apiData.current.temp_c)
    
    let apiWeatherContainer = document.getElementById("apiData")
    
    let weatherContainerH1 = document.createElement("h1")
    weatherContainerH1.innerText = "Plats: " + apiData.location.name
    
    let weatherContainerH2 = document.createElement("h2")
    weatherContainerH2.innerText = "Grader: " + apiData.current.temp_c + "C"
    
    let weatherContainerH3 = document.createElement("h3")
    weatherContainerH3.innerText = "Senast uppdaterad: " + apiData.current.last_updated
    
    
    apiWeatherContainer.append(weatherContainerH1, weatherContainerH2, weatherContainerH3)
    
    
    
    
    
}



window.addEventListener("load", getApiWeather)

window.addEventListener("load", getMyWeather)




//document.getElementById("saveBtn").addEventListener(collectWeather)
//document.getElementById("getWeatherBtn").addEventListener("click", myWeather)





