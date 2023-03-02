import React from 'react';
import { or } from 'ramda';
// hooks
import { useAppSelector } from '../../hooks';
// selectors
import { selectBank } from '../AppControls';
import { selectPadsBank } from './selectors';
// components
import { Pad } from './components/Pad';
/// ////////////////////////////////////////////////////////////////////////////

export const PadsPanel: React.FC = () => {
  const currentBank = useAppSelector(selectBank);
  const pads = useAppSelector(selectPadsBank(currentBank));

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-6">
      {or(pads, []).map(({ keyCode, ...pad }) => (
        <Pad {...pad} key={keyCode} keyCode={keyCode} />
      ))}
    </div>
  );
};
