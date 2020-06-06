import React from "react";
import { WiCloudy } from "react-icons/wi";
import { WiThermometer } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import { WiSunrise } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";
import { IoIosHome } from "react-icons/io";
import { format } from "date-fns";
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

  convertKelvinToCelsius(num) {
    return Math.round((num - 273.15) * 100) / 100;
  }

  formatDate(date) {
    return format(date, "HH:mm");
  }

  render() {
    const data = this.state.data;
    console.log(this);
    if (data === null) {
      return null;
    }
    console.log(data);
    return (
      <div>
        <p>
          <IoIosHome />
          Location: {data.name}
        </p>
        <p>
          <WiCloudy />
          Weather: {data.weather[0].main}
        </p>

        <p>
          <WiThermometer />
          Temperature: {this.convertKelvinToCelsius(data.main.temp)}
        </p>
        <p>
          <WiStrongWind />
          Wind Speed: {data.wind.speed}
          <abbr title="meters per second"> m/sec</abbr>
        </p>

        <p>
          <WiSunrise />
          Sunrise: {this.formatDate(new Date(data.sys.sunrise))}
        </p>
        <p>
          <WiSunset />
          Sunset: {this.formatDate(new Date(data.sys.sunset))}
        </p>
      </div>
    );
  }
}

export default WeatherData;
