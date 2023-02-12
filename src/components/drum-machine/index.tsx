import React from "react";
import { Pads } from "../pads";
import { Display } from "../display";
import { Controls } from "../controls";

export const DrumMachine = (): JSX.Element => {
  return (
    <div id="drum-machine">
      <Pads />
      <Display />
      <Controls />
    </div>
  );
};
