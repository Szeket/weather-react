import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`the weather in ${props.city} is ${response.data.main.temp}`);
  }
  let apiKey = "0517d60033ca170380a3d6540e3a62e0";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(url).then(handleResponse);
  return <h1> Hello there!</h1>;
}
