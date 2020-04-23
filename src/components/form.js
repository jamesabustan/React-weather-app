import React from 'react';
import styles from './form.module.css';

class Form extends React.Component {
    render() {

        return (
            <form onSubmit={this.props.getWeather} className={styles.formComponent}>
                <input type="text" name="city" placeholder="Insert City"/>
                <input type="text" name="country" placeholder="Insert Country"/>
                <button className={styles.button}>Weather me UP</button>
            </form>
        );
    }
}

export default Form;
