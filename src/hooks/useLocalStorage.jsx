import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(localStorage.getItem(key) || initialValue);
}
