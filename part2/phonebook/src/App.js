import React, { useState, useEffect } from 'react'
import phoneBookService from './services/phonebookService'
import Header from './components/Header'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Notification from './components/Notification'
import Form from './components/Form'

const App = () => {
  const [ persons, setPersons] = useState([]);
  const [ filteredPersons , setFilteredPersons ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ searchParameter, setSearchParameter ] = useState('');
  const [ notificationObject, setNotificationObject ] = useState('');

  useEffect(() => {
    phoneBookService.getAll().then(InitialPersons => {
      setPersons(InitialPersons);
    })
  },[]);

  const getExistentPerson = () => {
    const existent = persons.find(person => person.name === newName);
    return {...existent, number: newNumber }
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
    const updatedPerson = getExistentPerson();
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1 || 0
    }

    if(updatedPerson.id) {
      const message = `${updatedPerson.name} already exists in the list, do you want to replace the old number?`;
      const confirm = window.confirm(message);

      if(confirm) {
        phoneBookService.update(updatedPerson.id, updatedPerson).then(updated => {
          setNotificationObject({message: `${updatedPerson.name}'s number was updated `, type: 'success'})
          
          setPersons(persons.map(person => person.id !== updatedPerson.id ? person : updated));
        }).catch(err => {
          setNotificationObject({message: `An error has ocurred while updating ${updatedPerson.name}'s `, type: 'success'})
          setTimeout(() => {
            setNotificationObject({});
          }, 2000);
        })
      }
    } else {
      phoneBookService.create(newPerson).then(created => {
        setPersons(persons.concat(created));
        setNotificationObject({message: `${newPerson.name} was added `, type: 'success'})
        setTimeout(() => {
          setNotificationObject({});
        }, 1500);
      }).catch(err => {
        setNotificationObject({message: `An error has ocurrede while creating a new contact`, type: 'success'})
        setTimeout(() => {
          setNotificationObject({});
        }, 1500);
      });
    }
    
    resetFields();
  };

  const deletePerson = (person) => {
    const message = window.confirm(`Delete ${person.name}?`);
    
    if(message) {
      phoneBookService.deletePerson(person.id).then(() => {
        phoneBookService.getAll().then(response => {
          setPersons(response);
          setNotificationObject({message: `${person.name} was removed`, type: 'success'});
          setTimeout(() => {
            setNotificationObject({});
          }, 1500);
        });
        }).catch(err => {
          setNotificationObject({message: `${person.name} has already been removed from server`, type: 'error'});
          phoneBookService.getAll().then(response => {
            setPersons(response);
            setTimeout(() => {
              setNotificationObject({});
            }, 1500);
          });
      })
    }
  }

  return (
    <>
      <Header title="Phonebook" />
      <Notification 
        message={notificationObject.message}
        type={notificationObject.type}
      />
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
      <Persons persons={searchParameter === '' ? persons : filteredPersons}  deleteHandler={props => deletePerson(props)}/>
    </>
  )
}

export default App