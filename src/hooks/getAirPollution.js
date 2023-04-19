
const getAirPollution = (data) => {

    return ({
        aqi: data.list[0].main.aqi,
        components: [
            {
                name: 'NO2',
                value: data.list[0].components.no2
            },
            {
                name: 'O3',
                value: data.list[0].components.o3
            },
            {
                name: 'SO2',
                value: data.list[0].components.so2
            },
            {
                name: 'PM2.5',
                value: data.list[0].components.pm2_5
            }
        ]
    })
}

export default getAirPollution