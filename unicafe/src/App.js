import React, { useState } from 'react'

// Button element
const Button = ({onClick, text}) => {
return (
  <button onClick={onClick}>
    {text}
  </button>
)
}

// single statistic
const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


// multiple statistics together
const Statistics = ({ good, neutral, bad }) => {

  const total = good + neutral + bad
  const average = (good - bad ) / total
  const positive = (good / total) * 100

  // if no feedback  is given
  if (total === 0) {
    return (
      <p>no feedback given, the app is used by pressing the buttons</p>
    )
  }

  return (
    <div>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='total' value={total} />
      <StatisticLine text='average' value={average} />
      <StatisticLine text='positive' value={positive} />
      </div>
  )
  
}

// application & return on browser
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) 



  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good +1)} text="good" />
      <Button onClick={() => setNeutral(neutral +1)} text="neutral"/>
      <Button onClick={() => setBad(bad +1)} text="bad"/>

      <h2>statistics</h2>
      <Statistics  
    good={good}
    neutral={neutral}
    bad={bad}/>
    </div>
  )
}

export default App