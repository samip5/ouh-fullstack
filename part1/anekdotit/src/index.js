import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdote = props => {
  return (
      <div>
          <p>{props.anecdote}</p>
          <p>has {props.votes} votes</p>
      </div>
  );
};

const App = (props) => {
    const [selected, setSelected] = useState(0);
    const [points, setPoints] = useState(new Uint8Array(props.anecdotes.length));

    const handleVote = () => {
      const newPoints = [...points];
      newPoints[selected] += 1;
      setPoints(newPoints);
    };

    return (
        <div>
            <Anecdote anecdote={props.anecdotes[selected]} votes={[points[selected]]}/>
            <button onClick={() => handleVote(selected)}>Vote</button>
            <button
                onClick={() =>
                    setSelected(Math.floor(Math.random() * (props.anecdotes.length)))
                }>
                New anecdote
            </button>
            <h1>Anecdote with most votes</h1>
            <Anecdote
                anecdote={props.anecdotes[points.indexOf(Math.max(...points))]}
                votes={points[points.indexOf(Math.max(...points))]}
            />
        </div>
    )
};

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
);