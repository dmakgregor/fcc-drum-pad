import React, { useContext } from "react";
import { KeyPressContext } from "../../../providers/KeyPressProvider";
import { type BankItem } from "../padsSlice";

export type PadProps = Pick<BankItem, "src" | "keyCode" | "keySymbol">;

export const Pad: React.FC<PadProps> = ({ src, keyCode, keySymbol }) => {
  const { key, setKey } = useContext(KeyPressContext);

  const handeMouseDown = (): void => {
    setKey(keyCode);
  };

  const handeMouseUp = (): void => {
    setKey(null);
  };

  // TODO check how effective use dynamic tailwind classes
  let className = "drum-pad p-4 rounded ";

  if (key === keyCode) {
    className += "bg-green-300";
  } else {
    className += "bg-green-200";
  }

  return (
    <button
      className={className}
      onMouseDown={handeMouseDown}
      onMouseUp={handeMouseUp}
    >
      {keySymbol}
      <audio src={src} id={keySymbol} />
    </button>
  );
};
