import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <hr class="bg-warning border-2" />
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <WeatherIcon code="01n" size={12} />
          <div className="temperatures">
            <span className="temperature-max"> 11 </span>
            <span className="temperature-min"> 4 </span>
          </div>
        </div>
      </div>
    </div>
  );
}
