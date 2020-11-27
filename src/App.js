import React from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Form from './components/form/form.jsx';
import Weather from './components/weather/weather.jsx';

const API_KEY = "82c4cfc62916aa63886bc7da433b92f4";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;

    if(city) {
      const api_url = await 
      fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`);
      const data = await api_url.json();
      console.log(data);

      this.setState ({
        temp: data.current.temperature,
        city: data.location.name,
        country:data.location.country,
        pressure:data.current.pressure,
        error:undefined
      });
    }else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "Введите город"
      })
    };
  }
  render () {
    return (
      <div>
        <Header />
        <Form Method={this.getWeather} />
        <Weather 
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          pressure={this.state.pressure}
          error={this.state.error}
        />
      </div>
    )
  };
};

export default App;
