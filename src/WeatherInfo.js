import React from 'react';
import FormattedDate from './FormattedDate'

export default function WeatherInfo(props) {
    return  ( 

    <div>

        <div className="row">
      <div className="col-6">
      <h1>{props.data.city}</h1>

      <p>
        <FormattedDate date={props.data.date} />
      </p>

      <h2>{Math.round(props.data.temperature)}°C | F</h2>
      </div>
      <div className="col-6">
        <p><img src={props.data.iconUrl}
                alt={props.data.description} /> </p>
      </div>
      </div>

      
      <p>
        <ul>
          <li className="text-capitalize">{props.data.description}</li>
          <li>Wind: {Math.round(props.data.wind)}km/s</li>
          <li>Humidity: {props.data.humidity}%</li>
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
      
      </div> ); 
      };