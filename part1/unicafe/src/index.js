import React, { useState} from 'react'
import ReactDOM from 'react-dom'

const Display = props => <div>{props.name}: {props.value}</div>;

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
);

const Statistics = (props) => {
    const all = props.good + props.neutral + props.bad;
    const avg = (props.good-props.bad)/all;
    const positiv = 100*props.good/all + " " + "%";

    if (all > 0 ) {
        return (
            <div>
                <h2>Stats</h2>
                <p>
                    Good: {props.good}<br/>
                    Neutral: {props.neutral}<br/>
                    Bad: {props.bad}<br/>
                </p>
                <p>
                    Total: {all}<br/>
                    Avg: {avg}<br/>
                    Positive: {positiv}<br/>
                </p>
            </div>
        )
    } else {
        return (
            <p>No feedback.</p>
        )
    }
};

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [rate, setRate] = useState(0);


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
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )

};

ReactDOM.render(<App />,
    document.getElementById('root')
);