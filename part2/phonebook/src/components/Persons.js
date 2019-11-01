import React from 'react'

const Persons = ({ persons, deleteHandler }) =>
  <ul>
    {
      persons.map(person =>
        <li key={person.id}>
          <p> {person.name} - {person.number} </p>
          <button onClick={() => deleteHandler({name:person.name, id: person.id})}>
            delete
          </button>
        </li>        
      )
    }
  </ul>

export default Persons;