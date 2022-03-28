import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="type a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-danger" />
          </div>
        </div>
      </form>
      <h1>Warsaw</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Partly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"></img>
          10C
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:12%</li>
            <li>Wind: 17km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
