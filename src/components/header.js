import React from 'react';
import styles from './header.module.css';

function WeatherTitle() {
  return (
    <div className={styles.WeatherHeader}>
      <header>
          <h1>Ark</h1>
          <h3>Weather App</h3>
          <p>Inspired from the "Noah's ArK". This app provide's you accurate weather reports.</p>
      </header>
    </div>
  );
}

export default WeatherTitle;
