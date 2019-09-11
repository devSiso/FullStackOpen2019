import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getRandomicNumber = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const Button = ({ text, onClick }) => 
  <button onClick={onClick}>{text}</button>

const MostVoted = ({ votes }) => {
  const mostVoted = Math.max(...votes)
  const mostVotedIndex = votes.indexOf(mostVoted)

  if (mostVoted > 0) {
      return (
          <>
              <h1>Anecdote with the most votes</h1>
              <p>{anecdotes[mostVotedIndex]} <br/> has {votes[mostVotedIndex] + ' votes'} </p>
          </>
      )
  }
  return false
}

const App = ({ anecdotes }) => {
  const [selected, setSelected] = 
    useState(getRandomicNumber(0, anecdotes.length - 1));

  const [points, setPoints] = 
    useState(new Array(anecdotes.length).fill(0));

  const randomSelection = () => () => 
    setSelected(getRandomicNumber(0, anecdotes.length - 1));

  const vote = selected => () => {
    const copy = [...points]
    copy[selected]++
    setPoints(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button onClick={vote(selected)} text="Vote" />
      <Button onClick={randomSelection()} text="Next anecdote" />
      <MostVoted anecdotes={anecdotes} votes={points} />
    </div>
  )
}
ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)