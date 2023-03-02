import React, { type FC, useCallback, useContext, useEffect, useState } from 'react';
// types
import { type BankItemType } from '../../../types';
import { ServiceMessageContext } from '../../../providers';
/// ////////////////////////////////////////////////////////////////////////////

interface PadPropsType extends BankItemType {}

export const Pad: FC<PadPropsType> = ({ src, keyCode, keySymbol, name }) => {
  const [pressed, setPressed] = useState(false);
  const { setServiceMessage } = useContext(ServiceMessageContext);

  const handleAudioEnd = (): void => {
    setServiceMessage(null);
    setPressed(false);
  };

  const handleAudio = (): void => {
    setPressed(true);
    const audio: HTMLAudioElement | null = document.querySelector(`audio#${keySymbol}`);
    audio?.addEventListener('ended', handleAudioEnd);
    audio?.play().catch(() => {});
    setServiceMessage(name);
  };

  const buttonClasses = `drum-pad p-4 rounded ${pressed ? 'bg-green-300' : 'bg-green-200'}`;

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === keyCode) {
        handleAudio();
      }
    },
    [keyCode]
  );

  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  return (
    <button id={name} onClick={handleAudio} className={buttonClasses}>
      {keySymbol}
      <audio className="clip" src={src} id={keySymbol} />
    </button>
  );
};
