import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: "Wednesday, 7:00",
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather.icon,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather shadow rounded">
        <form>
          <div className="row">
            <div className="col-sm-9">
              <input
                type="search"
                placeholder="type a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-sm-3">
              <input
                type="submit"
                value="search"
                className="btn btn-warning w-100"
              />
            </div>
          </div>
        </form>
        <div className="row mt-2 mx-1">
          <h1>Warsaw</h1>
          <ul>
            <li>{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
        </div>
        <div className="row mt-4 mx-1">
          <div className="col-sm-6">
            <div className="clearfix">
              <img src={weatherData.icon} alt={weatherData.description} />
              <span className="currentTemp">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C|F</span>
            </div>
          </div>
          <div className="col-sm-6">
            <ul>
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0517d60033ca170380a3d6540e3a62e0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
