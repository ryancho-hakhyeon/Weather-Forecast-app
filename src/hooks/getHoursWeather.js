import { getHours, getFahrenheit } from './module'

const getHoursWeather = (data) => {
    const getHoursData = () =>{
        const result = []
        
        for(let i=0; i<8; i++){
            const {hours, period} = getHours(data.list[i].dt, data.city.timezone)
            const hoursData = {
                img: data.list[i].weather[0].icon,
                time: `${hours}${period}`,
                weather: data.list[i].weather[0].main,
                temperature: `${Math.ceil(data.list[i].main.temp)}°`,
                temperature_fahrenheit: `${getFahrenheit(Math.ceil(data.list[i].main.temp))}°`
            }
            result.push(hoursData)
        }
        return result
    }

    return getHoursData()
}

export default getHoursWeather