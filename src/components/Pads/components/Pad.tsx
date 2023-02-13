import React from "react";

export interface PadProps {
  keyCode: string;
  src: string;
  keySymbol: string;
}

export const Pad = ({
  src,
  keyCode,
  keySymbol,
}: PadProps): JSX.Element | null => (
  <button id={keyCode}>
    <audio src={src} id={keySymbol} />
  </button>
);
