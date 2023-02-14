import React from "react";
import { Pads } from "../Pads";
import { Display } from "../Display";
import { Controls } from "../Controls";

export const DrumMachine: React.FC = () => {
  return (
    <div
      id="drum-machine"
      className="grid grid-cols-2 grid-rows-2 gap-6 p-8 bg-cyan-400 justify-items-center"
    >
      <div className="row-span-2">
        <Pads />
      </div>
      <div className="row-span-1">
        <Display />
      </div>
      <div className="row-span-1">
        <Controls />
      </div>
    </div>
  );
};
