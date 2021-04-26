import React, { useState } from "react";
import './WeatherTemperature.css'

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");


    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit")
    }       
    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
    }

    if (unit === "celsius") {
    return (
        <div>
        <span className="temperature">{Math.round(props.celsius)}</span><span className="units"> °C | <a  href="/" onClick={convertToFahrenheit}>F</a></span>
        </div>
    )
    } else {
        let fahrenheit = (props.celsius * 9) / 5 + 32;

        return ( 
            <div>
        <span className="temperature">{Math.round(fahrenheit)}</span><span className="units"><a  href="/" onClick={convertToCelsius}> °C</a> | F</span>
        </div>
 
        )
    }
}