 

import axios from 'axios';

const API_KEY = 'YOUR_API_KEY';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5881c4a70f1f474bc5289105d70aa1b5';

export const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};
