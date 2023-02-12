import { configureStore } from "@reduxjs/toolkit";
import controlsReducer from "../components/controls/slice";
import padsSlice from "../components/pads/slice";

const store = configureStore({
  reducer: {
    pads: padsSlice,
    controls: controlsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
