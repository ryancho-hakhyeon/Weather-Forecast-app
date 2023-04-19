import { getTime, mps_to_kmh, getFahrenheit } from './module'

const getCurrentDetails = (data) => {
    const sunriseTime = getTime(data.sys.sunrise, data.timezone)
    const sunsetTime = getTime(data.sys.sunset, data.timezone)

    return ({
        feels_like: {
            name: 'FEELS LIKE',
            value: Math.ceil(data.main.feels_like),
            unit: '°C'
        },
        feels_like_fahrenheit: {
            name: 'FEELS LIKE',
            value: getFahrenheit(Math.ceil(data.main.feels_like)),
            unit: '°F'
        },
        visibility: {
            name: 'VISIBILITY',
            value: data.visibility / 1000,
            unit: 'km'
        },
        // high_temp: {
        //     name: 'HIGH TEMP',
        //     value: Math.ceil(data.main.temp_max),
        //     unit: '°C'  
        // },
        // low_temp: {
        //     name: 'LOW TEMP',
        //     value: Math.ceil(data.main.temp_min),
        //     unit: '°C' 
        // },
        humidity: {
            name: 'HUMIDITY',
            value: data.main.humidity,
            unit: '%' 
        },
        wind: {
            name: 'WIND',
            value: mps_to_kmh(data.wind.speed),
            degree: data.wind.deg,
            unit: 'km/h' 
        },
        pressure: {
            name: 'PRESSURE',
            value: data.main.pressure,
            unit: 'hPa' 
        },
        sunrise: {
            name: 'SUNRISE',
            value: `${sunriseTime.hours}:${sunriseTime.minutes}`,
            unit: `${sunriseTime.period}`
        },
        sunset: {
            name: 'SUNSET',
            value: `${sunsetTime.hours}:${sunsetTime.minutes}`,
            unit: `${sunsetTime.period}`
        }
    })
}

export default getCurrentDetails

// const getCurrentDetails = (data) => [
//     {
//         name: 'FEELS LIKE',
//         value: Math.round(data.main.feels_like),
//         unit: ' °C'
//     },
//     {
//         name: 'VISIBILITY',
//         value: data.visibility / 1000,
//         unit: ' km'   
//     },
//     {
//         name: 'HIGH TEMP',
//         value: Math.round(data.main.temp_max),
//         unit: ' °C'   
//     },
//     {
//         name: 'LOW TEMP',
//         value: Math.round(data.main.temp_min),
//         unit: ' °C'   
//     },
//     {
//         name: 'HUMIDITY',
//         value: data.main.humidity,
//         unit: ' %'   
//     },
//     {
//         name: 'WIND',
//         value: data.wind.speed,
//         unit: ' m/s'   
//     },
//     {
//         name: 'AIR PRESSURE',
//         value: data.main.pressure,
//         unit: ' mb'   
//     }
// ]
