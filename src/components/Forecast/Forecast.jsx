import React from 'react'

import './forecast.css'

const Forecast = ({weekForecast}) => {
  return (
    <div className='container__weekforecast'>
      {
        weekForecast.map((idx, id) => {
          return (
            <div key={id}>
              <div className='container__dayforecast'>
                <div className='container__temp'>
                  <img src={`icons/${idx.img}.png`} className='weather__icon' alt="" />
                  <label>{idx.weekday}</label>
                  <label>{idx.tempreture} </label>
                  <label>{idx.weather}</label>
                </div>

                <div className='container__weekday'>
                  <label>{idx.date}</label>
                </div>

                <div className='container__highandlow'>
                  <label>{idx.lowtemp} - {idx.hightemp}</label>
                </div>
              </div>

              {/* <div className='container__details'>
                <div>
                  <label>FEELS LIKE:</label>
                  <label>{idx.feelslike}</label>
                </div>
                <div>
                  <label>HUMIDITY:</label>
                  <label>{idx.humidity}</label>
                </div>
                <div>
                  <label>PRESSURE:</label>
                  <label>{idx.airpressure}</label>
                </div>
                <div>
                  <label>WIND SPEED:</label>
                  <label>{idx.wind}</label>
                </div>
                <div>
                  <label>VISIBILITY:</label>
                  <label>{idx.visibility}</label>
                </div>
              </div> */}
            </div>
          )
        })
      } 
    </div>
  )
}

export default Forecast