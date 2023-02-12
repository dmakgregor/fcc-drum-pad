import { type RootState } from "../../app/store";
import { type BankItem, type PadsState } from "./slice";
import { type ControlsState } from "../controls/slice";

export const selectAllPads = (state: RootState): PadsState => state.pads;

export const selectPad =
  (i: ControlsState["bank"]) =>
  (state: RootState): BankItem[] =>
    state.pads[i];
