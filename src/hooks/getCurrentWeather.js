

const getCurrentWeather = (data, city, country) => {

    const getConvertDate = (UNIX_time) => {
        const d = new Date(UNIX_time * 1000)
        var converted = d.toGMTString()
        return converted
    }

    return ({
        weather: data.weather[0].main,
        weekday: getConvertDate(data.dt).slice(0, 3),
        date: getConvertDate(data.dt).slice(5, 11),
        location: city,
        countryCode: country,
        temperature: Math.round(data.main.temp)
    })
}


export default getCurrentWeather