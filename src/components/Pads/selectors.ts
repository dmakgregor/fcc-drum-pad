import { type RootState } from "../../app/store";
import { type BankItem, type PadsState } from "./padsSlice";
import { type ControlsState } from "../Controls/controlsSlice";

export const selectAllPads = (state: RootState): PadsState => state.pads;

export const selectPadsBank =
  (i: ControlsState["bank"]) =>
  (state: RootState): BankItem[] =>
    state.pads[i];
