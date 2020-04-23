import React from 'react';
import styles from './weather.module.css';

class Weather extends React.Component{
    render() {

        return (

            // use inline IF to ONLY display data when button is clicked
            <div className={styles.weatherComponent}>
                    {this.props.city && this.props.country && <p>Location : {this.props.city} {this.props.country}</p>}
                    {this.props.temperature && <p>Temperature : {this.props.temperature}</p>}
                    {this.props.humidity && <p>Humidity : {this.props.humidity}</p>}
                    {this.props.description && <p>Weather Condition :{this.props.description}</p>}
                    {this.props.errorMessage && <p>{this.props.errorMessage}</p>}
            </div>
        )
    }
}

export default Weather;
