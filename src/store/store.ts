import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userInfoReducer from "./reducers/UserInfoSlice";
import weatherForecastReducer from "./reducers/ForecastSlice";
import websiteThemeReducer from "./reducers/WebsiteThemeSlice";
import weatherForTodayReducer from "./reducers/WeatherForTodaySlice";

export const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  websiteTheme: websiteThemeReducer,
  weatherForecast: weatherForecastReducer,
  weatherForToday: weatherForTodayReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
