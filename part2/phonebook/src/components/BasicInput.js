import React from 'react'

const BasicInput = ({title, rModel, handler}) =>
  <p>
    {title}: <input value={rModel} onChange={handler} />
  </p>

export default BasicInput