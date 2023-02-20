import React, { useCallback, useContext, useMemo } from 'react';
import { indexBy, isNil, or, pathOr, prop } from 'ramda';
// hooks
import { useAppSelector, useKeyPress } from '../../hooks';
// selectors
import { selectBank } from '../AppControls';
import { selectPadsBank } from './selectors';
// providers
import { ServiceMessageContext } from '../../providers';
// components
import { Pad } from './components/Pad';
// types
import { type PressedKeyType } from '../../types';
/// ////////////////////////////////////////////////////////////////////////////

export const PadsPanel: React.FC = () => {
  const { setServiceMessage } = useContext(ServiceMessageContext);
  const currentBank = useAppSelector(selectBank);
  const pads = useAppSelector(selectPadsBank(currentBank));
  const indexedPads = useMemo(() => indexBy(prop('keyCode'), pads), [pads]);
  const sendMessage = useCallback(
    (keyCode: PressedKeyType) => {
      if (isNil(keyCode)) {
        setServiceMessage(null);
      } else {
        setServiceMessage(pathOr(null, [keyCode, 'name'], indexedPads));
      }
    },
    [indexedPads, setServiceMessage]
  );

  const { pressedKey, setPressedKey } = useKeyPress(sendMessage);

  const handlePadPress = (keyCode: PressedKeyType): void => {
    setPressedKey(keyCode);
    sendMessage(keyCode);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-6">
      {or(pads, []).map(({ keyCode, ...pad }) => (
        <Pad {...pad} key={keyCode} keyCode={keyCode} pressedKey={pressedKey} handlePadPress={handlePadPress} />
      ))}
    </div>
  );
};
