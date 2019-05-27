import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
};

const Part = (props) => {
  return (
      <p>{props.name} {props.amount}</p>
  )
};

const Content = (props) => {

    return (
        <div>
            <Part name={props.part1} amount={props.exercises1}/>
            <Part name={props.part2} amount={props.exercises2}/>
            <Part name={props.part3} amount={props.exercises3}/>
        </div>
    )
};

const Total = (props) => {
  return (
      <p>Number of exercises {props.sum}</p>
  )
};

const App = () => {
  let course = 'Half Stack application development';
  let part1 = 'Fundementals of React';
  let exercises1 = 10;
  let part2 = 'Using props to pass data';
  let exercises2 = 7;
  let part3 = 'State of a component';
  let exercises3 = 14;

  return (
      <div>
          <Header course={course}/>
          <Content part1={part1} exercises1={exercises1}
                   part2={part2} exercises2={exercises2}
                   part3={part3} exercises3={exercises3}/>
          <Total sum={exercises1 + exercises2 + exercises3}/>
      </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
