import { type AppControlsStateType, type RootState } from '../../types';

export const selectBank = (state: RootState): AppControlsStateType['bank'] => state.controls.bank;

export const selectVolume = (state: RootState): AppControlsStateType['volume'] => state.controls.volume;

export const selectPower = (state: RootState): AppControlsStateType['power'] => state.controls.power;
