import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  return (
    <div className="Weather">
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
          <li>Wednesday 07:00</li>
          <li>Partly cloudy</li>
        </ul>
      </div>
      <div className="row mt-4 mx-1">
        <div className="col-sm-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="clouds"
            />

            <span className="currentTemp">10</span>
            <span className="unit">°C|F</span>
          </div>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>Humidity:12%</li>
            <li>Wind: 17km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
