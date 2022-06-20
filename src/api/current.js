const API_KEY = '4aca6f2bce164fffb4741737221906';
const BASE_URL = 'http://api.weatherapi.com/v1';
const searchQuery = document.querySelector('#search');

const getCurrentWeather = async () => {
  try {
    const requestURL = `${BASE_URL}/current.json?key=${API_KEY}&aqi=yes&q=${searchQuery.value}`;
    const response = await fetch(requestURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getCurrentWeather };
