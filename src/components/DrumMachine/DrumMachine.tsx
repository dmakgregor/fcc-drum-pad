import React from 'react';
import { Display } from '../Display';
import { PadsPanel } from '../PadsPanel';

export const DrumMachine: React.FC = () => {
  return (
    <div id="drum-machine" className="flex flex-col items-center gap-8 p-8 bg-cyan-400 justify-items-center">
      <div className="row-span-2">
        <Display />
      </div>
      <div className="row-span-2">
        <PadsPanel />
      </div>
    </div>
  );
};
