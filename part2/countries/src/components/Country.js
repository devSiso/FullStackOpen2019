import React from 'react'
import LanguageList from './LanguageList'
import Weather from './Weather'

const Country = ({ country }) => {

  return (
    <div>
      <h2>{country.name}</h2>
      <strong>Capital: </strong>
      {country.capital} 
      <br />
      <strong>Population: </strong>
      {country.population.toLocaleString()}
      <h3>Languages</h3>
      <ul>
        { 
          <LanguageList 
          languages={country.languages} />
        }
      </ul>
      <img 
        alt={`Flag of ${country.name}`}
        src={country.flag} 
        width="160" />
      <Weather 
        city={country.capital} />
    </div>
  )
}

export default Country;