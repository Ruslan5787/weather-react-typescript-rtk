import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import { getWeatherUrl } from "../service/API_WEATHER";
import { IForecast, IWeatherForDay } from "../types/Weather";

const textError = "Неправильно ввели название города";

export const fetchWeatherForToday = createAsyncThunk(
  "weather/fetchAll",
  async (cityName: string, thunkAPI) => {
    try {
      const response = await axios.get<IWeatherForDay>(
        getWeatherUrl("weather", cityName)
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
      const response = await axios.get<IForecast>(
        getWeatherUrl("forecast", cityName)
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(textError);
    }
  }
);
