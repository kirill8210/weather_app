import React from 'react';
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = '86f1b43a2e0d3287087f3ac22b5d744b';

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined,
        show: false
    };

    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        if (city) {
            const api_url = await
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${API_KEY}&units=metric`);
            const data = await api_url.json();

            this.setState({
                temp:  data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather['0'].description,
                error: undefined
            });


        } else {
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Введите название города"
            });
        }
    };

    render() {
        return (
            <div className="weather">
                <Title />
                <Form weatherMethod={this.gettingWeather}/>
                <Weather
                    temp = {this.state.temp}
                    city = {this.state.city}
                    country = {this.state.country}
                    humidity = {this.state.humidity}
                    description = {this.state.description}
                    error = {this.state.error}
                />
            </div>
        );
    }
}

export default App;
