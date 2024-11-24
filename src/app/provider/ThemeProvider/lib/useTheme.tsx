import { useContext } from "react";
import { LOCAL_STARGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface UseThemeRes {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeRes {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STARGE_THEME_KEY, newTheme);
  };
  return { theme, toggleTheme };
}
