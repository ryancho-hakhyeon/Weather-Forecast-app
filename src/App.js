import React from 'react';

import Header from './components/Header/Hearder'
import TopForm from './components/TopForm/TopForm';
import Forecast from './components/Forecast/Forecast'

import useForecast from './hooks/useForecast';

// // import Loader from './components/Loader/Loader'

const App = () => {
  const { forecast, weekForecast, submitRequest } = useForecast()

  const onSubmit = (value) => {
    // console.log(value)
    submitRequest(value)
  }

  return (
    <>
      {/* <Loader/> */}
      <Header submitSearch={onSubmit} />
      
      {forecast && <TopForm forecast={forecast}/>}
      {weekForecast && <Forecast weekForecast={weekForecast} />}
    </>
  );
}

export default App;
