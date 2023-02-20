import React, { useContext } from 'react';
import { ServiceMessageContext } from '../../providers';

export const Display: React.FC = () => {
  const { serviceMessage } = useContext(ServiceMessageContext);

  return (
    <div className="flex justify-center items-center bg-black text-white font-semibold w-40 h-16" id="display">
      {serviceMessage}
    </div>
  );
};
