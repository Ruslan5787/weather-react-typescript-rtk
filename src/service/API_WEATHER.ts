interface IAPI_WEATHER {
  URL: string;
  KEY: string;
}

const API_WEATHER: IAPI_WEATHER = {
  URL: "https://api.openweathermap.org/data/2.5",
  KEY: "387129f21868e289849360695ce14435",
};

export function getWeatherUrl(type: string, cityName: string) {
  return `${API_WEATHER.URL}/${type}?q=${cityName}&appid=${API_WEATHER.KEY}&units=metric&appid=&lang=ru`;
}
