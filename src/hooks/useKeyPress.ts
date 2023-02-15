import { useEffect, useState } from 'react';
import { type Key, type KeyPressContextType } from '../providers/KeyPressProvider';

export const useKeyPress = (): KeyPressContextType => {
  const [key, setKey] = useState<Key>(null);

  const onKeyDown = (e: KeyboardEvent): void => {
    setKey(e.code);
  };

  const onKeyUp = (_e: KeyboardEvent): void => {
    setKey(null);
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  return { key, setKey };
};
