import { RootState } from "../../types/store";

export const getCityName = (state: RootState) => state.userInfo.city;

export const getWebsiteTheme = (state: RootState) => state.websiteTheme;

export const getWeatherToday = (state: RootState) =>
  state.weatherForToday.weather;

export const getWeatherForecast = (state: RootState) =>
  state.weatherForecast.forecast;

export const getNotificationValue = (state: RootState) =>
  state.weatherForToday.response.message;

export const getIsLoadingWeatherToday = (state: RootState) =>
  state.weatherForToday.isLoading;

export const getIsLoadingForecast = (state: RootState) =>
  state.weatherForecast.isLoading;
