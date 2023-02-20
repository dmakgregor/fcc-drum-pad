import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type AppControlsStateType } from '../../types';

const initialState: AppControlsStateType = {
  volume: 100,
  power: true,
  bank: 0,
};

export const controlsSlice = createSlice({
  name: 'appControls',
  initialState,
  reducers: {
    changeVolume: (state, action: PayloadAction<AppControlsStateType['volume']>) => ({
      ...state,
      volume: action.payload,
    }),
    switchPower: (state, action: PayloadAction<AppControlsStateType['power']>) => ({
      ...state,
      power: action.payload,
    }),
    changeBank: (state, action: PayloadAction<AppControlsStateType['bank']>) => ({
      ...state,
      bank: action.payload,
    }),
  },
});

export const { changeVolume, switchPower, changeBank } = controlsSlice.actions;

export default controlsSlice.reducer;
