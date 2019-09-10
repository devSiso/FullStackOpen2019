import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({onClick, text}) => 
  <button onClick={onClick}>{text}</button>;

const Statistic = ({ text, value }) => {
  return(
    <tr>
      <td>{text}:</td> 
      <td>{value}</td>
    </tr>
  )
}

const Statistics = props => {
  if(!props.hasVote) {
   return (
      <div>
        <p>No Feedback given</p>
      </div>
    )
  }
  return (
    <table>
      <thead>
        <tr>
          <th>
            <h1>Statistics</h1>
          </th>
        </tr>
      </thead>
      <tbody>
        <Statistic text="good" value={props.good} />
        <Statistic text="neutral" value={props.neutral} />
        <Statistic text="bad" value={props.bad} />
        <Statistic 
          text="all" 
          value={props.good + props.neutral + props.bad} />
        <Statistic 
          text="average"
          value={props.calculateAverage()} />
        <Statistic 
          text="positives"
          value={`${props.positivesPercentage()}%`} />
        </tbody>
      </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const handleGood = () => setGood(good + 1 );
  const handleNeutral = () => setNeutral(neutral + 1 );
  const handleBad = () => setBad(bad + 1 );

  const calculateAverage = () => (good - bad) / (good + bad) || 0;

  const positivesPercentage = () => (good * 100) / (good + bad) || 0;

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        <Button onClick={handleGood} text="good" />
        <Button onClick={handleNeutral} text="neutral" />
        <Button onClick={handleBad} text="bad" />
      </div>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        calculateAverage={calculateAverage}
        positivesPercentage={positivesPercentage}
        hasVote={
            (good > 0 || neutral > 0 || bad > 0) ? true : false
          }
        />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));