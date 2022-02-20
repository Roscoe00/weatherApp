import React from 'react'

const WeatherInfo = (props) => {
   const { description, temperature, wind } = props;

   return (
      <div>
         <h2>{description}</h2>
         <h2>{temperature}</h2>
         <h2>{wind}</h2>
      </div>
   )
}

export default WeatherInfo