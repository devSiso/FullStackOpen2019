import React from 'react';
import Course from './components/Course'

const App = ({ courses }) => {
  const getCourses = () =>
    courses.map(course =>
      <Course course={course} key={course.id} />)

  return (
    <div>
        <h1>Web development curriculum</h1>
        {getCourses()}
    </div>
  )
}

export default App;