import { getWeekDay, getDate, getFahrenheit } from './module'

const getForecastDetails = (data) => {

  const getForecast = () => {
    const collectedData = []
    // console.log(data)
    for (let i=7; i < data.list.length; i+=8) {
      // console.log(data.list[i])
      const test = data.list.filter(d => getDate(data.list[i].dt, data.city.timezone) === getDate(d.dt, data.city.timezone))
      
      const temp_min = Math.min(...test.map(info => info.main.temp_min))
      const temp_max = Math.max(...test.map(info => info.main.temp_max))

      const filteredData = {
        img: data.list[i].weather[0].icon,
        // des: data.list[i].weather[0].description,
        date: getDate(data.list[i].dt, data.city.timezone),
        weekday: getWeekDay(data.list[i].dt, data.city.timezone),
        weather: data.list[i].weather[0].main,
        // temperature: `${Math.ceil(data.list[i].main.temp)} °`,
        hightemp: `${Math.ceil(temp_max)} °`,
        lowtemp: `${Math.ceil(temp_min)} °`,
        hightemp_fahrenheit: `${getFahrenheit(Math.ceil(temp_max))} °`,
        lowtemp_fahrenheit: `${getFahrenheit(Math.ceil(temp_min))} °`
      }
      collectedData.push(filteredData)
    }
    // console.log(collectedData)
    return collectedData
  }

  return getForecast()
}

export default getForecastDetails