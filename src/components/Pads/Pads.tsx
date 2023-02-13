import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectBank } from "../Controls/selectors";
import { selectPadsBank } from "./selectors";
import { Pad } from "./components/Pad";

export const Pads = (): JSX.Element => {
  const currentBank = useAppSelector(selectBank);
  const pads = useAppSelector(selectPadsBank(currentBank));

  const padsToRender = pads.map(({ keyCode, src, keySymbol }) => (
    <Pad key={keyCode} keyCode={keyCode} src={src} keySymbol={keySymbol} />
  ));

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-6">{padsToRender}</div>
  );
};
