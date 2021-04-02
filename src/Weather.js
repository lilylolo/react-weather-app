import React, { useState } from 'react';
import './Weather.css';
import axios from 'axios';
import FormattedDate from './FormattedDate'


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({loaded: false});
  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      city: response.data.name,
      date: new Date (response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "",
      humidity: response.data.main.humidity,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      
    })
  }

  if (weatherData.loaded) {
     return  (
    
        <div className="App-wrapper">

       <form>
         <div className="row">
           <div className="col-6">
            <input type="text" placeholder="Enter a city.." autocomplete="off" />
          </div>
          <div className="col-3">
            <input type="submit" value="Search"/>
          </div>
          <div className="col-3">
            <input type="submit" value="Current"/>
          </div>
          </div>
       </form>

      <div className="row">
      <div className="col-6">
      <h1>{weatherData.city}</h1>

      <p>
        <FormattedDate date={weatherData.date} />
      </p>

      <h2>{Math.round(weatherData.temperature)}°C | F</h2>
      </div>
      <div className="col-6">
        <p><img src={weatherData.iconUrl}
                alt={weatherData.description} /> </p>
      </div>
      </div>

      
      <p>
        <ul>
          <li className="text-capitalize">{weatherData.description}</li>
          <li>Wind: {Math.round(weatherData.wind)}km/s</li>
          <li>Humidity: {weatherData.humidity}%</li>
        </ul>
      </p>

    <div className="future-forecast">
      <div className="row">
      <div className="col-3">
        Mon
      </div>
       <div className="col-3">
        Tues
      </div>
       <div className="col-3">
        Weds
      </div>
       <div className="col-3">
        Thurs
      </div>
      </div>

       <div className="row">
      <div className="col-3">
        Logo
      </div>
       <div className="col-3">
        Logo
      </div>
       <div className="col-3">
        Logo
      </div>
       <div className="col-3">
        Logo
      </div>
      </div>

      <div className="row">
      <div className="col-3">
        16°C
      </div>
       <div className="col-3">
        16°C
      </div>
       <div className="col-3">
        16°C
      </div>
       <div className="col-3">
        16°C
      </div>
      </div>

      </div>
      

    </div>
    );

  } else {
    const apiKey = "0d8a4461749ad27853c25b2011d4ab40";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
};