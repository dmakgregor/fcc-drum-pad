import { useEffect, useState } from 'react';
import { type PressedKeyType, type UseKeyPressProps } from '../types';

export const useKeyPress = (callback: (keyCode: PressedKeyType) => void): UseKeyPressProps => {
  const [pressedKey, setPressedKey] = useState<PressedKeyType>(null);

  const onKeyDown = (e: KeyboardEvent): void => {
    setPressedKey(e.code);
    callback(e.code);
  };

  const onKeyUp = (_e: KeyboardEvent): void => {
    setPressedKey(null);
    callback(null);
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  return { pressedKey, setPressedKey };
};
