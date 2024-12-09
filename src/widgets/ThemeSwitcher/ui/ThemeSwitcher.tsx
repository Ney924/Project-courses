import { Theme, useTheme } from "app/provider/ThemeProvider";
import * as s from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import DarkIcon from "shared/assets/icons/darkTheme.svg";
import NormalIcon from "shared/assets/icons/normalTheme.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const sizeIcon = 14;
  return (
    <Button
      theme={ThemeButton.RED}
      className={classNames(s.root, {}, [className])}
      onClick={toggleTheme}
    >
      theme
      {theme === Theme.DARK ? (
        <DarkIcon width={sizeIcon} height={sizeIcon} />
      ) : (
        <NormalIcon width={sizeIcon} height={sizeIcon} />
      )}
    </Button>
  );
};
