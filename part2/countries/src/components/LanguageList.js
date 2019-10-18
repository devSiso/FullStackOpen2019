import React from 'react'

const LanguageList = ({ languages }) =>
  languages.map(lang =>
    <li key={lang.name}>{lang.name}</li>
  );

export default LanguageList