
const getCurrentDetails = (data) => [
    {
        name: 'FEELS LIKE',
        value: Math.round(data.main.feels_like - 273.15),
        unit: ' °C'
    },
    {
        name: 'VISIBILITY',
        value: data.visibility / 1000,
        unit: ' km'   
    },
    {
        name: 'HIGH TEMP',
        value: Math.round(data.main.temp_max - 273.15),
        unit: ' °C'   
    },
    {
        name: 'LOW TEMP',
        value: Math.round(data.main.temp_min - 273.15),
        unit: ' °C'   
    },
    {
        name: 'HUMIDITY',
        value: data.main.humidity,
        unit: ' %'   
    },
    {
        name: 'WIND',
        value: data.wind.speed,
        unit: ' m/s'   
    },
    {
        name: 'AIR PRESSURE',
        value: data.main.pressure,
        unit: ' mb'   
    }
]

export default getCurrentDetails