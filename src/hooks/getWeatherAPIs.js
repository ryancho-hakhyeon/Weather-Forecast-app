import axios from 'axios'; 

const Api_Key = 'f0b97152c76c2cad6f09c6a9f85928bf'
const Current_Url = 'https://api.openweathermap.org/data/2.5/weather?'
const Forecast_Url = 'https://api.openweathermap.org/data/2.5/forecast?'
const AirPollution_Url = 'http://api.openweathermap.org/data/2.5/air_pollution?'

export const fetchData = (URL, callback) => {
    axios.request(`${URL}&appid=${Api_Key}`)
        .then(response => response.data)
        .then(data => callback(data))
        .catch(err => {
            console.log('Error message: ' + err) 
            return
        })
}

export const url = {
    currentWeather(lat, lon) {
        return `${Current_Url}lat=${lat}&lon=${lon}&units=metric`
    },
    forecastWeather(lat, lon) {
        return `${Forecast_Url}lat=${lat}&lon=${lon}&units=metric`
    },
    airPollution(lat, lon) {
        return `${AirPollution_Url}lat=${lat}&lon=${lon}&units=metric`
    }
}