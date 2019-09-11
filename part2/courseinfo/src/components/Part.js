import React from 'react'

const Part = ({ part }) => {
  const partName = part.name;
  const partExercises = part.exercises;

  return (
    <p>{partName}: {partExercises}</p>
  )
}

export default Part;