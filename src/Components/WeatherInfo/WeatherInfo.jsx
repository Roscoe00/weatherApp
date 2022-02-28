import React from 'react'

const WeatherInfo = (props) => {
   const { condition, temp, wind } = props;


   return (
      <div>
         <h2>{condition}</h2>
         <h2>{temp}</h2>
         <h2>{wind}</h2>
      </div>
   )
}

export default WeatherInfo