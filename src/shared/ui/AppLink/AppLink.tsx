import { Link, LinkProps } from "react-router-dom";
import * as s from "./AppLink.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { FC } from "react";

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  children,
  theme = AppLinkTheme.PRIMARY,
  to,
  ...other
}) => {
  return (
    <Link
      className={classNames("", {}, [className, s[theme]])}
      to={`/${to}`}
      {...other}
    >
      {children}
    </Link>
  );
};
