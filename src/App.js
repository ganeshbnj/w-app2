import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CityWeather from './CityWeather';
import Component1 from './Component1';
import Component2 from './Component2';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Weather App1 </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CityWeather  />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Breakfast items list </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Component2 />
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Weather App 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CityWeather />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

/*import CityWeather from './CityWeather';
import Component1 from './Component1';
import Component2 from './Component2';

function App() {
  return (
    <div>
      <CityWeather />
      <CityWeather   />
      <Component2 />
    </div>
  );
}

export default App;*/

/*
return (
    <div className="App" style={{ backgroundImage: "url(/images/Yellowstone.jpg)" }}>
      <h1 style={{ color: "black" }}>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="zipCode">Enter Zip Code:</label>
        <input
          type="text"
          id="zipCode"
          value={zipCode}
          onChange={handleChange}
        />
        <button type="submit">Get Temperature</button>
      </form>
      {temperature && <p>The current temperature is {temperature} °F</p>}
    </div>
    
  );
import React, { useState } from 'react';
import axios from 'axios';
import Background from './Background';
import TemperatureBanner from './TemperatureBanner';
import './App.css';

function App() {
  const [zipCode, setZipCode] = useState('');
  const [temperature, setTemperature] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const geoApiUrl = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},US&appid=${process.env.REACT_APP_API_KEY}`;
      const geoApiResponse = await axios.get(geoApiUrl);
      const { lat, lon } = geoApiResponse.data;

      const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`;
      const weatherApiResponse = await axios.get(weatherApiUrl);
      const { temp } = weatherApiResponse.data.main;

      setTemperature(temp);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setZipCode(event.target.value);
  };

  return (
    <div>
      <Background image="Yellowstone.jpg" />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Enter a zip code:
            <input type="text" value={zipCode} onChange={handleInputChange} />
          </label>
          <button type="submit">Get Temperature</button>
        </form>
      </div>
      <TemperatureBanner temperature={temperature} />
    </div>
  );
}

export default App;
*/