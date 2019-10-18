import React from 'react'

const NameList = ({ country, setFilter }) => {

  const showInfos = countryName =>
    () => setFilter(countryName);

  return (
    <div>
      {country.name}
        <button onClick={showInfos(country.name)}>
            show
        </button>
    </div>
  )
}

export default NameList;