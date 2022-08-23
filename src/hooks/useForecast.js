import { useState } from 'react'
import axios from 'axios'; 

import getCurrentWeather from './getCurrentWeather';
import getCurrentDetails from './getCurrentDetails';

const Api_Key = 'f0b97152c76c2cad6f09c6a9f85928bf'
const Request_Url = `https://api.openweathermap.org/data/2.5/weather?`

const useForecast = () => {
    const [forecast, setForecast] = useState(false)

    const getherCurrentData = (data, city, country) => {
        const currentDay = getCurrentWeather(data, city)
        const currentDetails = getCurrentDetails(data)

        setForecast({currentDay, currentDetails})
    }

    const submitRequest = async (value) => {
        // console.log(value)
        // console.log(value[0].city)
        await axios.request(`${Request_Url}lat=${value[0].lat}&lon=${value[0].lon}&appid=${Api_Key}`).then((response) => {
            console.log(response.data)
            getherCurrentData(response.data, value[0].city, value[0].country)
        }).catch((err) => {
            console.log(err)
            return
        })
        
    }

    return {
        forecast,
        submitRequest
    }
}

export default useForecast