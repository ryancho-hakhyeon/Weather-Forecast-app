import React, { useEffect, useState } from 'react';

import Header from './components/Header/Hearder'
import Loader from './components/Loader/Loader';
import ModeTabs from './components/Mode/ModeTabs';

import useForecast from './hooks/useForecast';

const App = () => {
  const { forecast, weekForecast, airPollution, submitRequest } = useForecast()
  const [ unitToggle, setUnitToggle ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ modeSelection, setModeSelection ] = useState(null)
  
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    }
  }, [isLoading])
  
  const onSubmit = (value) => {
    // console.log(value)
    submitRequest(value)
  }

  const toggleState = (isToggle) => {
    // console.log(isToggle)
    setUnitToggle(isToggle)
  }

  const onHandleModeSelect = (isMode) => {
    // console.log(isMode)
    setModeSelection(isMode)
  }


  return (
    <>
      {isLoading ? 
        (<Loader />) 
        :
        (<>
          <Header submitSearch={onSubmit} unitChange={toggleState} modeChange={onHandleModeSelect} />
          { forecast && weekForecast && airPollution &&
          <ModeTabs forecast={forecast} weekForecast={weekForecast} airPollution={airPollution} modeChange={modeSelection} unitChange={unitToggle} /> }
        </>)
      }
    </>
  );
}

export default App;
