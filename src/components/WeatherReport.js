// WeatherReport Component
import React from "react";
import PropTypes from "prop-types";

const WeatherReport = ({
  weatherData = {},
  units,
}) => {
  return (
    <div className="weather-report">
      <h2 className="big">
        {weatherData.location}
      </h2>
      <h3 className="conditions">
        {weatherData.conditions} | feels
        like {weatherData.feels_like}°
        {units}
      </h3>
      <img
        src={weatherData.icon}
        alt={weatherData.location}
      />
      <div className="temperature">
        <div>
          <p>CURRENT TEMPERATURE</p>
          <h2>
            {weatherData.temp}°{units}
          </h2>
        </div>
        <div>
          <p>MAXIMUN TEMPERATURE</p>
          <h2>
            {weatherData.temp_max}°
            {units}
          </h2>
        </div>
        <div>
          <p>MINIMUM TEMPERATURE</p>
          <h2>
            {weatherData.temp_min}°
            {units}
          </h2>
        </div>
      </div>
      <div className="wind">
        <div>
          <p>WIND SPEED</p>
          <h2>
            {weatherData.wind_speed}{" "}
            meter/sec
          </h2>
        </div>
        <div>
          <p>WIND DIRECTION</p>
          <h2>
            {weatherData.wind_direction}{" "}
            degrees
          </h2>
        </div>
      </div>
      <div className="pressure">
        <div>
          <p>PRESSURE</p>
          <h2>
            {weatherData.pressure} hPa
          </h2>
        </div>
        <div>
          <p>HUMIDITY</p>
          <h2>
            {weatherData.humidity}%
          </h2>
        </div>
      </div>
    </div>
  );
};

WeatherReport.propTypes = {
  units: PropTypes.string,
  weatherData: PropTypes.shape({
    location: PropTypes.string,
    icon: PropTypes.string,
    conditions: PropTypes.string,
    temp: PropTypes.number,
    temp_max: PropTypes.number,
    temp_min: PropTypes.number,
    feels_like: PropTypes.number,
    wind_speed: PropTypes.number,
    wind_direction: PropTypes.number,
    pressure: PropTypes.number,
    humidity: PropTypes.number,
  }),
};

export default WeatherReport;
