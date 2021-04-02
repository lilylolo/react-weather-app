import React, { useState } from 'react';
import './Weather.css';
import axios from 'axios';
import FormattedDate from './FormattedDate'
import WeatherInfo from './WeatherInfo';


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
            <input type="text" placeholder="Enter a city.." autoComplete="off" />
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
    const apiKey = "82d81708e91e054255cbbc064293ef51";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
};