import React from 'react'

const Header = ({ title , subheader}) =>
  subheader ? <h3>{title}</h3> : <h2>{title}</h2>

export default Header;