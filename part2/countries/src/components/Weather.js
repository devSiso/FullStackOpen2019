import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ city }) => {

  const [weather, setWeather] = useState({})

  const getWeather = () => {
      const APIKey = 'ab812c2af010d90d7371c3100a5d8713';
      const url = 
        `http://api.weatherstack.com/current?access_key=${APIKey}&query=${city}`;

      axios
          .get(url)
          .then(response => setWeather(response.data))
  }

  useEffect(getWeather, [])

  if (Object.entries(weather).length === 0) 
      return <p>no weather data</p>

  return (
    <div>
      <h3>Weather in {city}</h3>
      <div>
        <strong>Temperature: </strong>
        {weather.current.temperature}℃
        <p>
          <strong>Feels like: </strong>
          {weather.current.feelslike} ℃
        </p>
      </div>
      <figure>
        <img 
          alt={weather.current.weather_descriptions[0]} 
          src={weather.current.weather_icons[0]} />
        <figcaption>
          {weather.current.weather_descriptions[0]}
        </figcaption>
      </figure>
      <div>
        <strong>Wind: </strong>
        {weather.current.wind_speed} kph direction {weather.current.wind_dir}
      </div>
    </div>
  )
}

export default Weather