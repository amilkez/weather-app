// write funcs that process the json data and return an object with the data required for my app
import { getCurrentWeather } from './current';

const parseCurrentWeather = async () => {
  const currentWeatherData = await getCurrentWeather();

  const { country, name, localtime: localTime } = currentWeatherData.location;

  const {
    humidity,
    feelslike_c: feelsLikeC,
    feelslike_f: feelsLikeF,
    temp_c: tempC,
    temp_f: tempF,
    is_day: isDay,
    wind_mph: windMph,
    wind_kmh: windKmh,
    wind_dir: windDir,
    uv: uvIndex,
  } = currentWeatherData.current;

  const { text: conditionText, icon: conditionImage } =
    currentWeatherData.current.condition;

  return {
    country,
    name,
    localTime,
    humidity,
    feelsLikeC,
    feelsLikeF,
    tempC,
    tempF,
    isDay,
    windMph,
    windKmh,
    windDir,
    uvIndex,
    conditionImage,
    conditionText,
  };
};

export { parseCurrentWeather };
