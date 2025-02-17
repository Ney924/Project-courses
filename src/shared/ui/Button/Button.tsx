import { ButtonHTMLAttributes, FC } from "react";
import * as s from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeButton {
  CLEAR = "clear",
  RED = "red",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ThemeButton;
  className?: string;
}
export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme = ThemeButton.CLEAR,
  ...others
}) => {
  return (
    <button
      className={classNames(s.root, {}, [className, s[theme]])}
      {...others}
    >
      {children}
    </button>
  );
};
