import React, { useState } from "react";
import './Weather.css';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast';



export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      city: response.data.name,
      coordinates: response.data.coord,
      date: new Date (response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
    });
  }


    function search() {
    let apiKey = "82d81708e91e054255cbbc064293ef51";
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

            <form className="form" onSubmit={handleSubmit}>
                <div className="row">
                    <div>
                            <input 
                            type="text" 
                            placeholder="Enter a city.." 
                            autoComplete="off"
                            onChange={handleCityChange} 
                            className="search-box"/>
                    </div>
                    <div>
                            <input  type="submit" className="btn btn-light" value="Search" />
                    </div>
                
                  </div>
            </form>

       <WeatherInfo data={weatherData} />

       <WeatherForecast coordinates={weatherData.coordinates}/>
          </div>
    );

  } else {
    search();
    return "Loading...";
  }
};