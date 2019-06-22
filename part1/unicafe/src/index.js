import React, { useState} from 'react'
import ReactDOM from 'react-dom'

const Display = props => <div>{props.name}: {props.value}</div>;

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
);

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [rate, setRate] = useState(0);
    const all = good + neutral + bad;
    const avg = rate/all;
    const positiv = 100*good/all + " " + "%";


    const handleGood = () => {
        setGood(good +1);
        setRate(rate + 1);
    };

    const handleNeutral = () => {
        setNeutral(neutral + 1);
        setRate(rate + 0);
    };

    const handleBad = () => {
        setBad(bad + 1);
        setRate(rate - 1);
    };

    return (
        <div>
            <div>
                <h2>Give some feedback</h2>
                <Button handleClick={handleGood} text={"Good"}/>
                <Button handleClick={handleNeutral} text={"Neutral"}/>
                <Button handleClick={handleBad} text={"Bad"}/>
                <br/>
            </div>
            <div>
                <h2>Results</h2>
            <Display name="Good" value={good}/>
            <Display name="Neutral" value={neutral}/>
            <Display name="Bad" value={bad}/>
            <Display name="All" value={all}/>
            <Display name="Average" value={avg}/>
            <Display name="Positive" value={positiv} />
            </div>
        </div>
    )

};

ReactDOM.render(<App />,
    document.getElementById('root')
);