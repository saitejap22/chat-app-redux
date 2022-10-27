import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sendReducer from "./reducer";

const rootReducer = combineReducers({
  sendReducer: sendReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
