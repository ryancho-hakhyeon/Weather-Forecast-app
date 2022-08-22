import React from 'react'

import './topform.css'

function TopForm() {
  return (
    <div className='container__top'>
      <div className='container__topbox'>
        <div className='container__today'>
          
          <p>Year</p>
          <p>Date, Months</p>
          
          <p>25°C</p>
          <p>Sunny</p>
        </div>

        <div className='container__today-info'>
            <p>Feels Like</p>
            <p>H.T</p>
            <p>L.T</p>
            <p>Humidity</p>
            <p>Pressure</p>
            <p>Wind</p>
        </div>
      </div>

    </div>
  )
}

export default TopForm