import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-2 mx-1">
        <h1>Warsaw</h1>
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
            <img src={props.data.icon} alt={props.data.description} />
            <span className="currentTemp">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C|F</span>
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