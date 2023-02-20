import React from 'react';
import { PadsPanel } from '../PadsPanel';
import { Display } from '../Display';
import { AppControls } from '../AppControls';

export const DrumMachine: React.FC = () => {
  return (
    <div id="drum-machine" className="grid grid-cols-2 grid-rows-2 gap-6 p-8 bg-cyan-400 justify-items-center">
      <div className="row-span-2">
        <PadsPanel />
      </div>
      <div className="row-span-1">
        <Display />
      </div>
      <div className="row-span-1">
        <AppControls />
      </div>
    </div>
  );
};
