import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const courses = [{
    name: 'Half Stack application development',
    id: 1,
    parts: [
      { id: 1, name: 'Fundamentals of react', exercises: 10 },
      { id: 2, name: 'Using props to pass data', exercises: 7 },
      { id: 3, name: 'State of component', exercises: 14 },
      { id: 4, name: 'Redux', exercises: 11 }
    ]
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      { id: 1, name: 'Routing', exercises: 3 },
      { id: 2, name: 'Middlewares', exercises: 7 }
    ]
  },
  {
    name: 'CSS',
    id: 3,
    parts: [
      { id: 1, name: 'FlexBox', exercises: 1 },
      { id: 2, name: 'CSS Grid', exercises: 3 }
    ]
  }
]


ReactDOM.render(<App courses={courses} />, document.getElementById('root'));