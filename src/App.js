import React, { useState } from "react";

const API_KEY = "55631a1e17db00da5c21a7b66c1363c0";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      if (!response.ok) 
        throw new Error("City not found");
      const data = await response.json();
      setWeather(data);
      setError(null);
    } 
    catch (err) {
      setError(err.message);
      setWeather(null); 
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">Weather App</h1>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-64 p-2 border border-gray-300 rounded-lg shadow"
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow"
        >
          Get Weather
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {weather && (
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-4">
          <h2 className="text-2xl font-semibold mb-2">{weather.name}</h2>
          <p className="text-lg capitalize">{weather.weather[0].description}</p>
          <p className="text-4xl font-bold">{weather.main.temp}&deg;C</p>
          <div className="mt-2 text-sm text-gray-600">
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind: {weather.wind.speed} m/s</p>
          </div>
        </div>
      )}
    </div>
  );
}
