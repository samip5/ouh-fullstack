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

    const handleGood = () => {
        console.log('Good button clicked and added.');
        setGood(good +1);
    };

    const handleNeutral = () => {
        console.log('Neutral button clicked and added.');
        setNeutral(neutral + 1);
    };

    const handleBad = () => {
        console.log('Bad button clicked and added.');
        setBad(bad + 1);
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
            </div>
        </div>
    )

};

ReactDOM.render(<App />,
    document.getElementById('root')
);