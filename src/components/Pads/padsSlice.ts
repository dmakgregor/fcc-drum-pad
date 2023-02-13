import { createSlice } from "@reduxjs/toolkit";
import { type PadProps } from "./components/Pad";

export interface BankItem extends PadProps {
  name: string;
}

export type PadsState = BankItem[][];

const initialState: PadsState = [
  [
    {
      keySymbol: "Q",
      keyCode: "KeyQ",
      name: "Heater 1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keySymbol: "W",
      keyCode: "KeyW",
      name: "Heater 2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keySymbol: "E",
      keyCode: "KeyE",
      name: "Heater 3",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keySymbol: "A",
      keyCode: "KeyA",
      name: "Heater 4",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keySymbol: "S",
      keyCode: "KeyS",
      name: "Clap",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keySymbol: "D",
      keyCode: "KeyD",
      name: "Open-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keySymbol: "Z",
      keyCode: "KeyZ",
      name: "Kick n' Hat",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keySymbol: "X",
      keyCode: "KeyX",
      name: "Kick",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keySymbol: "C",
      keyCode: "KeyC",
      name: "Closed HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ],
  [
    {
      keySymbol: "Q",
      keyCode: "KeyQ",
      name: "Chord 1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
      keySymbol: "W",
      keyCode: "KeyW",
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
