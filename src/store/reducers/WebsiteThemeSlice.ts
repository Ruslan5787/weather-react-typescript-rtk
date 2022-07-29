import { createSlice } from "@reduxjs/toolkit";

import { STORAGE } from "../../service/STORAGE";

export enum ThemeOptions {
  LIGHT = "light",
  DARK = "dark",
}

interface WebsiteThemeState {
  theme: string;
}

const initialState: WebsiteThemeState = {
  theme: STORAGE.getItem("webSiteTheme") || ThemeOptions.LIGHT,
};

export const websiteThemeSlice = createSlice({
  name: "websiteTheme",
  initialState,
  reducers: {
    switchTheme(state) {
      state.theme =
        state.theme === ThemeOptions.LIGHT
          ? ThemeOptions.DARK
          : ThemeOptions.LIGHT;
    },
  },
});

export default websiteThemeSlice.reducer;
