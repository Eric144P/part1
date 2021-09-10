import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part0} with an amount of {props.exercise0} exercises</p>
      <p>{props.part1} with an amount of {props.exercise1} exercises</p>
      <p>{props.part2} with an amount of {props.exercise2} exercises</p>
    </div>
  )
}

const Content = (props) => {
  return (
  <Part part0={props.name0} exercise0={props.exercise0}
      part1={props.name1} exercise1={props.exercise1}
      part2={props.name2} exercise2={props.exercise2}/>
  )
}

const sum = course.parts[0].exercises+ course.parts[1].exercises + course.parts[2].exercises

const Total = (props) => {
  return (
    <div> The total amount of exercises is : {props.sum} </div>
  )
}

  return (
    <div>
      <Header course={course.name}/>
      <Content name0={course.parts[0].name} exercise0={course.parts[0].exercises} name1={course.parts[1].name} exercise1={course.parts[1].exercises} name2={course.parts[2].name} exercise2={course.parts[2].exercises} />
      <Total sum={sum} />
    </div>
  )
}

export default App