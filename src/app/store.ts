import { configureStore } from '@reduxjs/toolkit';
import controlsReducer from '../components/Controls/controlsSlice';
import padsSlice from '../components/Pads/padsSlice';

const store = configureStore({
  reducer: {
    pads: padsSlice,
    controls: controlsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
