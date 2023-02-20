import React, { type FC, useEffect, useRef } from 'react';
// components
import { type PadPropsType } from '../../../types';
/// ////////////////////////////////////////////////////////////////////////////

export const Pad: FC<PadPropsType> = ({ src, keyCode, keySymbol, handlePadPress, pressedKey }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const padPressed = pressedKey === keyCode;

  const handeMouseDown = (): void => {
    handlePadPress(keyCode);
  };

  const handeMouseUp = (): void => {
    handlePadPress(null);
  };

  const additionalClasses = padPressed ? 'bg-green-300' : 'bg-green-200';
  const buttonClasses = `drum-pad p-4 rounded ${additionalClasses}`;

  useEffect(() => {
    if (audioRef.current !== null) {
      if (padPressed) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }
    }
  }, [padPressed]);

  return (
    <button className={buttonClasses} onMouseDown={handeMouseDown} onMouseUp={handeMouseUp}>
      {keySymbol}
      <audio ref={audioRef} src={src} id={keyCode} />
    </button>
  );
};
