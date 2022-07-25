import axios from "axios";

const API_WEATHER = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

API_WEATHER.interceptors.request.use((config) => {
  config.url =
    config.url + "&units=metric&appid=" + process.env.REACT_APP_API_KEY + "&lang=ru";

  return config;
});

export default API_WEATHER;
