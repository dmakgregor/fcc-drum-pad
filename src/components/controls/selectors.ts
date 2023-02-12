import { type RootState } from "../../app/store";
import { type ControlsState } from "./controlsSlice";

export const selectBank = (state: RootState): ControlsState["bank"] =>
  state.controls.bank;

export const selectVolume = (state: RootState): ControlsState["volume"] =>
  state.controls.volume;

export const selectPower = (state: RootState): ControlsState["power"] =>
  state.controls.power;
