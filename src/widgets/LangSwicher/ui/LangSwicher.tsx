import { useTranslation } from "react-i18next";
import * as s from "./LangSwicher.module.scss";
import { Button } from "shared/ui/Button/Button";

export const LangSwicher = () => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <Button onClick={toggleLang} className={s.root}>
      {t("Язык")}
    </Button>
  );
};