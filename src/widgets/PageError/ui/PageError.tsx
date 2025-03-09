import { t } from "i18next";
import * as s from "./PageError.module.scss";
import { MyButton } from "shared/ui/Button/Button";

export const PageError = () => {
  const reloadPage = () => location.reload();
  return (
    <div className={s.root}>
      <h2>{t("Произошла ошибка! Попробуйте обновить страницу")}</h2>
      <MyButton onClick={reloadPage} className={s.button}>
        {t("Обновить cтраницу")}
      </MyButton>
    </div>
  );
};
