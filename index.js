import express from 'express'
import axios from 'axios'
import {nanoid} from 'nanoid'


const app = express()
const port = 3000

app.use(express.json())

app.use(express.static("./client"))

app.get("/api/weather", (req, res) => {
    
    
    try {
    
        const options = {
        

        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: {q: 'Gothenburg', days: '1'},
        headers: {
            'X-RapidAPI-Key': '4c9b96648amsh2dc6631f46e1410p14cef6jsn330d2b37413c',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);

        

        res.json(response.data)
    
    }).catch(function (error) {
        console.error(error);
    });
}catch(error) {
    console.log(error);
}
})

let weatherList = [
    
    {
        id: nanoid(),
        name: "Lerum",
        condition: "Sunny"
    },
    {
        id: nanoid(),
        name: "Gråbo",
        condition: "Cloudy"
    },
    {
        id: nanoid(),
        name: "Floda",
        condition: "Raining"
    }
]

app.get("/api/myWeather", (req, res) => {
    try {
        res.json(weatherList)
    }catch(err) {
        res.status(500).json(err.message)
    }
})

app.post("/api/myWeather", (req, res) => {
    try {

        let newWeather = req.body
        newWeather.id = nanoid()

        weatherList.push(newWeather)
        res.json("New weather added!")

    }catch(err) {
        res.status(400).json(err.message)
    }
})






app.listen(port, () => {
    console.log(`App is running on ${port}`);
})



