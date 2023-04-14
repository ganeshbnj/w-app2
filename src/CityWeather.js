import React, { useState } from 'react';
import './App.css';
import { Button, TextField } from '@mui/material';
import { grey } from '@mui/material/colors';

function CityWeather() {
    const [zipCode, setZipCode] = useState('');
    const [temperature, setTemperature] = useState('');
  
    const handleChange = (event) => {
      setZipCode(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const API_KEY = 'fc31063d038e628755aeaa34be91b6bf'; // replace with your own API key
      const GEO_API_URL = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},US&appid=${API_KEY}`;
  
      fetch(GEO_API_URL)
        .then((response) => response.json())
        .then((data) => {
          const { lat, lon } = data;
          const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`;
  
          fetch(WEATHER_API_URL)
            .then((response) => response.json())
            .then((data) => {
              const { main } = data;
              setTemperature(main.temp);
            });
        });
    };
  
    const getBackgroundColor = (temperature) => {
      const maxTemp = 100;
      const minTemp = 0;
      const redValue = Math.floor(255 * (temperature - minTemp) / (maxTemp - minTemp));
      return `rgb(${redValue}, 0, 0)`;
    };
  
    return (
      <div 
        className="CityWeather" 
        /*style={{ 
          backgroundColor: "grey",
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
  
        }}*/
        >
        <h1 style={{ color: "white" }}> Raghav's Weather App</h1>
        <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center", color: "white" }}>
          <label htmlFor="zipCode">Enter Zip Code:</label>
          <TextField
            id="zip-code"
            label="Zip Code"
            variant="outlined"
            size="small"
            value={zipCode}
            onChange={handleChange}
         />
          <Button variant="contained" onClick={handleSubmit} style={{ minWidth: "100px" }}> Get Temperature</Button>
        </form>
        {temperature && (
        <h2 style={{ color: "blue", fontSize: "2rem" }}> 
        The current temperature is {temperature} °F
        </h2> 
        )}
      </div>
      
    );
}  
export default CityWeather;