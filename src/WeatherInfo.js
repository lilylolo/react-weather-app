import React from "react";
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';

export default function WeatherInfo(props) {
    return  ( 

    <div>

      <div className="row">
      <div className="col-6">
      <h1>{props.data.city}</h1>

      <div>
        <FormattedDate date={props.data.date} />
      </div>

      <WeatherTemperature celsius={props.data.temperature} />

      </div>

      <div className="col-6">
        
        <WeatherIcon code={props.data.icon} />

      </div>
      </div>

      
      <div>
        <ul>
          <li className="text-capitalize">{props.data.description}</li>
          <li>Wind: {Math.round(props.data.wind)}km/s</li>
          <li>Humidity: {props.data.humidity}%</li>
        </ul>
      </div>
      
      </div> ); 
      };