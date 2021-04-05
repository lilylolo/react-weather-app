import React from "react";
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';
import './WeatherInfo.css'

export default function WeatherInfo(props) {
    return  ( 

    <div>

      <div className="row">
        <div className="col-6">
              <h1>{props.data.city}</h1>

              <div>
                <FormattedDate date={props.data.date} />
              </div>

              <div>
                <ul>
                  <li className="text-capitalize">{props.data.description}</li>
                  <li>Wind: {Math.round(props.data.wind)}km/s</li>
                  <li>Humidity: {props.data.humidity}%</li>
                </ul>
              </div>
      </div>


        <div className="col-3" className="weather-temperature">
              <WeatherTemperature celsius={props.data.temperature} />

        
      </div>
      <div className="col-3" className="weather-icon">
              <WeatherIcon code={props.data.icon} size={100}/>
        </div>

      
     
      
      </div>
      </div>

    ); 
      };