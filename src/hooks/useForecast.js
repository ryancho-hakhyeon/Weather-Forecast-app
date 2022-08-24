import { useState } from 'react'
import axios from 'axios'; 

import getCurrentWeather from './getCurrentWeather';
import getCurrentDetails from './getCurrentDetails';
import getForecastDetails from './getForecastDetails';

const Api_Key = 'f0b97152c76c2cad6f09c6a9f85928bf'
const Current_Url = 'https://api.openweathermap.org/data/2.5/weather?'
const Forecast_Url = 'https://api.openweathermap.org/data/2.5/forecast?'


const useForecast = () => {
    const [forecast, setForecast] = useState(false)
    const [weekForecast, setWeekForecast] = useState(false)

    const getherCurrentData = (data, city, country) => {
        const currentDay = getCurrentWeather(data, city, country)
        const currentDetails = getCurrentDetails(data)
        
        setForecast({currentDay, currentDetails})
    }

    const getherForecastData = (data) => {
        // const tempData = data.list.filter((idx) => {
        //     return idx.dt_txt.slice(11, 19) === '00:00:00'
        // })
        // const forecastDetails = getForecastDetails(tempData)

        const forecastDetails = getForecastDetails(data)
        // console.log(forecastDetails)
        setWeekForecast(forecastDetails)
    }

    const submitRequest = async (value) => {
        // console.log(value)
        // console.log(value[0].city)
        await axios.request(`${Current_Url}lat=${value[0].lat}&lon=${value[0].lon}&appid=${Api_Key}&units=metric`).then((response) => {
            // console.log(response.data)
            getherCurrentData(response.data, value[0].city, value[0].country)
        }).catch((err) => {
            console.log(err)
            return
        })
        
        await axios.request(`${Forecast_Url}lat=${value[0].lat}&lon=${value[0].lon}&appid=${Api_Key}&units=metric`).then((response) => {
            // console.log(response.data)
            getherForecastData(response.data)
        }).catch((err) => {
            console.log(err)
            return
        })
    }

    return {
        forecast,
        weekForecast,
        submitRequest
    }
}

export default useForecast