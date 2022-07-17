import { useEffect, useState } from "react";

export default function usePersistedTheme(key, initialValue) {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);
    if (storageValue) {
      return storageValue;
    } else {
      return initialValue;
    }
  });

  const body = document.querySelector("body");

  useEffect(() => {
    localStorage.setItem(key, state);

    body.setAttribute("class", state);
  }, [key, state]);

  return [state, setState];
}
