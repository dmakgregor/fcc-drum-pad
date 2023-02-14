import React from "react";

export interface PadProps {
  keyCode: string;
  src: string;
  keySymbol: string;
}

export const Pad: React.FC<PadProps> = ({ src, keyCode, keySymbol }) => (
  <button id={keyCode}>
    {keySymbol}
    <audio src={src} id={keySymbol} />
  </button>
);
