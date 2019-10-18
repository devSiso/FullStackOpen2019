import React from 'react'
import Country from './Country'
import NameList from './NameList'

const Countries = ({ countries, filter, setFilter }) => {
  const filteredCountries = 
    countries.filter(country =>
      country.name
      .toLowerCase()
      .indexOf(filter.toLowerCase()) >= 0);

    if (filter === '') 
      return <p>Please provide a filter </p>

    if (filteredCountries.length === 1) 
      return <Country country={filteredCountries[0]} />

    if (filteredCountries.length > 10) 
      return <p>Too many matches, specify another filter</p>

    const countriesList = filteredCountries.map(country =>
        <NameList
          key={country.name}
          country={country} 
          setFilter={setFilter} />
    )

    return (
        <>
          {countriesList}
        </>
    )
}

export default Countries