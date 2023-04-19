import React from 'react'
import { AiTwotoneCalendar } from 'react-icons/ai'
import { Ri24HoursLine } from 'react-icons/ri'

import './forecast.css'

const Forecast = ({weekForecast, unitToggle}) => {
  // console.log(weekForecast.forecastBrief, weekForecast.forecastDetails)
  // console.log(weekForecast.forecastBrief)

  return (
    <div className='container__weekforecast'>
      <div className='weekforecast-current-hours'>
          <div className="weekforecast-hours-title">
            <Ri24HoursLine className='weekforecast-title-icon'/>
            <span>Today's Hourly Forecast</span>
          </div>

          <ul className='forecast-hours'>
            {
              weekForecast.forecastBrief.map((data, idx) => {
                return (
                  <li key={idx}>
                    <span>{data.time}</span>
                    <img src={`icons/${data.img}.png`} alt="" />
                    <span>{data.weather}</span>
                    {
                      unitToggle === 'F' ?
                      <span>{data.temperature_fahrenheit}</span> : <span>{data.temperature}</span> 
                    }
                  </li>
                )
              })
            }
          </ul>
      </div>

      <div className='weekforecast-current-week'>
        <div className='weekforecast-title'>
          <AiTwotoneCalendar className='weekforecast-title-icon'/>
          <span>5-DAYS FORECAST</span>
        </div>

        <ul className='forecast-weeks'>
        {
          weekForecast.forecastDetails.map((data, idx) => {
            return (
                  <li key={idx}>
                    <img className='weather-icon' src={`icons/${data.img}.png`} alt="" />
                    <span>{data.weekday}</span>
                    <span>{data.weather}</span>
                    <span>{data.date}</span>
                    <span>{unitToggle === 'F' ? `${data.lowtemp_fahrenheit} - ${data.hightemp_fahrenheit}` : `${data.lowtemp} - ${data.hightemp}`}</span>
                  </li>
            )
          })
        }
        </ul>
      </div>
    </div>
  )
}

export default Forecast