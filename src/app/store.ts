import { configureStore } from "@reduxjs/toolkit";
import controlsReducer from "../components/controls/controlsSlice";

const store = configureStore({
  reducer: {
    controls: controlsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
