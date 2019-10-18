import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Countries from './components/Countries'
import Search from './components/Search'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  const handleFilter = (event) => 
    setFilter(event.target.value)

  const fetchCountries = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => 
        setCountries(response.data));
  }

  useEffect(fetchCountries, [])

  return (
    <>
      <Search 
        text="Find countries: "
        value={filter} 
        handler={handleFilter} />
      <br/>
      <Countries countries={countries} filter={filter} setFilter={setFilter} />
    </>
  )
}

export default App