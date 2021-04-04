import React, { useState } from 'react';

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function convertToFarenheit(event) {
        event.preventDefault();
        setUnit("farenheit")
    }       
    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
    }

    if (unit === "celsius") {
    return (
        <div>
        <h2>{Math.round(props.celsius)}°C | <a href="" onClick={convertToFarenheit}>F</a></h2>
        </div>
    )
    } else {
        let farenheit = (props.celsius * 9) /  + 32;

        return ( 
            <div>
        <h2>{Math.round(farenheit)}°<a href="" onClick={convertToCelsius}>C</a> | F</h2>
        </div>
 
        )
    }
}