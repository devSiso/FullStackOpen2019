import React from 'react'

const Search = ({ value, handler, text }) =>
  <div>
    <strong>{text} </strong>
     <input 
      value={value}
      onChange={handler}/>
  </div>

export default Search;