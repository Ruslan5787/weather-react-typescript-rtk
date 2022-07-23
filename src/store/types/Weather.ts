export interface IWeatherForecast {
  weather: {
    today: IWeather;
    week: IWeather[];
    tenDays: IWeather[];
    month: IWeather[];
  };
  isLoading: boolean;
  response: IResponseType;
}

export interface IWeather {
  temperature: number;
  feels_like: number;
  pressure: number;
  description: string;
  wind_speed: number;
  wind_deg: number;
  dt: number;
  city_name: string;
  timezone: number;
}

export interface IWeatherResponse {
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
  };
  weather: [
    {
      description: string;
    }
  ];
  wind: {
    speed: number;
    deg: number;
  };
  dt: number;
  name: string;
  cod: string;
  message: number;
  timezone: number;
}

interface IResponseType {
  code: string;
  message: number;
}
