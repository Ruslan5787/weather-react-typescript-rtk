import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getFilteredForecastForDays } from "../../helpers/helpers";

import { IForecast, IWeatherForecast } from "../../types/Weather";
import { fetchForecast } from "../ActionCreators";

const initialState: IWeatherForecast = {
  forecast: [],
  isLoading: false,
  response: { message: "" },
};

export const forecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchForecast.fulfilled.type]: (
      state,
      action: PayloadAction<IForecast>
    ) => {
      state.isLoading = false;
      state.forecast = getFilteredForecastForDays(action.payload.list);
    },

    [fetchForecast.pending.type]: (state) => {
      state.isLoading = true;
    },

    [fetchForecast.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

export default forecastSlice.reducer;
