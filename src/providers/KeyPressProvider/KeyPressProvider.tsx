import React, { createContext } from 'react';
import { useKeyPress } from '../../hooks';

export type Key = string | null;

export interface KeyPressContextType {
  key: Key;
  setKey: (key: Key) => void;
}

interface KeyPressProviderType {
  children: React.ReactNode;
}

export const KeyPressContext = createContext<KeyPressContextType>({
  key: null,
  setKey: () => {},
});

export const KeyPressProvider: React.FC<KeyPressProviderType> = ({ children }) => {
  const { key, setKey } = useKeyPress();

  return <KeyPressContext.Provider value={{ key, setKey }}>{children}</KeyPressContext.Provider>;
};
