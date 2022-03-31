import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState("false");
  let [forecast, setForecast] = useState("null");

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded("true");
    console.log(response.data.daily);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <hr className="bg-warning border-3 border-top border-warning" />
        <div className="row">
          <div className="col">
            <div className="forecast-day">Thu</div>
            <WeatherIcon code="01n" size={46} />
            <div className="temperatures">
              <span className="temperature-max">
                <strong>{forecast[0].temp_max}</strong>{" "}
              </span>{" "}
              |<span className="temperature-min">{forecast[0].temp_min} </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiKey = "0517d60033ca170380a3d6540e3a62e0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
