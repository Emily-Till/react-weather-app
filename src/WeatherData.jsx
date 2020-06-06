import React from "react";
import getWeatherData from "./core/getWeatherData";

class WeatherData extends React.Component {
  constructor() {
    super();

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    getWeatherData().then((data) => {
      this.setState({
        data: data,
      });
    });
  }

  render() {
    const data = this.state.data;

    if (data === null) {
      return null;
    }
    console.log(data);
    return (
      <div>
        <p>Location: {data.name}</p>
        <p>Weather: {data.weather[0].main}</p>
        <p>Temperature: {data.main.temp}</p>
        <p>
          Wind Speed: {data.wind.speed}
          <abbr title="meters per second"> m/sec</abbr>
        </p>
        <p>Sunrise: {new Date(data.sys.sunrise).toISOString()}</p>
        <p>Sunset: {new Date(data.sys.sunset).toISOString()}</p>
      </div>
    );
  }
}

export default WeatherData;
