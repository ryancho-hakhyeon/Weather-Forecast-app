import React from 'react'

import './topform.css'

const TopForm = ({forecast, unitToggle}) => {

  return (
    <div className='container__top'>
      <div className='container__cityname'>
        <p>{forecast.currentDay.location}, {forecast.currentDay.regionCode}, {forecast.currentDay.countryCode}</p>
      </div>

      <div className='container__current-box'>
        <div className='container__current-simple'>
          <div>
            <p className='today__weather'>{forecast.currentDay.weather}</p>
            <p>{forecast.currentDay.date}</p>
            <p>{forecast.currentDay.weekday}.</p>
            <div className={`today__temperature`}>
              <p >{ unitToggle === 'F' ? `${forecast.currentDay.temperature_fahrenheit}` : `${forecast.currentDay.temperature}`}°</p>
            </div>
          </div>

          <div className='container__today-img'>
            <img src={`new_icons/${forecast.currentDay.img}.png`} className='today__img' alt="" />
            {/* <p>{forecast.currentDay.des}</p> */}
          </div>
        </div>

        <div className='container__current-details'>
          <div className="current__detail">
            {
              unitToggle === 'F' ?
              <>
                <p>{forecast.currentDetails.feels_like_fahrenheit.name}</p>
                <p>{forecast.currentDetails.feels_like_fahrenheit.value} {forecast.currentDetails.feels_like_fahrenheit.unit}</p>
              </>
              : 
              <>
                <p>{forecast.currentDetails.feels_like.name}</p>
                <p>{forecast.currentDetails.feels_like.value} {forecast.currentDetails.feels_like.unit}</p>
              </>
            }
          </div>
          
          <div className='current__detail'>
            <p>{forecast.currentDetails.humidity.name}</p>
            <p>{forecast.currentDetails.humidity.value} {forecast.currentDetails.humidity.unit}</p>
          </div>

          <div className="current__detail">
            <p>{forecast.currentDetails.pressure.name}</p>
            <p>{forecast.currentDetails.pressure.value} {forecast.currentDetails.pressure.unit}</p>
          </div>

          <div className="current__detail">
            <p>{forecast.currentDetails.visibility.name}</p>
            <p>{forecast.currentDetails.visibility.value} {forecast.currentDetails.visibility.unit}</p>
          </div>
          
          <div className="current__detail">
            <p>{forecast.currentDetails.wind.name}</p>
            <p>{forecast.currentDetails.wind.value} {forecast.currentDetails.wind.unit}</p>
          </div>

          <div className="current__detail">
            <p>{forecast.currentDetails.sunrise.name}</p>
            <p>{forecast.currentDetails.sunrise.value} {forecast.currentDetails.sunrise.unit}</p>
          </div>

          <div className="current__detail">
            <p>{forecast.currentDetails.sunset.name}</p>
            <p>{forecast.currentDetails.sunset.value} {forecast.currentDetails.sunset.unit}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopForm