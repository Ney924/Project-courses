import { useTranslation } from "react-i18next";
import * as s from "./MainPageWrap.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface MainPageWrapProps {
  className?: string;
}
export const MainPageWrap = ({ className }: MainPageWrapProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(s.root, {}, [className])}>{t("Главная")}</div>
  );
};
