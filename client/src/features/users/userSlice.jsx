import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    isAuthenticated: false,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = action.payload;
      console.log("action payload " + action.payload);
    },
    setAuthenticationStatus: (state, action) => {
      state.isAuthenticated = action.payload;
      console.log(action.payload)
    },
  },
});

export const { setToken, setAuthenticationStatus } = userSlice.actions;
export const selectToken = (state) => state.user.token;
export const selectStatus = (state) => state.user.isAuthenticated;
export default userSlice.reducer;
