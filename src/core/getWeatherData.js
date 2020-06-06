var url =
  "http://api.openweathermap.org/data/2.5/weather?q=leicester&appid=c4f320d668e5ec15a88bf95db5d697b1&q";

function getWeatherData() {
  return fetch(url).then((response) => {
    return response.json();
  });
}

export default getWeatherData;
