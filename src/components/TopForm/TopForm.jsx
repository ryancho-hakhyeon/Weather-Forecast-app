import React from 'react'

import './topform.css'

const TopForm = ({forecast}) => {
  return (
    <div className='container__top'>
      <div className='container__cityname'>
        <p>{forecast.currentDay.location}, {forecast.currentDay.countryCode}</p>
      </div>

      <div className='container__current-box'>
        <div className='container__current-simple'>
          <div>
            <p className='today__weather'>{forecast.currentDay.weather}</p>
            <p>{forecast.currentDay.date}</p>
            <p>{forecast.currentDay.weekday}.</p>
            <p className='today__celcius'>{forecast.currentDay.temperature}°</p>
          </div>

          <div className='container__today-img'>
            <img src={`icons/${forecast.currentDay.img}.png`} className='today__img' alt="" />
            <p>{forecast.currentDay.des}</p>
          </div>
        </div>

        <div className='container__current-details'>
          { forecast.currentDetails.map(({name, value, unit}, index) => {
            return (
              <div key={index} className='current__detail'>
                <p>{name}</p>
                <p>{value} {unit}</p>
              </div>
            )
          }) }
        </div>
      </div>
    </div>
  )
}

export default TopForm