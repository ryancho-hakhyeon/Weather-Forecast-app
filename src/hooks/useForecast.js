import { useState } from 'react'
import axios from 'axios'; 

import { geoApiOptions } from './getGeoAPIs'

const Api_Key = 'f0b97152c76c2cad6f09c6a9f85928bf'
const Request_Url = `https://api.openweathermap.org/data/2.5/weather?`


const useForecast = () => {
    const [forecast, setForecast] = useState(false)


    const submitRequest = (value) => {
        // axios(`${Request_Url}`)
        console.log(value.options)
        // const [lat, lon] = cityData.value.split(" ")
    }

    return {
        forecast,
        submitRequest
    }
}

export default useForecast