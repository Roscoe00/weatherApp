import { useState, React, useEffect } from 'react'
import Searchbox from '../../Components/Searchbox/Searchbox';
import WeatherInfo from '../../Components/WeatherInfo/WeatherInfo';
import "./Display.scss"

const Display = () => {

   const [weather, setWeather] = useState({});
   const [searchTerm, setSearchTerm] = useState("");

   const handleSubmit = (search) => {
      setSearchTerm(search.target[0].value)
      // console.log(search.target[0].value)
      search.preventDefault()
      // fetch('http://localhost:8080/boardgame/add', {
      //    method: 'POST',
      //    headers: {
      //       'Content-Type': 'application/json'
      //    },
      //    body: JSON.stringify(boardgame)
      // })
      //    .then(() => { getBoardgames() })
      //    .catch(err => console.log(err))
      // search.target.reset();
   }

   const getWeather = () => {
      fetch("https://goweather.herokuapp.com/weather/" + searchTerm)
         .then(response => response.json())
         .then(json => setWeather(json))
   }

   // object has .description .forecast.(0-3) .temperature .wind

   useEffect(() => {
      getWeather()
   }, [searchTerm]);


   const { description, temperature, wind } = weather;

   return (
      <div>
         <Searchbox searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSubmit={handleSubmit} />
         <WeatherInfo description={description} temperature={temperature} wind={wind} />
      </div>
   )
}

export default Display