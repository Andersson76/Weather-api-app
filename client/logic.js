
document.getElementById("msgBtn").addEventListener("click", btnClick)
document.getElementById("printBtn").addEventListener("click", getMyWeather)

async function btnClick() {


    const msg = document.getElementById("msgInput").value
    const condition = document.getElementById("condInput").value

    const object = {
        name: msg,
        condition: condition
    }
    console.log(msg, condition)


     try {

        const config = {
    
            method: 'POST',
            headers: {
    
            'Content-Type': 'application/json',
         },
    
            body: JSON.stringify(object)
    
        }
    
        const response = await fetch("http://localhost:3000/api/myWeather", config)
    
        const result = await response.json()
    
        console.log(result)
        alert(result)
    
    } catch (error) {
    
        console.error
    
    } 
    

 }



async function getMyWeather() {

    const myWeather = await fetch("http://localhost:3000/api/myWeather")
    const data = await myWeather.json()
    console.log(data)

    const container = document.getElementById("weatherData")
    container.innerHTML = ""

    for (let i = 0; i < data.length; i++) {
    const weather = data[i] 

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







