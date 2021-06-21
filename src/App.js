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
        placeholder = "Search..."
        value={query}
        onChange={ (e) => setQuery(e.target.value) }
        onKeyPress = {search}
      />

      { weather.main && (

        <div className="city">

          <h2 className='city-name'>
            <span>{ weather.name }</span>
            <sup>{ weather.sys.country }</sup>
          </h2>

          <div className="city-temp">
           { Math.round(weather.main.temp) }<sup>&deg;C</sup>
            { Math.round(weather.main.temp) < 15
            ? <p className="Froid">Il fait froid</p>
            : <p className="Chaud">Il fait chaud</p>
            }
          </div>

        </div>
      )}
    </div>
  );
}

export default App;
