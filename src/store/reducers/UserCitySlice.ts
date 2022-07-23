import { createSlice } from "@reduxjs/toolkit";

interface UserCityState {
  userCity: string;
}

const initialState: UserCityState = {
  userCity: "Yekaterinburg",
};

export const userCitySlice = createSlice({
  name: "userCity",
  initialState,
  reducers: {
    setUserCity(state, action) {
      state.userCity = action.payload;
    },
  },
});

export default userCitySlice.reducer;
