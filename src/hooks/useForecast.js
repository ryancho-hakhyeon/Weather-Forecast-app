import { useState } from 'react'
import axios from 'axios'; 

const Api_Key = 'f0b97152c76c2cad6f09c6a9f85928bf'
const Request_Url = `https://api.openweathermap.org/data/2.5/weather?`

const useForecast = () => {
    const [forecast, setForecast] = useState(false)

    const submitRequest = (value) => {
        // console.log(value)
        // console.log(value[0].city)
        value.map((city) => {
            axios.request(`${Request_Url}lat=${city.lat}&lon=${city.lon}&appid=${Api_Key}`).then((response) => {
                console.log(response.data)
                return response.data
            }).catch((err) => {
                console.log(err)
                return
            })
        })
    }

    return {
        forecast,
        submitRequest
    }
}

export default useForecast