import './style.css';
import './icons/weather/weather-icons.css';
import { getCurrentWeather } from './api/current';
import { parseCurrentWeather } from './api/parseCurrent';
// import { current } from './api/current';

const form = document.querySelector('form');
const querySearch = document.querySelector('#search');

const getDataObject = async () => {
  const data = await parseCurrentWeather();
  console.log(data);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getDataObject();
});
