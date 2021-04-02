import React, { useState } from 'react';
import './Weather.css';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({loaded: false});
  const [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      city: response.data.name,
      date: new Date (response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      
    });
  }


    function search() {
    const apiKey = "82d81708e91e054255cbbc064293ef51";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
      event.preventDefault();
      search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
     return  (
    
        <div className="App-wrapper">

       <form onSubmit={handleSubmit}>
         <div className="row">
          <div className="col-6">
            <input 
            type="text" 
            placeholder="Enter a city.." 
            autoComplete="off"
            onChange={handleCityChange} />
          </div>
          <div className="col-3">
            <input type="submit" value="Search"/>
          </div>
          <div className="col-3">
            <input type="submit" value="Current"/>
          </div>
          </div>
       </form>

       <WeatherInfo data={weatherData} />

    
    
    </div>
    );

  } else {
    search();
    return "Loading...";
  }
};