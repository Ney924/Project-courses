import { ButtonHTMLAttributes, FC } from "react";
import * as s from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeButton {
  CLEAR = "clear",
  RED = "red",
  BORDER = "border",
}

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ThemeButton;
  className?: string;
}
export const MyButton: FC<MyButtonProps> = ({
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
