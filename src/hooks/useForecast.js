import { useState } from 'react'

import getCurrentWeather from './getCurrentWeather';
import getCurrentDetails from './getCurrentDetails';
import getForecastDetails from './getForecastDetails';
import getHoursWeather from './getHoursWeather';
import getAirPollution from './getAirPollution';
import { fetchData, url } from './getWeatherAPIs'

const useForecast = () => {
    const [ forecast, setForecast ] = useState(null)
    const [ weekForecast, setWeekForecast ] = useState(null)
    const [ airPollution, setAirPollution ] = useState(null)

    const gatherCurrentData = (data, country, region) => {
        // console.log(data)
        const currentDay = getCurrentWeather(data, country, region)
        const currentDetails = getCurrentDetails(data)

        setForecast({currentDay, currentDetails})
    }

    const gatherForecastData = (data) => {
        // console.log(data)
        const forecastDetails = getForecastDetails(data)
        const forecastBrief = getHoursWeather(data)
        // console.log(forecastDetails)
        setWeekForecast({forecastDetails, forecastBrief})
    }

    const gatherAirPollutionData = (data) => {
        // console.log(data)
        const airPollution = getAirPollution(data)
        setAirPollution(airPollution)
    }

    const submitRequest = async (value) => {
        // console.log(value)
        // console.log(value[0].city)

        fetchData(url.currentWeather(value[0].lat, value[0].lon), (weather) => { 
            gatherCurrentData(weather, value[0].country, value[0].region)
        })

        fetchData(url.forecastWeather(value[0].lat, value[0].lon), (forecast) => {
            gatherForecastData(forecast)
        })
        
        fetchData(url.airPollution(value[0].lat, value[0].lon), (airPollution) => {
            gatherAirPollutionData(airPollution)
        })
    }

    return {
        forecast,
        weekForecast,
        airPollution,
        submitRequest
    }
}

export default useForecast