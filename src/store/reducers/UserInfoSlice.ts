import { createSlice } from "@reduxjs/toolkit";

interface UserCityState {
  city: string;
}

const initialState: UserCityState = {
  city: "Екатеринбург",
};

export const userInfoSlice = createSlice({
  name: "userCity",
  initialState,
  reducers: {
    setUserCity(state, action) {
      state.city = action.payload;
    },
  },
});

export default userInfoSlice.reducer;
