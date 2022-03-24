import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState(null);
  let [message, setMessage] = useState(null);

  function Submit(event) {
    event.preventDefault();
    let apiKey = "0517d60033ca170380a3d6540e3a62e0";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    setMessage(
      <ul>
        <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
        <li>{response.data.weather[0].description}</li>
        <li>Humidity: {Math.round(response.data.main.humidity)}%</li>
        <li>Wind: {Math.round(response.data.wind.speed)}km/h</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt="icon"
          />
        </li>
      </ul>
    );
  }
  return (
    <div className="form">
      <h3>{updateCity}</h3>
      <form classNabe="mb-3" onSubmit={Submit}>
        <input type="search" onChange={updateCity} className="form-control" />
        <input type="submit" value="search" className="btn btn-primary w-100" />
      </form>
      <h3>{message}</h3>
    </div>
  );
}
