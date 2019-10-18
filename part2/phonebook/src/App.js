import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Form from './components/Form'

const App = () => {
  const [ persons, setPersons] = useState([]);
  const [ filteredPersons , setFilteredPersons ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ searchParameter, setSearchParameter ] = useState('');
  const personsHost = 'http://localhost:3008/persons';

  useEffect(() => {
    axios.get(personsHost).then(res => setPersons(res.data));
  },[]);

  const alreadyExists = () => {
    const verifier  = persons.filter(person => person.name === newName);
    return verifier.length
  };

  const resetFields = () => {
    setNewName('')
    setNewNumber('')
  }
  const handleNameInput = event => {
    const value = event.target.value;
    setNewName(value);
  };

  const handleSearchInput = event => {
    const value = event.target.value;
    const filteredPersons = persons.filter(person => 
      person.name.toLowerCase().includes(value.toLowerCase()));
    
    setSearchParameter(value);
    setFilteredPersons(filteredPersons);
  };

  const handleNumberInput = event => {
    const value = event.target.value;
    setNewNumber(value);
  };

  const handlePersonSubmit = event => {
    event.preventDefault();
    const exists = alreadyExists();
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    exists
    ? alert(`${newName} already exists`)
    : setPersons(persons.concat(newPerson));
    
    resetFields();
  };

  return (
    <>
      <Header title="Phonebook" />
      <Filter
        text="filter shown with"
        filter={searchParameter} 
        handleFilterChange={handleSearchInput} />
      <Form
        addPerson={handlePersonSubmit}
        nameModel={newName}
        numberModel={newNumber}
        nameHandler={handleNameInput}
        numberHandler={handleNumberInput}
        />
      <Header title="Numbers" subheader={true}/>
      <Persons persons={searchParameter === '' ? persons : filteredPersons} />
    </>
  )
}

export default App