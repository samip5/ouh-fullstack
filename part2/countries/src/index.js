import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const CountriesL = ({list,search}) => {
    const data = list.filter(country =>
        country.name.toLowerCase().includes(search.toLowerCase())
    );

    if (data.length>10) {
        return <p>Too many matches.</p>
    }

    return (
        <>
            {data.map(country => <CountryD key={country.name} show={false} name={country.name} />)}
        </>
    );
};

const CountryD = props => {
    const [countryD, setCountryD] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        axios.get(`https://restcountries.eu/rest/v2/name/${props.name}`)
            .then(response => {
                setCountryD(response.data[0])
            })
        }, [props.name]);

    return show ? (<div>
        <h2>{countryD.name}</h2>
        <p>Capital: {countryD.capital}</p>
        <p>Population: {countryD.population}</p>
        <h3>Languages: </h3>
        <ul>
            {countryD.languages && countryD.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
        </ul>
        <img src={countryD.flag} height="150" alt={`${countryD.name} flag`} />
    </div>):
        (<p key={countryD.name}>
            {countryD.name}
            <button onClick={() => setShow(!show)}>Show</button>
        </p>)
};

const App = props => {
    const [countries, setCountries] = useState([]);
    const [countryName, setCountryName] = useState('');

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data);
            })
    }, []);

    const onChangeHandler = event => {
        setCountryName(event.target.value);
    };

    return (
        <div>
            find countries
            <input onChange={onChangeHandler}/>
            <CountriesL list={countries} search={countryName}/>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));

