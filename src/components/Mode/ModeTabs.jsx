import React, { useEffect } from 'react'

import TopForm from '../TopForm/TopForm'
import Forecast from '../Forecast/Forecast'
import Dashboard from '../Dashboard/Dashboard'

import { getConvertTime } from '../../hooks/module'

import './modeTabs.css'

const ModeTabs = ({ forecast, weekForecast, airPollution, unitChange, modeChange }) => {
    // console.log(unitChange)
    // console.log(forecast.currentDay.temperature)

    useEffect(() => {
      const currenTime = new Date()
      // console.log(currenTime)
      const timeSunrise = getConvertTime(forecast.currentDetails.sunrise.value, forecast.currentDetails.sunrise.unit)
      const timeSunset = getConvertTime(forecast.currentDetails.sunset.value, forecast.currentDetails.sunset.unit)
      
      if (currenTime >= timeSunrise && currenTime < timeSunset) {
        document.body.style.background = "linear-gradient(var(--bg-color-start), var(--bg-color-end)) no-repeat"
      } else {
        document.body.style.background = "linear-gradient(var(--bg-night-color-start), var(--bg-night-color-end)) no-repeat"
      }

    }, [forecast])

    // console.log(backgroundMode)

  return (
    <>
        { modeChange==='dashboard' ? 
        <>
            <Dashboard forecast={forecast} weekForecast={weekForecast} airPollution={airPollution} unitToggle={unitChange}/>
        </>
        :
        <>
            <TopForm forecast={forecast} airPollution={airPollution} unitToggle={unitChange} />
            <Forecast weekForecast={weekForecast} unitToggle={unitChange} />
        </>
        }
    </>
  )
}

export default ModeTabs