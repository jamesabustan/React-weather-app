import React from 'react';
import WeatherTitle from '../components/header';
import Form from '../components/form';
import Weather from '../components/weather';

function Homepage() {
  return (
    <div className="App">
      <WeatherTitle />
      <Form />
      <Weather />
    </div>
  );
}

export default Homepage;
