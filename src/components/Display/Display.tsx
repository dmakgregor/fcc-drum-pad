import * as R from "ramda";
import React, { useContext } from "react";
import { KeyPressContext } from "../../providers/KeyPressProvider";
import { useSelector } from "react-redux";
import { selectPadsBank } from "../Pads/selectors";
import { selectBank } from "../Controls/selectors";

export const Display: React.FC = () => {
  // TODO refactor display to any event message
  const { key } = useContext(KeyPressContext);
  const bank = useSelector(selectBank);
  const usedBank = useSelector(selectPadsBank(bank));
  const indexedBank = R.indexBy(R.prop("keyCode"), usedBank);
  const name = R.pathOr(" ", [key != null ? key : "", "name"], indexedBank);

  return (
    <div
      className="flex justify-center items-center bg-black text-white font-semibold w-40 h-16"
      id="display"
    >
      {name}
    </div>
  );
};
