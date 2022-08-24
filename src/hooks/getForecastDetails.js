
const getForecastDetails = (data) => {

  const convertDate = (UNIX_time) => {
    const d = new Date(UNIX_time * 1000)
    var converted = d.toGMTString()
    return converted
  }

  const takeDate = (num) => {
    const d = new Date()
    
    const newdata = data.list.filter((obj) => {
      const t = new Date(obj.dt * 1000) 
      return (parseInt(t.toGMTString().slice(5, 7)) === d.getDate() + num)
    })

    const adder = (a, b) => a + b
    const getAverage = (arr) => arr.reduce(adder) / arr.length

    return ({
      date: convertDate(newdata[0].dt).slice(5, 11),
      weekday: convertDate(newdata[0].dt).slice(0, 3),
      weather: newdata[0].weather[0].main,
      tempreture: Math.round(getAverage(newdata.map((obj) => { return obj.main.temp}))) + ' °',
      feelslike: Math.round(getAverage(newdata.map((obj) => { return obj.main.feels_like}))) + ' °',
      hightemp: Math.round(Math.max.apply(null, newdata.map((obj) => {return obj.main.temp_max}))) + ' °',
      lowtemp: Math.round(Math.min.apply(null, newdata.map((obj) => {return obj.main.temp_min}))) + ' °',
      humidity: Math.round(getAverage(newdata.map((obj) => { return obj.main.humidity}))) + ' %',
      aripressure: Math.round(getAverage(newdata.map((obj) => { return obj.main.pressure}))) + ' mb',
      wind: Math.round(getAverage(newdata.map((obj) => { return obj.wind.speed}))) + ' m/s',
      visibility: Math.round(getAverage(newdata.map((obj) => { return obj.visibility}))) / 1000 + ' km'
    })
  }
  const tempData = []
  
  for (let i=1; i <=5; i++) {
    const td = takeDate(i)
    tempData.push(td)
  }

  return tempData
}

export default getForecastDetails