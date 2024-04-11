function searchWeather() {
  const locationElement = document.getElementById('location');
  const temperatureElement = document.getElementById('temperature');
  const descriptionElement = document.getElementById('description');
  const weatherIconElement = document.getElementById('weather-icon');

  const cityInput = document.getElementById('cityInput').value;
  const apiKey = '298b88d3cbfb6fae54960d83cf909b22';

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      locationElement.textContent = data.name;
      temperatureElement.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
      descriptionElement.textContent = data.weather[0].description;
      const iconCode = data.weather[0].icon;
      weatherIconElement.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon">`;
    })
    .catch(error => {
      locationElement.textContent = "City not found";
      temperatureElement.textContent = "";
      descriptionElement.textContent = "";
      weatherIconElement.innerHTML = "";
      console.log('Error fetching weather data:', error);
    });
}
