import type { store } from '../store';
import { type Dispatch, type ReactNode, type SetStateAction } from 'react';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ServiceMessageType = string | null;

export interface ServiceMessageContextType {
  serviceMessage: ServiceMessageType;
  setServiceMessage: Dispatch<SetStateAction<ServiceMessageType>>;
}

export interface ServiceMessageProviderProps {
  children: ReactNode;
}

export type PressedKeyType = string | null;
export type SetPressedKeyType = Dispatch<SetStateAction<PressedKeyType>>;

export interface UseKeyPressProps {
  pressedKey: PressedKeyType;
  setPressedKey: SetPressedKeyType;
}

export interface AppControlsStateType {
  volume: number;
  power: boolean;
  bank: 0 | 1;
}

export interface BankItem {
  src: string;
  name: string;
  keyCode: string;
  keySymbol: string;
}

export type PadsStateType = BankItem[][];
