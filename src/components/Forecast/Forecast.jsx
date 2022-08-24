import React from 'react'

import './forecast.css'

const Forecast = ({weekForecast}) => {
  return (
    <div className='container__weekforecast'>
      {
        weekForecast.map((idx) => {
          return (
            <div key={idx.date} className='container__dayforecast'>
              <div>
                <p>{idx.tempreture}</p>
              </div>

              <div>
                <p>{idx.weekday} {idx.date}</p>
              </div>

              <div>
                <p>{idx.hightemp} / {idx.lowtemp}</p>
              </div>
            </div>
          )
        })
      } 
    </div>
  )
}

export default Forecast