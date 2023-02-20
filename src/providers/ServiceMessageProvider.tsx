import React, { createContext, type FC, useState } from 'react';
import { type ServiceMessageContextType, type ServiceMessageProviderProps, type ServiceMessageType } from '../types';

export const ServiceMessageContext = createContext<ServiceMessageContextType>({
  serviceMessage: '',
  setServiceMessage: () => {},
});

export const ServiceMessageProvider: FC<ServiceMessageProviderProps> = ({ children }) => {
  const [serviceMessage, setServiceMessage] = useState<ServiceMessageType>('');

  return (
    <ServiceMessageContext.Provider value={{ serviceMessage, setServiceMessage }}>
      {children}
    </ServiceMessageContext.Provider>
  );
};
