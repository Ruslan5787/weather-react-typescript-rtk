export interface IWeatherForecast {
  forecast: IWeatherForDay[][];
  isLoading: boolean;
  response: IResponse;
}

export interface WeatherForToday {
  weather: IWeatherForDay;
  isLoading: boolean;
  response: IResponse;
}

interface IResponse {
  message: string;
}

export interface IWeatherForDay {
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
  };
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
  wind: {
    speed: number;
    deg: number;
  };
  dt: number;
  dt_txt: string;
  name: string;
  cod: string;
  message: number;
  timezone: number;
}

export interface IForecast {
  list: IWeatherForDay[];
  response: IResponse;
}
