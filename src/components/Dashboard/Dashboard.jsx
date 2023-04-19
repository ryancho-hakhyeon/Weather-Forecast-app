import React from 'react'

import { airText } from '../../hooks/module'
import { FiSunrise, FiSunset } from 'react-icons/fi'
import { TbTemperature } from 'react-icons/tb'
import { MdOutlineVisibility } from 'react-icons/md'
import { TiWaves } from 'react-icons/ti'
import { WiHumidity } from 'react-icons/wi'

import { Line } from 'react-chartjs-2'
import { 
    Chart as ChartJS, 
    LineElement, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    Legend,
    Tooltip
} from 'chart.js'

import './dashboard.css'

ChartJS.register(
    LineElement, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    Legend,
    Tooltip
)

const Dashboard = ({forecast, weekForecast, airPollution, unitToggle}) => {
    // console.log(unitToggle)
    const hoursWeatherData = {
        labels: weekForecast.forecastBrief.map((data) => {return `${data.time};${data.img}`}),
        datasets:[{
            label: 'Temperature',
            data: weekForecast.forecastBrief.map((data) => {
                return (unitToggle === 'F' ? parseInt(data.temperature_fahrenheit) : parseInt(data.temperature))
            }),
            backgroundColor: 'rgb(85,133,181)',
            borderColor: 'rgb(121,194,208)',
            pointBorderColor: 'rgb(85,133,181)',
            fill: false,
            tension: 0.5,
        }]
    }

    const chartDataOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            x: {
                position: 'bottom',
                ticks: {
                    color: 'black',
                    // callback: (val, idx) => {
                    //     console.log(val)
                    //     return val
                    // }
                }
            },
            // x2:{
            //     position: 'top',
            //     ticks: {
            //         color: 'black'
            //     }
            // },
            y: {
                min: Math.min(...weekForecast.forecastBrief.map((data) => {
                    return (unitToggle === 'F' ? parseInt(data.temperature_fahrenheit) : parseInt(data.temperature))})) - 3,
                max: Math.max(...weekForecast.forecastBrief.map((data) => {
                    return (unitToggle === 'F' ? parseInt(data.temperature_fahrenheit) : parseInt(data.temperature))})) + 3,
                stepSize: unitToggle === 'F' ? 5 : 3,
                ticks: {
                    stepSize: unitToggle === 'F' ? 5 : 3,
                    color: 'black',
                    callback: (val, idx) => {
                        if(unitToggle === 'F'){
                            return val + '°F'
                        } else {
                            return val + '°C'
                        }
                    }
                }
            },
        }
    }
    
  return (
    <section id='dashboard-mode'>
        <div className={`dashboard_container img-${forecast.currentDay.weather}`}>
            <div className='today-forecast'>
                <div className='today-brief'>
                    <p>{forecast.currentDay.location}</p> 
                    <p>{forecast.currentDay.regionCode}, {forecast.currentDay.countryCode}</p>

                    <p>{forecast.currentDay.date}</p>
                    <p>{forecast.currentDay.weekday}.</p>
                    
                    <p>{unitToggle === 'F' ? `${forecast.currentDay.temperature_fahrenheit} °F` : `${forecast.currentDay.temperature} °C`}</p>
                    <img src={`icons/${forecast.currentDay.img}.png`} className='today-brief-icon' alt="" />

                    <p>{forecast.currentDay.weather}</p>
                    {/* <p>{forecast.currentDay.des}</p> */}
                </div>

                <div className='week-forecast-box'>
                    <div className='week-forecast-title'>
                        <p>5-DAY FORECAST</p>
                    </div>
                    {
                        weekForecast.forecastDetails.map((weather, idx) => {
                            return (
                                <div key={idx} className='week-forecast'>
                                    <img src={`icons/${weather.img}.png`} alt="" className='weather-icon'/>
                                    <span>{weather.weekday}</span>
                                    <span>{weather.date}</span>
                                    {/* <span>{weather.temperature}</span> */}
                                    <span>{weather.weather}</span>
                                    <label>
                                        {
                                            unitToggle === 'F' ? 
                                            `${weather.lowtemp_fahrenheit} - ${weather.hightemp_fahrenheit}` : `${weather.lowtemp} - ${weather.hightemp}`
                                        }
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='today-details-forecast'>
                <div className='today-details'>
                    <h3 className='today-details-title'>Today's Highlights</h3>
                    <div className='today-details-top'>
                        <div className="air-details">
                            <div className='card-title air-title-box'>
                                <h4>Air Quality</h4>

                                <div className={`air-aqi-text aqi-1`}>
                                    { airText[airPollution.aqi].level }
                                </div>
                            </div>


                            <div className='cards-info'>
                                <div className='card-info'>
                                    <img src='new_icons/direction.png' alt="" style={{transform: `rotate(${forecast.currentDetails.wind.degree}deg)`}} className='wind-img' />
                                    <span className='card-info-title'>{forecast.currentDetails.wind.value}{forecast.currentDetails.wind.unit}</span>
                                </div>
                                {
                                    airPollution.components.map((data, idx) => {
                                        return (
                                            <div key={idx} className='card-info'>
                                               <h5 className='card-info-title'>{data.name}</h5>
                                               <h3 className='card-info-sub'>{data.value}</h3> 
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        
                        <div className="sun-details">
                            <h4 className="card-title">{forecast.currentDetails.sunrise.name} & {forecast.currentDetails.sunset.name}</h4>

                            <div className='cards-info'>
                                <FiSunrise className='top-icon' />
                                <div className='card-info'>
                                    <h5 className='card-info-title'>{forecast.currentDetails.sunrise.name}</h5>
                                    <span className='card-info-sub'>{forecast.currentDetails.sunrise.value} {forecast.currentDetails.sunrise.unit}</span>
                                </div>

                                <FiSunset className='top-icon' />
                                <div className='card-info'>
                                    <h5 className='card-info-title'>{forecast.currentDetails.sunset.name}</h5>
                                    <span className='card-info-sub'>{forecast.currentDetails.sunset.value} {forecast.currentDetails.sunset.unit}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='today-details-cards'>
                        <div className='details-card'>
                            <h5 className='card-info-title'>{forecast.currentDetails.feels_like.name}</h5>

                            <div className='cards-info'>
                                <TbTemperature className='top-icon' />
                                <span className='card-info-sub'>{ unitToggle === 'F' ? `${forecast.currentDetails.feels_like_fahrenheit.value} ${forecast.currentDetails.feels_like_fahrenheit.unit}` : `${forecast.currentDetails.feels_like.value} ${forecast.currentDetails.feels_like.unit}`}</span>
                            </div>
                        </div>

                        <div className='details-card'>
                            <h5 className='card-info-title'>{forecast.currentDetails.visibility.name}</h5>

                            <div className="cards-info">
                                <MdOutlineVisibility className='top-icon' />
                                <span className='card-info-sub'>{forecast.currentDetails.visibility.value} {forecast.currentDetails.visibility.unit}</span>
                            </div>
                        </div>

                        <div className='details-card'>
                            <h5 className='card-info-title'>{forecast.currentDetails.humidity.name}</h5>

                            <div className="cards-info">
                                <WiHumidity className='top-icon' />
                                <span className='card-info-sub'>{forecast.currentDetails.humidity.value} {forecast.currentDetails.humidity.unit}</span>
                            </div>
                        </div>

                        <div className='details-card'>
                            <h5 className='card-info-title'>{forecast.currentDetails.pressure.name}</h5>

                            <div className="cards-info">
                                <TiWaves className='top-icon' />
                                <span className='card-info-sub'>{forecast.currentDetails.pressure.value} {forecast.currentDetails.pressure.unit}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='today-details-hourly'>
                    <div className="today-hourly-title">
                        <span>3 Hours Weather Forecast</span>
                    </div>

                    <div className='today-hourly-chart'>
                        <Line 
                            data={hoursWeatherData} 
                            options={chartDataOptions} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Dashboard