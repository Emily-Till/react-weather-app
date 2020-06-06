import React from "react";
import WeatherData from "./WeatherData";
import "./App.css";

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <WeatherData />
      </header>
    </main>
  );
}

export default App;
