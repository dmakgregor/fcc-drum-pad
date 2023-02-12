import React, { type MouseEventHandler, useCallback } from "react";

interface PadProps {
  padKey: symbol;
  sound: unknown;
}

export const Pad = ({ padKey, sound }: PadProps): JSX.Element => {
  const onClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (e) => {
      e.preventDefault();
      alert(padKey);
    },
    [padKey, sound]
  );

  return <button onClick={onClick}>padKey</button>;
};
