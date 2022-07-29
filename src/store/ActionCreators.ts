import { createAsyncThunk } from "@reduxjs/toolkit";

import API_WEATHER from "../service/API_WEATHER";
import { IForecast, IWeatherForDay } from "../types/Weather";

const textError = "Неправильно ввели название города";

export const fetchWeatherForToday = createAsyncThunk(
  "weather/fetchAll",
  async (cityName: string, thunkAPI) => {
    try {
      const response = await API_WEATHER.get<IWeatherForDay>(
        `/weather?q=${cityName}`
      );
      return response.data;
    } catch (error: any) {
      switch (error.response.data.cod) {
        case "404":
          return thunkAPI.rejectWithValue("Неправильно ввели название города");

        default:
          return null;
      }
    }
  }
);

export const fetchForecast = createAsyncThunk(
  "forecast/fetchAll",
  async (cityName: string, thunkAPI) => {
    try {
      const response = await API_WEATHER.get<IForecast>(
        `/forecast?q=${cityName}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(textError);
    }
  }
);
