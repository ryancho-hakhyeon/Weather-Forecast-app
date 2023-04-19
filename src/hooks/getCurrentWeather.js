import {getDate, getWeekDay, getFahrenheit} from './module'

const getCurrentWeather = (data, country, region) => {
    return ({
        img: data.weather[0].icon,
        des: data.weather[0].description,
        weather: data.weather[0].main,
        weekday: getWeekDay(data.dt, data.timezone),
        date: getDate(data.dt, data.timezone),
        location: data.name,
        regionCode: region,
        countryCode: country,
        temperature: Math.round(data.main.temp),
        temperature_fahrenheit: getFahrenheit(Math.ceil(data.main.temp))
    })
}

export default getCurrentWeather