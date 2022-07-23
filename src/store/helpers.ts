import { IWeatherResponse } from "./types/Weather";

export function getWeatherTodayInfo(payload: IWeatherResponse) {
  return {
    temperature: payload.main.temp,
    feels_like: payload.main.feels_like,
    pressure: payload.main.pressure,
    description: payload.weather[0].description,
    wind_speed: payload.wind.speed,
    wind_deg: payload.wind.deg,
    dt: payload.dt,
    city_name: payload.name,
    timezone: payload.timezone,
  };
}
