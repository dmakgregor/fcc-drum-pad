import { equals } from 'ramda';
import React, { type FC, useMemo } from 'react';
// components
import { type BankItem, type PressedKeyType } from '../../../types';
/// ////////////////////////////////////////////////////////////////////////////

interface PadProps extends BankItem {
  handlePadPress: (keyCode: PressedKeyType) => void;
  pressedKey: PressedKeyType;
}

export const Pad: FC<PadProps> = ({ src, keyCode, keySymbol, handlePadPress, pressedKey }) => {
  const handeMouseDown = (): void => {
    handlePadPress(keyCode);
  };

  const handeMouseUp = (): void => {
    handlePadPress(null);
  };

  const additionalClasses = useMemo(
    () => (equals(pressedKey, keyCode) ? 'bg-green-300' : 'bg-green-200'),
    [pressedKey, keyCode]
  );
  const buttonClasses = useMemo(() => `drum-pad p-4 rounded ${additionalClasses}`, [additionalClasses]);

  return (
    <button className={buttonClasses} onMouseDown={handeMouseDown} onMouseUp={handeMouseUp}>
      {keySymbol}
      <audio src={src} id={keySymbol} />
    </button>
  );
};
