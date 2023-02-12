import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectBank } from "../controls/selectors";

export const Pads = (): JSX.Element => {
  const currentBank = useAppSelector(selectBank);

  return <div className="pads">Current bank to use: {currentBank}</div>;
};
