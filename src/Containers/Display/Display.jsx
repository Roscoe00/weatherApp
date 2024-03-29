import { useState, React } from 'react'
import Searchbox from '../../Components/Searchbox/Searchbox';
import WeatherInfo from '../../Components/WeatherInfo/WeatherInfo';
import "./Display.scss"

const Display = () => {

   const [weather, setWeather] = useState(
      NaN
   );

   const [searchTerm, setSearchTerm] = useState("");

   // const validResponse = (response) => {
   //    console.log(response.status)
   //    if (response.status !== 200) {
   //       // setValidSearch(false)
   //       return Promise.reject("error");
   //    } else {
   //       // setValidSearch(true)
   //       console.log(response.json())
   //       return response.json();
   //    }
   // }

   const handleSubmit = (search) => {
      setSearchTerm(searchTerm)
      console.log(searchTerm)
      search.preventDefault()
      fetch(`http://api.weatherapi.com/v1/current.json?key=9a1d00e25c6a44ed983171357222702&q=${searchTerm}&aqi=no`)
         .then(response => response.json())
         .then(json => {
            setWeather(json)
            console.log(weather)
         })
      // const history = {
      //    city: weather.location.name,
      //    weather: weather.current.condition.text,
      //    temperature: weather.current.temp_c,
      //    windSpeed: weather.current.wind_kph,
      // }
      // console.log(history)
      // fetch(`http://localhost:8080/add/${weather.location.name}`, {
      //    method: 'POST',
      //    headers: {
      //       'Content-Type': 'application/json'
      //    },
      //    body: JSON.stringify(history)
      // })

      // .catch(error => {
      //    console.log(error)
      // })
   }

   // const { current } = weather;

   return (
      <div>
         <Searchbox searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSubmit={handleSubmit} />
         {weather && <WeatherInfo
          condition={"sd"} temp={"yes"} wind={"ij"} />}
      </div>
   )
}

export default Display