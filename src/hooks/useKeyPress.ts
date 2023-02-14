import { type Dispatch, useEffect, useState } from "react";

export const useKeyPress = (): [null | string, Dispatch<null | string>] => {
  const [key, setKey] = useState<null | string>(null);

  const onKeyDown = (e: KeyboardEvent): void => {
    setKey(e.code);
  };

  const onKeyUp = (_e: KeyboardEvent): void => {
    setKey(null);
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  return [key, setKey];
};
