import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode(initialValue) {
  const [darkMode, setDarkMode] = useLocalStorage("geceModu", false);
  return [darkMode, setDarkMode];
}

/* 
[] hooks klasörü içinde useDarkMode.jsx dosya ismi ile custom hook oluşturmak.

(1) Bu hook, useState gibi çalışmalı ve darkMode ayarını useLocalStorage hook'unu kullanarak localStorage üzerinden yönetmeli.
 */
