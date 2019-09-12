import React from 'react'
import Header from './Header'
import BasicInput from './BasicInput'
import SubmitButton from './SubmitButton'

const Form = props => {
  const { addPerson,
          nameModel,
          numberModel,
          nameHandler,
          numberHandler } = props;

  return (
    <>
      <form 
        onSubmit={addPerson}>
        <Header title="Add new" subheader={true}/>
        <BasicInput title="name" rModel={nameModel} handler={nameHandler} />
        <BasicInput title="number" rModel={numberModel} handler={numberHandler} />
        <SubmitButton text="add" />
      </form>
    </>
  )
}

export default Form