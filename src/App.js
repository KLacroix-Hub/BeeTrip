import React, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {

  const[query, setQuery] = useState('');

  const[weather, setWeather] = useState({});

  const search =  async(e) => {
    if(e.key === 'Enter') {
      const data = await fetchWeather(query)
      setWeather(data);
      setQuery('');
    }
  }


  return (
    <div className="App">

      <input 
        type="text"
        className ="search"
        placeholder = "Rechercher une ville..."
        value={query}
        onChange={ (e) => setQuery(e.target.value) }
        onKeyPress = {search}
      />

      { weather.main && (

        <div className="Ville">

          <h2 className='nomVilleContainer'>
            <span> { weather.name } { weather.sys.country } </span>
            <p>{ Math.round(weather.main.temp) }<sup>&deg;C</sup></p>
          </h2>

          <div className="temperatureVille">
            { Math.round(weather.main.temp) < 15
            ? <span className="Froid"></span>
            : <span className="Chaud"></span>
            }
          </div>

        </div>
      )}
    </div>
  );
}

export default App;
