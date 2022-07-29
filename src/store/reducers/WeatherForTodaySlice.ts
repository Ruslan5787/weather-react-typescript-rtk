import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IWeatherForDay, WeatherForToday } from "../../types/Weather";
import { fetchWeatherForToday } from "../ActionCreators";

const initialState: WeatherForToday = {
  weather: {
    main: {
      temp: 0,
      feels_like: 0,
      pressure: 0,
    },
    weather: [
      {
        description: "",
        icon: "",
      },
    ],
    wind: {
      speed: 0,
      deg: 0,
    },
    dt: 0,
    dt_txt: "",
    name: "",
    cod: "",
    message: 0,
    timezone: 0,
  },
  isLoading: false,
  response: { message: "" },
};

export const weatherForTodaySlice = createSlice({
  name: "weatherForecast",
  initialState,
  reducers: {
    resetErrorValue(state) {
      state.response.message = "";
    },
  },
  extraReducers: {
    [fetchWeatherForToday.fulfilled.type]: (
      state,
      action: PayloadAction<IWeatherForDay>
    ) => {
      state.weather = action.payload;
      state.isLoading = false;
    },
    [fetchWeatherForToday.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchWeatherForToday.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.response = {
        message: action.payload,
      };
    },
  },
});

export default weatherForTodaySlice.reducer;
