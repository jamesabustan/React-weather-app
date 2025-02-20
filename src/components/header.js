import React from 'react';
import styles from './header.module.css';

function WeatherTitle() {
  return (
    <div className={styles.WeatherHeader}>
      <header>
          <div className={styles.animateText}>
            ArK
          </div>
          <h3>ArK Weather App</h3>
          <span>Inspired by "Noah's Ark". <br />
          This app provide's you accurate weather reports.</span>
      </header>
    </div>
  );
}

export default WeatherTitle;
