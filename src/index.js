import './normalize.css';
import './style.css';
import './icons/weather/weather-icons.css';
import format from 'date-fns/format';
import { getCurrentWeather } from './api/current';
import { parseCurrentWeather } from './api/parseCurrent';
// import { current } from './api/current';

const form = document.querySelector('form');
const querySearch = document.querySelector('#search');
const currentTime = document.querySelector('.date-time');
const location = document.querySelector('.location');
const temperature = document.querySelector('.temperature');
const feelsLikeText = document.querySelector('.feels-like-text');
const feelsLikeTemp = document.querySelector('.feels-like-temp');
const weatherIcon = document.querySelector('.weather-icon');
const condition = document.querySelector('.condition');
const humidityText = document.querySelector('.humidity');
const uvIndexText = document.querySelector('.uv-index');
const windSpeedText = document.querySelector('.wind-speed');
const weatherDetailsContainer = document.querySelector(
  '.weather-details-container',
);

const displayWeatherData = async () => {
  const data = await parseCurrentWeather();
  const {
    conditionImage,
    conditionText,
    country,
    feelsLikeC,
    feelsLikeF,
    humidity,
    isDay,
    localTime,
    name,
    tempC,
    tempF,
    uvIndex,
    windDir,
    windKmh,
    windMph,
  } = data;

  const formattedTime = format(new Date(localTime), 'EEEE, H:mm aaa');

  weatherDetailsContainer.style.display = 'flex';

  currentTime.textContent = formattedTime;
  location.textContent = `${name}, ${country}`;
  temperature.textContent = `${tempC} °`;
  feelsLikeText.textContent = 'Feels Like';
  feelsLikeTemp.textContent = `${feelsLikeC} °`;
  weatherIcon.src = conditionImage || '';
  weatherIcon.alt = 'Current weather icon';
  condition.textContent = conditionText;
  humidityText.textContent = `${humidity} %`;
  uvIndexText.textContent = uvIndex;

  if (windKmh) {
    windSpeedText.textContent = `${windKmh} kmh`;
  } else {
    windSpeedText.textContent = `${windMph} mph`;
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  displayWeatherData();
});
