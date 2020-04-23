import React from 'react';
import WeatherTitle from '../components/header';
import Form from '../components/form';
import Weather from '../components/weather';
import styles from './home.module.css';


const APIKey = "be1f4d8660083a041587154d1339a0f3";

class Homepage extends React.Component {
    
    constructor(props){
        super(props);
        //create states
        this.state = {
            city : null,
            country : null,
            temperature : null,
            humidity : null,
            description : null,
            errorMessage : null
        };
    }

    // fetch weather API
    getWeatherAPI = async (e) => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKey}`);
        const data = await apiCall.json();

        // set states and validate, if city and country is true ONLY then fetch the data
        if (city && country){
            console.log(data);
            this.setState({
            city : data.name,
            country : data.sys.country,
            temperature : data.main.temp,
            humidity : data.main.humidity,
            description : data.weather[0].description,
            errorMessage : ""
        });
        } else {
            this.setState({
            city : undefined,
            country : undefined,
            temperature : undefined,
            humidity : undefined,
            description : undefined,
            errorMessage : "Please enter City and Country to know your weather report"
        });
    }
}
    

    render() {
        return (
                <div className={styles.HomePage}>
                    <WeatherTitle />
                    {/* pass the function to the form component */}
                    <Form getWeather={this.getWeatherAPI}/>
                    <Weather 
                        city = {this.state.city}
                        country = {this.state.country}
                        temperature = {this.state.temperature}
                        humidity = {this.state.humidity}
                        description = {this.state.description}
                        errorMessage = {this.state.errorMessage}
                    />
                </div>
        );
    }
}


export default Homepage;
