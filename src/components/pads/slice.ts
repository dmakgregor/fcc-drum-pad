import { createSlice } from "@reduxjs/toolkit";

export interface BankItem {
  keyCode: string;
  name: string;
  src: string;
}

export type PadsState = BankItem[][];

const initialState: PadsState = [
  [
    {
      keyCode: "keyQ",
      name: "Heater 1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: "keyW",
      name: "Heater 2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
  ],
  [
    {
      keyCode: "keyQ",
      name: "Chord 1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
      keyCode: "keyW",
      name: "Chord 2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
  ],
];

export const padsSlice = createSlice({
  initialState,
  name: "pads",
  reducers: {},
});

export default padsSlice.reducer;
