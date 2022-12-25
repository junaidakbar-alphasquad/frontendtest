import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  user: {},
};
const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.token = action.token;
      state.user = action.user;
    },
  },
});
export const {setAuthData}=dataSlice.actions
export default dataSlice.reducer
