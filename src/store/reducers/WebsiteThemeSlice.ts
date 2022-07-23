import { createSlice } from "@reduxjs/toolkit";

import { Storage } from "../../model/Storage";

export enum ThemeOptions {
  LIGHT = "light",
  DARK = "dark",
}

interface WebsiteThemeState {
  theme: string;
}

const initialState: WebsiteThemeState = {
  theme: Storage.getItem("webSiteTheme") || ThemeOptions.LIGHT,
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
