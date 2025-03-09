import { classNames } from "shared/lib/classNames/classNames";
import * as s from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(s.root, {}, [className])}>
      <div className={s.links}></div>
    </div>
  );
};
