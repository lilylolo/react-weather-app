import React from "react";
import WeatherIcon from './WeatherIcon'

export default function WeatherForecastDay(props) {
    function maxTemp() {
        let temperature = Math.round(props.data.temp.max);
        return (`${temperature}`)
        };

    function minTemp() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}`
        }

    function day() {
        let date = new Date (props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]   

        return days[day];
    }

    

    return (
        <div>
        <div className="forecast-day">{day()}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={35} />
            <div className="forecast-temperature">
                <span className="forecast-temp-max">{maxTemp()}° </span>
                <span className="forecast-temp-min">{minTemp()}°</span>
        </div>
        </div>
    )
}