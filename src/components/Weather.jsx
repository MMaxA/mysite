import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css'; // Импорт CSS для компонента Weather

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = '2db4a00704c093269d12441680986725'; // Замените на свой API ключ OpenWeatherMap

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setError('City not found. Please enter a valid city name.');
      setWeatherData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather();
    }
  };

  const openWeatherMapLink = weatherData ? `https://openweathermap.org/city/${weatherData.id}` : '';

  return (
    <div className="section weather-section">
      <h2>Weather Forecast</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Forecast</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {weatherData && (
        <div className="weather-data">
          <h3>{weatherData.name}, {weatherData.sys.country}</h3>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          {openWeatherMapLink && (
            <p>
              <a href={openWeatherMapLink} target="_blank" rel="noopener noreferrer">
                View detailed forecast on OpenWeatherMap
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Weather;
