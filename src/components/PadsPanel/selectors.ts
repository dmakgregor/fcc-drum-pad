import { type AppControlsStateType, type BankItem, type PadsStateType, type RootState } from '../../types';

export const selectAllPads = (state: RootState): PadsStateType => state.pads;

// TODO rename bank, used bank index. Maybe use different banks (with rewriting its) instead array with all sound banks
export const selectPadsBank =
  (i: AppControlsStateType['bank']) =>
  (state: RootState): BankItem[] =>
    state.pads[i];
