import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface ControlsState {
  volume: number;
  power: boolean;
  bank: 0 | 1;
}

const initialState: ControlsState = {
  volume: 100,
  power: true,
  bank: 0,
};

export const controlsSlice = createSlice({
  name: "controls",
  initialState,
  reducers: {
    changeVolume: (state, action: PayloadAction<ControlsState["volume"]>) => ({
      ...state,
      volume: action.payload,
    }),
    switchPower: (state, action: PayloadAction<ControlsState["power"]>) => ({
      ...state,
      power: action.payload,
    }),
    changeBank: (state, action: PayloadAction<ControlsState["bank"]>) => ({
      ...state,
      bank: action.payload,
    }),
  },
});

export const { changeVolume, switchPower, changeBank } = controlsSlice.actions;

export default controlsSlice.reducer;
