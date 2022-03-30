import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-2 mx-1">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="row mt-4 mx-1">
        <div className="col-sm-6">
          <div className="clearfix">
            <div className="icon">
              <WeatherIcon code={props.data.icon} size={64} />
            </div>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
