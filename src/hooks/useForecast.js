import { useState } from 'react'

const useForecast = () => {
    const [forecast, setForecast] = useState(false)

    const submitRequest = (location) => {
        console.log({location})
    }

    return {
        forecast,
        submitRequest
    }
}

export default useForecast