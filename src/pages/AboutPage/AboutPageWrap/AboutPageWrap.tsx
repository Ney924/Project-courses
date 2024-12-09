import { useTranslation } from "react-i18next";
import * as s from "./AboutPageWrap.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface AboutPageWrapProps {
  className?: string;
}
export const AboutPageWrap = ({ className }: AboutPageWrapProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(s.root, {}, [className])}>{t("О сайте")}</div>
  );
};
