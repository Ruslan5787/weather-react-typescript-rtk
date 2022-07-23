import { createAsyncThunk } from "@reduxjs/toolkit";

import API_WEATHER from "../services/API_WEATHER";
import { IWeatherResponse } from "./types/Weather";

export const fetchWeather = createAsyncThunk(
  "weatherForecast/fetchAll",
  async (cityName: string, thunkAPI) => {
    try {
      const response = await API_WEATHER.get<IWeatherResponse>(
        `/weather?q=${cityName}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Неправильно ввели название города ");
    }
  }
);
