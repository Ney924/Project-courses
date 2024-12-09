import { classNames } from "shared/lib/classNames/classNames";
import * as s from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(s.root, {}, [className])}>
      <div className={s.links}>
        <AppLink className={s.mainLink} to={""} theme={AppLinkTheme.SECONDARY}>
          {t("Главная")}
        </AppLink>
        <AppLink to={"about"} theme={AppLinkTheme.SECONDARY}>
          {t("О сайте")}
        </AppLink>
      </div>
    </div>
  );
};
