function showWeather(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = response.data.temperature.current;
  let locationElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#current-condition");
  let humidityElement = document.querySelector("#current-humidity");
  let windSpeedElement = document.querySelector("#current-windspeed");
  let feelsLikeElement = document.querySelector("#feels-like-temperature");
  let feelsLikeTemperature = response.data.temperature.feels_like;
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#weather-icon");

  locationElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  temperatureElement.innerHTML = Math.round(temperature);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  feelsLikeElement.innerHTML = Math.round(feelsLikeTemperature);
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="current-weather-icon" alt="weather icon" />`;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function searchLocation(city) {
  let apiKey = "0c03ba179oef7df9dt732c8467e7b15c";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  searchLocation(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchLocation("Johannesburg");
