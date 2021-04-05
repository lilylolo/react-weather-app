import React, { useState, useEffect } from 'react';
import "./WeatherForecast.css";
import axios from 'axios';
import WeatherForecastDay from './WeatherForecastDay';

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecastData, setForecastData] = useState(null);

    useEffect (() => {
        setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        setForecastData(response.data.daily);
        console.log(forecastData);
        setLoaded(true);
    }

if (loaded) {

    return (
    <div className="weather-forecast">
        <div className="row">
            {forecastData.map(function (dailyForecast, index) {
                if (index < 5) {
                    return (
                        <div className="col-3">
                        <WeatherForecastDay data={dailyForecast} />
                        </div>
                    );
            } else {
                return null;
            }
        })}
        </div>
    </div>
    );
    
} else { 
    let apiKey = "82d81708e91e054255cbbc064293ef51";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse);

    return null;    
    };
}