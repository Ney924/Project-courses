import { classNames } from "shared/lib/classNames/classNames";
import * as s from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(s.root, {}, [className])}>
      <ThemeSwitcher />

      <div className={s.links}>
        <AppLink className={s.mainLink} to={""} theme={AppLinkTheme.SECONDARY}>
          Main
        </AppLink>
        <AppLink to={"about"} theme={AppLinkTheme.SECONDARY}>
          About
        </AppLink>
      </div>
    </div>
  );
};
