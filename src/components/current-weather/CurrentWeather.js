import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = ({ data }) => {

  const celsiusTemperature = data?.main?.temp;
  const fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;

  return  (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data?.city}</p>
          <p className="weather-description">{data?.weather[0]?.description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data?.weather[0]?.icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">
          {Math.round(celsiusTemperature)}°C <br></br> {Math.round(fahrenheitTemperature)}°F
        </p>

        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label" style={{ color: "yellow", fontWeight: "600" }}>Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data?.main?.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{Math.round(data?.wind?.speed * 3.6)} km/h</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data?.main?.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data?.main?.pressure} mb</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;