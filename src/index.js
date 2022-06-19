import './style.css';
import { getCurrentWeather } from './api/current';
import { parseCurrentWeather } from './api/parseCurrent';
// import { current } from './api/current';

parseCurrentWeather().then((data) => console.log(data.country));
