import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataApiSlice from "../reduxsetup/dataApi";
import dataSlice from "../reduxsetup/dataSlice";

const reducer = combineReducers({
  dataSlice,
  [dataApiSlice.reducerPath]: dataApiSlice.reducer,
});

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(dataApiSlice.middleware),
});
export default store;
