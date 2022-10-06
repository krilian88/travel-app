import React, { useState, useEffect } from "react";
import "./Weather.css";
import getTemplate from "../Language/Templates";
const Weather = ({ lat, lng, lang }) => {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&lang=${lang}&appid=c9294924737219b08eb1a4a4dd6209b2`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  }, [lat, lng, lang]);

  return (
    <div className="main-container">
      {weather.main && (
        <div className="location">
          <h2 className="location-name">
            <span>{getTemplate(lang, "forecast")}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="location-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="location-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
