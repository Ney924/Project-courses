import { FC, useMemo, useState } from "react";
import {
  LOCAL_STARGE_THEME_KEY,
  Theme,
  ThemeContext,
} from "../lib/ThemeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STARGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const togleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };

  const defalutProps = useMemo(
    () => ({
      theme: theme,
      setTheme: togleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defalutProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
