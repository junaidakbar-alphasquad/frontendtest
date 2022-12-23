import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataApiSlice from "../reduxsetup/dataApi";

const reducer = combineReducers({
  [dataApiSlice.reducerPath]: dataApiSlice.reducer,
});

const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({}).concat(dataApiSlice.middleware),
});
export default store;
