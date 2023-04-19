
export const getDate = (UNIX_time, TIME_zone) => {
    const date = new Date((UNIX_time + TIME_zone) * 1000 )
    // const monthName = date.toGMTString().slice(5, 11)
    // const dateName = date.toGMTString().slice(5, 11)
    const monthNdateName = date.toGMTString().slice(5, 11)
    return `${monthNdateName}`
}
export const getWeekDay = (UNIX_time, TIME_zone) => {
    const date = new Date((UNIX_time + TIME_zone) * 1000 )
    const weekDayName = date.toGMTString().slice(0, 3)
    return `${weekDayName}`
}

export const getHours = (UNIX_time, TIME_zone) => {
    const date = new Date((UNIX_time + TIME_zone) * 1000 )
    const hours = parseInt(date.toGMTString().slice(17, 19))
    const period = hours >= 12 ? "PM" : "AM"
    return {
       hours: `${hours % 12 || 12}`,
       period: `${period}` 
    }
}

export const getTime = (UNIX_time, TIME_zone) => {
    const date = new Date((UNIX_time + TIME_zone) * 1000)
    const hours = parseInt(date.toGMTString().slice(17, 19))
    const minutes = date.toGMTString().slice(20, 22)
    const period = hours >= 12 ? "PM" : "AM"
    return {
        hours: `${hours % 12 || 12}`,
        minutes: `${minutes}`,
        period: `${period}`
    }
}

export const mps_to_kmh = (mps) => {
    const mph = mps * 3600
    return Math.ceil(mph / 1000)
}

export const airText = {
    1: {
        level: "Good",
        message: "Air quality is considered satisfactory, and air pollution poses little or no risk."
    },
    2: {
        level: "Fair",
        message: "Air quality is acceptable; however, for some pollutants there may be a moderate concern for a very small number of people who are unusually sensitive to air pollution."
    },
    3: {
        level: "Moderate",
        message: "Members of sesitive groups may experience health effects. The general public is not likely to be affected."
    },
    4: {
        level: "Poor",
        message: "Everyone may begin to experience health effects; members of sesitive groups may experience more serious health effects."
    },
    5: {
        level: "Very Poor",
        message: "Health warnings of emergency conditions. The entire population is more likely to be affected."
    }
}

// export const getCelsius = (temp) => {
//     let celsius = (temp - 32) * (9 / 5)  
//     return `${Math.ceil(celsius)}`
// }

export const getFahrenheit = (temp) => {
    let fahrenheit = (temp * (9 / 5)) + 32 
    return `${fahrenheit}`
}

export const getConvertTime = (time, period) => {
    let hours = time.split(":")[0]
    let minutes = time.split(":")[1]
    let checkTime = new Date()
    
    if (period === "PM") {
        hours = hours + 12
    }

    checkTime.setHours(hours, minutes, 0)
    return checkTime
}