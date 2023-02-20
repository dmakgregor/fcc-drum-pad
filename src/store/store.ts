import { configureStore } from '@reduxjs/toolkit';
import padsReducer from '../components/PadsPanel/padsSlice';
import controlsReducer from '../components/AppControls/controlsSlice';

export const store = configureStore({
  reducer: {
    pads: padsReducer,
    controls: controlsReducer,
  },
});
