import { combineReducers, configureStore } from "@reduxjs/toolkit";

import websiteThemeReducer from "./reducers/WebsiteThemeSlice";
import weatherForecastReducer from "./reducers/WeatherForecastSlice";
import userCityReducer from "./reducers/UserCitySlice";

export const rootReducer = combineReducers({
  websiteTheme: websiteThemeReducer,
  weatherForecast: weatherForecastReducer,
  userCity: userCityReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
