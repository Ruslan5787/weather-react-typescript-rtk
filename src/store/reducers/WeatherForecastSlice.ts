import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IWeatherForecast, IWeatherResponse } from "../types/Weather";
import { fetchWeather } from "../ActionCreators";
import { getWeatherTodayInfo } from "../helpers";

const initialState: IWeatherForecast = {
  weather: {
    today: {
      temperature: 0,
      feels_like: 0,
      pressure: 0,
      description: "",
      wind_speed: 0,
      wind_deg: 0,
      dt: 0,
      city_name: "",
      timezone: 0,
    },
    week: [],
    tenDays: [],
    month: [],
  },
  isLoading: false,
  response: { code: "", message: 0 },
};

export const weatherForecastSlice = createSlice({
  name: "weatherForecast",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchWeather.fulfilled.type]: (
      state,
      action: PayloadAction<IWeatherResponse>
    ) => {
      state.isLoading = false;
      state.weather.today = getWeatherTodayInfo(action.payload);
    },

    [fetchWeather.pending.type]: (state) => {
      state.isLoading = true;
    },

    [fetchWeather.rejected.type]: (
      state,
      action: PayloadAction<IWeatherResponse>
    ) => {
      state.isLoading = false;
      state.response = {
        code: action.payload.cod,
        message: action.payload.message,
      };
    },
  },
});

export default weatherForecastSlice.reducer;
