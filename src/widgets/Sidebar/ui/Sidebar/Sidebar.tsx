import { useState } from "react";
import * as s from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwicher } from "widgets/LangSwicher";
import { MyButton, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();
  const toggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(s.root, { [s.collapsed]: collapsed }, [className])}
    >
      <div
        className={classNames(s.items, { [s.itemsCollapsed]: collapsed }, [
          className,
        ])}
      >
        <AppLink
          className={s.mainLink}
          to={RoutePath.main}
          theme={AppLinkTheme.SECONDARY}
        >
          {t("Главная")}
        </AppLink>
        <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY}>
          {t("О сайте")}
        </AppLink>
      </div>
      <div className={classNames(s.swichers, { [s.position]: collapsed }, [])}>
        <MyButton onClick={toggle} theme={ThemeButton.BORDER}>
          {t("свернуть")}
        </MyButton>
        <ThemeSwitcher />
        <LangSwicher />
      </div>
    </div>
  );
};
